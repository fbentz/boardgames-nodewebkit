var Backbone = require('backbone');
var BoardgamesView = require('../views/BoardgamesView');

module.exports = Backbone.Router.extend({
  routes: {
    "boardgames": "list",
    "boardgame/create": "create"
  },

  list: list,
  create: create

});

function list() {
  var Boardgames = require('../models/Boardgames');
  var boardgames = new Boardgames();
  var listView = new BoardgamesView({
    el: '.col-md-8',
    collection: boardgames
  });
}

function create() {
  var Boardgame = require('../models/Boardgame');
  var newBoardgame = new Boardgame();
  var BoardgameCreateView = require('../views/BoardgameCreateView');
  var form = new BoardgameCreateView({
    el: '.col-md-8',
    boardgame: newBoardgame
  });
  form.render();
}
