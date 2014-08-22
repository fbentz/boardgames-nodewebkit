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
  this.listenTo(this.collection, 'add', this.onAdd);
  this.listenTo(this.collection, 'change', this.render);
}

function onAdd(model) {
  var boardgame = model;

  var view = new BoardgameItemView({
    tagName: 'tr',
    model: boardgame
  });

  view.render();
  view.$el.appendTo(this.$('tbody'));
}

function render() {
  this.$el.html(this.template());
  return this;
}
