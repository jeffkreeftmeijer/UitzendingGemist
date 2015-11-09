/*
Copyright (C) 2015 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
A search template lets users search your content and view found results. It includes a search field, a keyboard, and a list of results.
*/
var Template = function() {
  return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <head>
      <style>
        .suggestionListLayout {
          margin: -150 0;
        }
      </style>
    </head>
    <searchTemplate>
      <searchField>Zoeken</searchField>
      <collectionList>
      </collectionList>
    </searchTemplate>
  </document>`
}
