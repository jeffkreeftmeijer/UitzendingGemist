var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <productTemplate>
    <banner>
      <heroImg src="${'http://mediadb.omroep.nl/assets/001/857/976.jpg'}" />
      <infoList>
        <info>
        <header>
        </header>
          <text>${["KRO-NCRV"].join(', ')}</text>
          <text>${["Drama","Serie/soap"].join(', ')}</text>
          <text>${Math.round(2922/ 60)} minuten</text>
        </info>
      </infoList>
      <stack>
        <title>${"Penoza"}</title>
        <row>
          <text>“${"Aflevering 5 - Gevaarlijke ontmoeting"}”</text>
        </row>
        <description allowsZooming="true">${"Carmen besluit met de Mexicanen een deal op te zetten om Justine de Heer buitenspel te zetten. Natalie werkt met tegenzin mee met haar moeder, maar zij heeft ook een eigen geheim."}</description>
        <row>
          <buttonLockup videoURL="http://download.blender.org/peach/trailer/trailer_480p.mov">
            <badge src="resource://button-play" />
          </buttonLockup>
        </row>
      </stack>
    </banner>
    <shelf>
      <header>
        <title>Meer “${"Penoza"}”</title>
      </header>
      <section>
        <lockup template="${this.BASEURL}templates/Episode.xml.js">
          <img src="http://mediadb.omroep.nl/assets/001/816/497.jpg" width="308" height="205"/>
          <title>Aflevering 8 - Gedreven tot waanzin</title>
        </lockup>
        <lockup template="${this.BASEURL}templates/Episode.xml.js">
          <img src="http://mediadb.omroep.nl/assets/001/892/271.jpg" width="308" height="205"/>
          <title>Aflevering 7 - Geheimen ontrafeld</title>
        </lockup>
        <lockup template="${this.BASEURL}templates/Episode.xml.js">
          <img src="http://mediadb.omroep.nl/assets/001/872/911.jpg" width="308" height="205"/>
          <title>Aflevering 6 - Chaos in de onderwereld</title>
        </lockup>
      </section>
    </shelf>
  </productTemplate>
</document>`
}
