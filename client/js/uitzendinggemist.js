var UitzendingGemist = {
  Broadcast: {
    recent: function(callback){
      UitzendingGemist.get(
        "http://apps-api.uitzendinggemist.nl/broadcasts/recent.json",
        callback
      )
    },
  },

  Episode: {
    popular: function(callback){
      UitzendingGemist.get(
        "http://apps-api.uitzendinggemist.nl/episodes/popular.json",
        callback
      )
    },

    search: function(query, callback){
      UitzendingGemist.get(
        "http://apps-api.uitzendinggemist.nl/episodes/search/" + encodeURIComponent(query) + ".json",
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
