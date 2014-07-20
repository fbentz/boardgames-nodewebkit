var Boardgame = require('../models/boardgame');
var Backbone = require('backbone');

module.exports = Backbone.View.extend({
	template: require('./templates/boardgame.hbs'),
	render: render
});

function render() {
	this.$el.html(this.template());
	return this;
}
