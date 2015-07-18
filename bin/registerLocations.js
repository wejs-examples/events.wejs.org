var async = require('async');
var we = require('we-core');


we.bootstrap(function(err, we) {
  if (err) throw err;

  var register = require(
    we.projectPath +'/node_modules/we-plugin-location/bin/registerAllLocations.js'
  );

  register.saveLocations(we, doneAll);
});


function doneAll(err) {
  if ( err ) {
    we.log.error('Error on create user:', err);
  }

  we.exit(function () {
    // end / exit
    process.exit();
  });
}
