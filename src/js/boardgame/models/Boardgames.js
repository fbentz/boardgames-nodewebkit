var BaseCollection = require('./BaseCollection');
var Boardgame = require('./Boardgame');
var _ = require('lodash');
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
              console.log(doc);
              emit(doc, null);
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
