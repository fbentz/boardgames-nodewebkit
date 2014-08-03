var BaseCollection = require('./BaseCollection');
var Boardgame = require('./Boardgame');
var _ = require('lodash');

module.exports = BaseCollection.extend({
  model: Boardgame,
  pouch: pouch,
  parse: parse
});

function pouch() {
  return {
    options: {
      query: {
        includes_docs: true,
        func: {
          map: function(doc) {
            if(doc.type === 'boardgame') {
              emit(doc, doc._id);
            }
          }
        }
      }
    }
  };
}

function parse(result) {
  return _.pluck(result.rows, 'doc');
}
