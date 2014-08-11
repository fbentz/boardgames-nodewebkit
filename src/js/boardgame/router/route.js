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
}

function edit(id) {
}

function create() {
  if (!this.form) {
    this.form = new BoardgameCreateView({
      model: new Boardgame()
    });
  }

  this.form.setElement('.col-md-12');

  this.form.model.on('sync', function() {
    this.navigate('boardgames', {
      trigger: true
    });
  }, this);

  this.form.render();
}
