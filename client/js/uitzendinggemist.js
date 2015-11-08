var UitzendingGemist = {
  Episode: {
    popular: function(callback){
      UitzendingGemist.get(
        "http://apps-api.uitzendinggemist.nl/episodes/popular.json",
        callback
      )
    },
  },

  Series: {
    find: function(id, callback){
      UitzendingGemist.get(
        "http://apps-api.uitzendinggemist.nl/series/" + id + ".json",
        callback
      )
    }
  },

  get: function(url, callback){
    request = new XMLHttpRequest()
    request.open("GET", url)
    request.addEventListener("load", function(){
      callback(JSON.parse(request.responseText))
    })
    request.send()
  }
}
