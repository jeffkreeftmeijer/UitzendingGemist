var Template = function(episodes) {
  function episodeLockups(){
    output = ``

    for(i=0; i<episodes.length; i++){
      episode = episodes[i]

      output += `<lockup view="episode" episode="${episode.id}" series="${episode.series.id}">
        <img src="${episode.image}" width="308" height="174"/>
        <title>${episode.series.name}</title>
        <subtitle>${episode.name}</subtitle>
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
            <title>Meest bekeken</title>
          </header>
          <section>` + episodeLockups() + `</section>
        </grid>
      </collectionList>
    </stackTemplate>
  </document>`
}
