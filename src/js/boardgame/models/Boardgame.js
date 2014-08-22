var Base = require('./Base');
var _ = require('lodash');

module.exports = Base.extend({
  defaults: {
    'minPlayer': 1,
    'type': 'boardgame'
  },
  validate: validate
});

function validate(attrs, options) {
  var errors = [];

  if(!attrs.name) {
    errors.push({name: 'name', message: 'Vous devez donner un titre au jeu'});
  }

  if (parseInt(attrs.minPlayer, 10) > parseInt(attrs.maxPlayer, 10)) {
    errors.push({name: 'minPlayer' , message: 'Le nombre de joueur minimun doit être inférieur au joueur max'});
  }

  return errors.length > 0 ? errors : false;
}
