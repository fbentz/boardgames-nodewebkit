var Backbone = require('backbone');
var BackbonePouch = require('backbone-pouch');
var PouchDB = require('pouchdb');

module.exports = Backbone.Collection.extend({
  sync: BackbonePouch.sync({
    db: PouchDB('boardgames')
  })
});
