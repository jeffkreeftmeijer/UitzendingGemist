var Series = function(data){
  this.id = data.mid
  this.name = htmlEntities(data.name)
  if(data.episodes){
    this.episodes = data.episodes.map(function(episode){
      return new Episode(episode, episode.series)
    })
  }
}
