var Backbone = require('backbone');
var BoardgamesView = require('../views/BoardgamesView');
var BoardgameCreateView = require('../views/BoardgameCreateView');

var Boardgames = require('../models/Boardgames');
var Boardgame = require('../models/Boardgame');

module.exports = Backbone.Router.extend({
  routes: {
    'boardgames': 'list',
    'boardgame/create': 'create',
    'boardgame/:id': 'edit',
  },

  list: list,
  create: create,
  edit: edit

});

function list() {
  var boardgames = new Boardgames();
  var listView = new BoardgamesView({
    el: '.col-md-12',
    collection: boardgames
  });
  boardgames.fetch();
  listView.render();
}

function edit(id) {
  var boardgame = new Boardgame({
    _id: id
  });
  boardgame.fetch();
  if (!this.form) {
    this.form = new BoardgameCreateView({
      el: '.col-md-12',
      model: boardgame
    });
  }
  this.form.model = boardgame;
  this.form.render();
}

function create() {
  if (!this.form) {
    this.form = new BoardgameCreateView({
      el: '.col-md-12',
      model: new Boardgame()
    });
  } else {
    this.form.model = new Boardgame();
  }
  this.form.model.on('sync', function() {
    this.navigate('boardgames', {
      trigger: true
    });
  }, this);

  this.form.render();
}
