var Episode = {
  find: function(episode_id, series_id, callback) {
    UitzendingGemist.Series.find(series_id, function(series){
      episode = series.episodes.filter(function(episode){
        return episode.mid == episode_id
      })[0]

      episode.series = series
      callback(episode)
    })
  }
}
