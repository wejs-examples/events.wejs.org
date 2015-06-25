var async = require('async');
module.exports = function(we, done) {
  we.db.models.user.find({ limit: 1}).then(function(user) {
  we.db.models.conference.find({ limit: 1}).then(function(cf) {
    we.db.models.cfregistrationtype.create({
      name: 'Participante',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      conferenceId: cf.id
    }).then(function (r) {
      we.log.info('Conference registration type created: ', r.id, r.name);
      done();
    });
  }).catch(done);
  }).catch(done);
};