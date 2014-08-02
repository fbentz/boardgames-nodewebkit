var Boardgame = require('../models/boardgame');
var Backbone = require('backbone');

module.exports = Backbone.View.extend({
	template: require('../templates/boardgame.hbs'),
  initialize: initialize,
	render: render
});

function initialize() {
  this.collection.fetch();
  console.log(this.collection);
}

function render() {
	this.$el.html(this.template());
	return this;
}
