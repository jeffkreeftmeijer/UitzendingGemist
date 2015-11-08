var Template = function(episode) {
  function shelf(){
    if(episode.series.episodes.length > 1) {
      return `<shelf>
      <header>
        <title>Meer “${episode.series.name}”</title>
      </header>
      <section>
        ` + episodeLockups(episode.series.episodes, episode.series) + `
      </section>
    </shelf>`
    }
  }

  function episodeLockups(episodes, series) {
    output = ``

    for(i=0; i<episodes.length; i++){
      episode = episodes[i]

      output += `<lockup view="episode" episode="${episode.mid}" series="${series.mid}">
        <img src="${episode.stills ? episode.stills[0].url : episode.image}" width="308" height="174"/>
        <title>${episode.name.replace('&', '&amp;')}</title>
      </lockup>`
    }

    return output
  }

  return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <productTemplate>
      <banner>
        <heroImg src="${episode.stills ? episode.stills[0].url : episode.image}" />
        <infoList>
          <info>
          <header>
          </header>
            <text>${episode['broadcasters'].join(', ')}</text>
            <text>${episode['genres'].join(', ')}</text>
            <text>${Math.round(episode['duration'] / 60)} minuten</text>
          </info>
        </infoList>
        <stack>
          <title>${episode.series.name}</title>
          <row>
            <text>${episode['name']}</text>
          </row>
          <description allowsZooming="true">${episode['description']}</description>
          <row>
            <buttonLockup view="video" episode="${episode.nebo_id}">
              <badge src="resource://button-play" />
            </buttonLockup>
          </row>
        </stack>
      </banner>
      ` + shelf() + `
    </productTemplate>
  </document>`
}
