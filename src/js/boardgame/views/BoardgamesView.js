var Boardgame = require('../models/boardgame');
var Backbone = require('backbone');

module.exports = Backbone.View.extend({
  template: require('../templates/boardgame.hbs'),
  initialize: initialize,
  render: render
});

function initialize() {
  this.listenTo(this.collection, 'sync', this.render);
}

function render() {
  this.$el.html(this.template());
  return this;
}

