var $ = require('jquery');
var Backbone = require('backbone');
var BackbonePouch = require('backbone-pouch');
var PouchDB = require('pouchdb');

Backbone.$ = $;

module.exports = Backbone.Model.extend({
  sync: BackbonePouch.sync({
    db: new PouchDB('boardgames')
  }),
  idAttribute: '_id'
});
