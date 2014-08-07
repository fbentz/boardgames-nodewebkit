/* global emit*/
var _ = require('lodash');

var BaseCollection = require('./BaseCollection');
var Boardgame = require('./Boardgame');
var db = require('./DB');

module.exports = BaseCollection.extend({
  model: Boardgame,
  parse: parse,
  pouch: {
    fetch: 'query',
    options: {
      query: {
        include_docs: true,
        fun: {
          map: function map(doc) {
            if (doc.type === 'boardgame') {
              emit(doc, doc);
            }
          }
        }
      }
    }
  }
});

function parse(result) {
  return _.pluck(result.rows, 'doc');
}
