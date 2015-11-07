var UitzendingGemist = {
  Episode: {
    popular: function(callback){
      UitzendingGemist.get(
        "http://apps-api.uitzendinggemist.nl/episodes/popular.json",
        callback
      )
    },

    find: function(id, callback){
      episode = UitzendingGemist.get(
        "http://apps-api.uitzendinggemist.nl/episodes/" + id + ".json",
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
