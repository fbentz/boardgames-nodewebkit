var Boardgame = require('../models/Boardgame');
var Backbone = require('backbone');

module.exports = Backbone.View.extend({
  template: require('../templates/boardgameListItem.hbs'),
  render: render
});

function render() {
  this.$el.html(this.template());
  return this;
}
