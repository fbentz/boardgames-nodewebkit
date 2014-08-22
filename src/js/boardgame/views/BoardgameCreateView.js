var Backbone = require('backbone');
var Boardgame = require('../models/Boardgame');
var _ = require('lodash');

module.exports = Backbone.View.extend({
  events: {
    'click .save': 'save',
    'change input': 'fieldChanged',
  },
  template: require('../templates/boardgameForm.hbs'),
  initialize: initialize,
  render: render,
  fieldChanged: fieldChanged,
  fieldValidate: fieldValidate,
  displayValid: displayValid,
  displayErrors: displayErrors,
  save: save
});

function initialize() {
  this.listenTo(this.model, 'change', this.fieldValidate);
  this.listenTo(this.model, 'sync', this.render);
}

function render() {
  this.$el.html(this.template(this.model.toJSON()));
  return this;
}

function fieldChanged(e) {
  var field = this.$(e.currentTarget);
  var data = {};
  data[field.attr('id')] = field.val();
  this.model.set(data);
}

function fieldValidate(model) {
  this.displayValid(model);
  if (!model.isValid()) {
    this.displayErrors(model.validationError);
  }
}

function displayValid() {
  _.each(this.$('form')[0], function(field) {
    if (field.type !== 'submit') {
      var id = '#' + field.getAttribute('id');
      var input = this.$(id);
      input
        .parent()
        .removeClass('has-error')
        .addClass('has-success');
    }
  }, this);
}

function displayErrors(errors) {
  _.each(errors, function(error) {
    var id = '#' + error.name;
    this.$(id).parent().addClass('has-error');
  }, this);
}

function save(e) {
  e.preventDefault();
  if (this.model.isValid()) {
    this.model.save();
  }
}
