var PouchDB = require('pouchdb');

var myDB = function(name, debug) {

  var instance;

  function init() {
      return new PouchDB(name);
  }

  return {
    getInstance: function() {
      if(!instance) {
        instance = init();
      }
      return instance;
    }
  };

};

module.exports = myDB;
