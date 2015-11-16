var Template = function(episodes) {
  function episodeLockups(){
    output = ``

    for(i=0; i<episodes.length; i++){
      episode = episodes[i]

      output += `<lockup view="episode" episode="${episode.id}" series="${episode.series.id}">
        <img src="${episode.image ? episode.image : resourceLoader.BASEURL + 'images/static.gif'}" width="308" height="174"/>
        <title>${episode.series.name}</title>
        <subtitle class="marqueeOnHighlight">${episode.name} – ${episode.broadcasted_at}</subtitle>
      </lockup>`
    }

    return output;
  }

  return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <head>
      <style>
        .marqueeOnHighlight {
          tv-text-highlight-style: marquee-on-highlight;
        }
      </style>
    </head>
    <stackTemplate>
      <collectionList>
        <grid>
          <header>
            <title>Nieuw</title>
          </header>
          <section>` + episodeLockups() + `</section>
        </grid>
      </collectionList>
    </stackTemplate>
  </document>`
}
