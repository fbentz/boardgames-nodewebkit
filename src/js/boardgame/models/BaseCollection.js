var Backbone = require('backbone');
var BackbonePouch = require('backbone-pouch');
var PouchDB = require('pouchdb');
var db = require('./DB');

module.exports = Backbone.Collection.extend({
  initialize: initialize,
  sync: BackbonePouch.sync({
    db: db('boardgame').getInstance()
  })
});

function initialize() {
  window.pouch = db('boardgame').getInstance();
}
