var Boardgame = require('../models/Boardgame');
var Backbone = require('backbone');

module.exports = Backbone.View.extend({
  events: {
    'click a[data-action="delete"]': 'destroy'
  },
  template: require('../templates/boardgameListItem.hbs'),
  destroy: destroy,
  render: render
});

function render() {
  var json = this.model.toJSON();
  this.$el.html(this.template(json));
  return this;
}

function destroy(e) {
  e.preventDefault();
  this.model.destroy();
  this.remove();
}
