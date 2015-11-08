var Template = function(episodes) {
  function episodeLockups(baseURL){
    output = ``

    for(i=0; i<episodes.length; i++){
      episode = episodes[i]

      output += `<lockup view="episode" episode="${episode.nebo_id}">
        <img src="${episode.stills ? episode.stills[0].url : episode.image}" width="308" height="174"/>
        <title>${episode.series.name.replace('&', '&amp;')}</title>
        <subtitle>${episode.name.replace('&', '&amp;')}</subtitle>
      </lockup>`
    }

    return output;
  }

  return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <stackTemplate>
      <collectionList>
        <grid>
          <header>
            <title>Populair</title>
          </header>
          <section>` + episodeLockups(this.BASEURL) + `</section>
        </grid>
      </collectionList>
    </stackTemplate>
  </document>`
}
