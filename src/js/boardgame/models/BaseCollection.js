var Backbone = require('backbone');
var BackbonePouch = require('backbone-pouch');
var PouchDB = require('pouchdb');

module.exports = Backbone.Collection.extend({
  sync: BackbonePouch.sync({
    db: new PouchDB('boardgames'),
    fetch: 'query',
    options: {
      query: {
        include_docs: true,
        fun: {
          map: function(doc) {
            if (doc.type === 'boardgame') {
              emit(doc, null);
            }
          }
        }
      }
    }
  })
});
