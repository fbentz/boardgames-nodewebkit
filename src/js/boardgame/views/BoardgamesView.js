var Boardgame = require('../models/boardgame');
var Backbone = require('backbone');
var BoardgameItemView = require('./BoardgameItemView');

module.exports = Backbone.View.extend({
  template: require('../templates/boardgame.hbs'),
  initialize: initialize,
  onAdd: onAdd,
  render: render
});

function initialize() {
  this.listenTo(this.collection, 'sync', this.render);
  this.listenTo(this.collection, 'add', this.onAdd);
  this.collection.fetch();
}

function onAdd(model) {
  var boardgame = model;

  var view = new BoardgameItemView({
    model: model
  });
  view.setElement(this.$('tbody'));
  view.render();
}

function render() {
  this.$el.html(this.template());
  return this;
}
