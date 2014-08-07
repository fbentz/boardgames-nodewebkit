var $ = require('jquery');
var Backbone = require('backbone');
var BackbonePouch = require('backbone-pouch');
var db = require('./DB');

Backbone.$ = $;

module.exports = Backbone.Model.extend({
  sync: BackbonePouch.sync({
    db: db('boardgame').getInstance()
  }),
  idAttribute: '_id'
});
