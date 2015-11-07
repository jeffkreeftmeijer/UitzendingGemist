function ResourceLoader(baseurl) {
  if (!baseurl) {
      throw("ResourceLoader: baseurl is required.");
  }

  this.BASEURL = baseurl;
}

ResourceLoader.prototype.loadResource = function(resource, data, callback) {
  var self = this;
  evaluateScripts([resource], function(success) {
    if (success) {
      var resource = Template.call(self, data);
      callback.call(self, resource);
    } else {
      throw ("Resource Loader Error");
    }
  });
}
