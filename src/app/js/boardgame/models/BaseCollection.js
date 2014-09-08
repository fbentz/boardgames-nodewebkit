var Backbone = require('backbone');
var BackbonePouch = require('backbone-pouch');
var PouchDB = require('pouchdb');
var db = require('./DB');

module.exports = Backbone.Collection.extend({
  sync: BackbonePouch.sync({
    db: db('boardgame').getInstance()
  })
});
