// ==UserScript==
// @name         Krunker.io ESP
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Lemons
// @match        *://krunker.io/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

fetch(document.URL).then(res => res.text()).then(res => {
    res = res.replace(/if\(!tmpObj.inView\)continue;/, '');

    document.open();
    document.write(res);
    document.close();
});
