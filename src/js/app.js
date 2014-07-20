var BoardgameApp = require('./boardgame/index').BoardgameRouter;
var Backbone = require('backbone');
Backbone.$ = require('jquery');


new BoardgameApp();
Backbone.history.start({pushState: false});

