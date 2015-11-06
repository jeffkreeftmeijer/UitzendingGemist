var Presenter = {
  defaultPresenter: function(xml) {
    if(this.loadingIndicatorVisible) {
      navigationDocument.replaceDocument(xml, this.loadingIndicator);
      this.loadingIndicatorVisible = false;
    } else {
      navigationDocument.pushDocument(xml);
    }
  },

  modalDialogPresenter: function(xml) {
    navigationDocument.presentModal(xml);
  },

  load: function(event) {
    var self = this,
    element = event.target,
    templateURL = element.getAttribute("template")
    videoURL = element.getAttribute("videoURL")

    if (templateURL) {
      self.showLoadingIndicator();

      resourceLoader.loadResource(templateURL,
        function(resource) {
          if (resource) {
            var doc = self.makeDocument(resource);
            doc.addEventListener("select", self.load.bind(self));
            self.defaultPresenter.call(self, doc);
          }
        }
      )
    }

    if (videoURL) {
      var player = new Player();
      var playlist = new Playlist();
      var mediaItem = new MediaItem("video", videoURL);

      player.playlist = playlist;
      player.playlist.push(mediaItem);
      player.present();
    }
  },

  makeDocument: function(resource) {
    if (!Presenter.parser) {
      Presenter.parser = new DOMParser();
    }

    var doc = Presenter.parser.parseFromString(resource, "application/xml");
    return doc;
  },

  showLoadingIndicator: function() {
    if (!this.loadingIndicator) {
      this.loadingIndicator = this.makeDocument(this.loadingTemplate);
    }

    if (!this.loadingIndicatorVisible) {
      navigationDocument.pushDocument(this.loadingIndicator);
      this.loadingIndicatorVisible = true;
    }
  },

  removeLoadingIndicator: function() {
    if (this.loadingIndicatorVisible) {
      navigationDocument.removeDocument(this.loadingIndicator);
      this.loadingIndicatorVisible = false;
    }
  },

  loadingTemplate: `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
      <loadingTemplate>
        <activityIndicator>
          <text>Loading...</text>
        </activityIndicator>
      </loadingTemplate>
    </document>`
}
