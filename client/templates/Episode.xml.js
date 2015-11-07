var Template = function(episode) {
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
            <buttonLockup episode="${episode.nebo_id}">
              <badge src="resource://button-play" />
            </buttonLockup>
          </row>
        </stack>
      </banner>
    </productTemplate>
  </document>`
}
