var BoardgameApp = require('./boardgame/index').BoardgameRouter;
var Backbone = require('backbone');

var $ = window.jQuery = require('jquery');

Backbone.$ = $;

new BoardgameApp();
Backbone.history.start({pushState: false});
