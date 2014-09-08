var Backbone = require('backbone');
var BoardgamesView = require('../views/BoardgamesView');
var BoardgameCreateView = require('../views/BoardgameCreateView');

var Boardgames = require('../models/Boardgames');
var Boardgame = require('../models/Boardgame');

module.exports = Backbone.Router.extend({

  routes: {
    'boardgames': list,
    'boardgame/create': create,
    'boardgame/:id': create,
  },
  list: list,
  create: create,

});


function list() {
  var boardgames = new Boardgames();
  var listView = new BoardgamesView({
    el: '.col-md-12',
    collection: boardgames
  });
}

function create(id) {
  var boardgame;
  if (id) {
    boardgame = new Boardgame({
      id: id
    });
  } else {
    boardgame = new Boardgame();
  }

  this.form = new BoardgameCreateView({
    model: boardgame
  });

  this.form.model.on('sync', function() {
    this.navigate('boardgames', {
      trigger: true
    });
    this.form.remove();
  }, this);

  this.form.render();
}
