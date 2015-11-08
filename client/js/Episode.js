var Episode = function(data){
  this.id = data.nebo_id
  this.name = data.name
  this.description = data.description
  this.image = data.stills ? data.stills[0].url : data.image
  this.broadcasters = data.broadcasters.join(', ')
  this.genres = data.genres.join(', ')
  this.duration = Math.round(data.duration / 60)
  this.series = data.series
}

Episode.find = function(episode_id, series_id, callback) {
  UitzendingGemist.Series.find(series_id, function(series){
    episode = series.episodes.filter(function(episode){
      return episode.mid == episode_id
    })[0]

    episode.series = series
    callback(new Episode(episode))
  })
}
