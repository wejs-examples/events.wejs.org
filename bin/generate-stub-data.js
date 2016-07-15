var We = require('we-core');
var we = new We();

we.bootstrap({}, function (err) {
  if (err) throw err;

  var ticketAPI = we.plugins['we-plugin-ticket'].api;

  var stubs = [
    ticketStub(),
    ticketStub(),
    ticketStub()
  ];

  var oldTicket = ticketStub();
  oldTicket.date = new Date((new Date()).getTime() - (10 * 86400000));

  stubs.push(oldTicket);


  we.utils.async.eachSeries(stubs, function(t, next){
    // - Create new ticket to user 1
    ticketAPI.createTicket(t, function (err, salvedTicket) {
      if (err) return next(err);

      next();
    });
  }, function (err){
    if (err) throw err;

    console.log('done');
    we.exit(function(){
      process.exit();
    });
  });

  we.db.models.ticket.bulkCreate(stubs)
  .spread(function afterCreate() {

  });
});

function ticketStub() {
    return  {
      title: 'NodeConf BR',
      typeName: 'Primeiro lote',
      typeIdentifier: 'event-ticket-1',
      date: new Date((new Date()).getTime() + (10 * 86400000)),
      fullName: 'Alberto Souza',
      ownerId: 1, // set bellow
      location: 'Rio de Janeiro, deus me livre, rua X numero 20'
    };
  }
