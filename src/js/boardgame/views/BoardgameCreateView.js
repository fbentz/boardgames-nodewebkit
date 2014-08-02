var Backbone = require('backbone');
var Boardgame = require('../models/Boardgame');

module.exports = Backbone.View.extend({
  events: {
    'click .save': 'save'
  },
  template: require('../templates/boardgameForm.hbs'),
  initialize: initialize,
  render: render,
  save: save
});

function initialize(options) {
  this.boardgame = options.boardgame;
  this.listenTo(this.boardgame, 'change', this.update);
}

function render() {
  this.$el.html(this.template());
  return this;
}

function save(e) {
  e.preventDefault();
  var title = this.$('.title').val();
  var minPlayer = this.$('.min-player').val();
  var maxPlayer = this.$('.max-player').val();
  var time = this.$('.time').val();
  this.boardgame.set('title', title);
  this.boardgame.set('minPlayer', minPlayer);
  this.boardgame.set('maxPlayer', maxPlayer);
  this.boardgame.set('time', time);
  this.boardgame.save();
}
