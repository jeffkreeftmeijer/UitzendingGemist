var Series = function(data){
  this.id = data.mid
  this.name = data.name.replace('&', '&amp;')
  if(data.episodes){
    this.episodes = data.episodes.map(function(episode){
      return new Episode(episode, episode.series)
    })
  }
}
