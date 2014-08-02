var BaseCollection = require('./BaseCollection');
var Boardgame = require('./Boardgame');
var _ = require('lodash');
module.exports = BaseCollection.extend({
  model: Boardgame,
  parse: parse
});

function parse(result) {
  console.log(result);
  return _.pluck(result.rows, 'doc');
}
