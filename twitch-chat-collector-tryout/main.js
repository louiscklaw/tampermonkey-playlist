//
// ==UserScript==
// @name           twitch-chat-collector
// @name:zh        YouTube自動點讚
// @name:ja        YouTubeのような自動
// @namespace      https://github.com/HatScripts/youtube-auto-liker
// @version        1.3.1
// @description    Automatically likes videos of channels you're subscribed to
// @author         HatScripts
// @license        MIT
// @icon           https://raw.githubusercontent.com/HatScripts/youtube-auto-liker/master/logo.svg
// @match          https://www.twitch.tv/popout/*/chat?popout=
// @include        /^https?:\/\/127.0.0.1.*\/test_page\/$/
// @run-at         document-idle
// @noframes
// ==/UserScript==

/* global GM_info */

function testClick(){
  console.log('test click')

  document.querySelector('.tw-button-icon__icon').click()
}

setInterval(()=> {
  testClick()
},1000)
