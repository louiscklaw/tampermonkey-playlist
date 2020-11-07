// ==UserScript==
// @name           YouTube Auto-Liker
// @name:zh        YouTube自動點讚
// @name:ja        YouTubeのような自動
// @namespace      https://github.com/HatScripts/youtube-auto-liker
// @version        1.3.1
// @description    Automatically likes videos of channels you're subscribed to
// @description:zh 對您訂閲的頻道視頻自動點讚
// @description:ja 購読しているチャンネルの動画が自動的に好きです
// @description:ru Автоматически нравится видео каналов, на которые вы подписаны
// @description:es Le gustan automáticamente los videos de los canales a los que está suscrito
// @description:pt Gosta automaticamente de vídeos de canais nos quais você está inscrito
// @author         HatScripts
// @license        MIT
// @icon           https://raw.githubusercontent.com/HatScripts/youtube-auto-liker/master/logo.svg
// @match          http://*.youtube.com/*
// @match          https://*.youtube.com/*
// @run-at         document-idle
// @noframes
// ==/UserScript==

/* global GM_info */

(() => {
  'use strict'

  function Debugger (name, enabled) {
    this.debug = {}
    if (!window.console) {
      return () => {}
    }
    for (let m in console) {
      if (typeof console[m] === 'function') {
        if (enabled) {
          this.debug[m] = console[m].bind(window.console, name + ': ')
        } else {
          this.debug[m] = () => {}
        }
      }
    }
    return this.debug
  }

  const DEBUG_ENABLED = GM_info.script.version === 'DEV_VERSION'
  const DEBUG = new Debugger(GM_info.script.name, DEBUG_ENABLED)
  const OPTIONS = {
    CHECK_FREQUENCY:        5000,
    WATCH_THRESHOLD:        0.5,
    HIDE_LIKE_NOTIFICATION: false,
    LIKE_IF_NOT_SUBSCRIBED: false,
  }
  const SELECTORS = {
    PLAYER:           '#movie_player',
    SUBSCRIBE_BUTTON: '#subscribe-button > ytd-subscribe-button-renderer > paper-button',
    LIKE_BUTTON:      'ytd-video-primary-info-renderer #top-level-buttons > ytd-toggle-button-renderer:nth-child(1)',
    NOTIFICATION:     'ytd-popup-container',
  }
  const LIKE_BUTTON_CLICKED_CLASS = 'style-default-active'

  let autoLikedVideoIds = []

  setInterval(()=> {
    console.log('like video start')
    document.querySelector(SELECTORS.LIKE_BUTTON).click()
  },1000)

})()