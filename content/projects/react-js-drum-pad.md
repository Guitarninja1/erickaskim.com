---
title: React.js Drum Pad
description: A drum pad made using React.js
excerpt: This project was a ton of fun, but also had some interesting caveats.
date: 2021-12-20T19:56:55.004Z
image: /public/gpxvdbjw2i8fkolicryu.png
---
This project was a ton of fun, but also had some interesting caveats. The first was having to use 'useEffect' to grab the window to listen for events. Normally you would avoid using event listeners with react, but because the project required listening for keys at a higher level I had to add an event listener and then remove it. Was also odd in that some of the functions I use needed to live in the main return function. 

\[GitHub Repo Here](https://github.com/Guitarninja1/Drum-Pad)