"use strict";

var app = new PLAYGROUND.Application({

  smoothing: false,

  create: function create() {

    /* things to preload */

    this.loadImage("giana");
  },

  ready: function ready() {

    /* after preloading route events to the game state */

    this.setState(ENGINE.Game);
  }

});