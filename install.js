var async, _, user;

module.exports = {
  /**
   * Install function run in we.js site install.
   *
   * @param  {Object}   we    we.js object
   * @param  {Function} done  callback
   */
  install: function install(we, done) {
    we.log.info('Starting project install...');

    async = we.utils.async;
    _ = we.utils._;

    we.utils.async.series([
      function registerUser1(done) {
        var user1 = {
          username: 'administrator',
          biography: 'The administrator user account!',
          email: 'contato@albertosouza.net',
          password: '123', // change after install
          displayName: 'Administrator',
          language: 'en-us',
          active: true,
          roles: ['administrator']
        };

        we.log.info('I will create the user: ', user1);

        we.db.models.user.findOrCreate({
          where: { id :1 }, defaults: user1
        })
        .then(function (r) {
          user = r[0];
          we.log.info('New User with id: ', user.id);

          return we.db.models.password.create({
            userId: user.id,
            password: user1.password,
            confirmPassword: user1.password
          })
          .then(function () {
            done();

            return null;
          });
        })
        .catch(done);
      },
      function registerUser2(done) {
        var user2 = {
          username: 'alberto',
          biography: 'The normal user account!',
          email: 'alberto@wejs.org',
          password: '123', // change after install
          displayName: 'albertosouza',
          language: 'pt-br',
          active: true,
          roles: null
        };

        we.log.info('I will create the user: ', user2);

        we.db.models.user.findOrCreate({
          where: { id :2 }, defaults: user2
        })
        .then(function (r) {
          we.log.info('New User with id: ', r[0].id);

          return we.db.models.password.create({
            userId: r[0].id,
            password: user2.password,
            confirmPassword: user2.password
          })
          .then(function () {
            done();
            return null;
          });
        })
        .catch(done);
      },
      function createVocabulary(done) {
        we.db.models.vocabulary.findById(1)
        .then(function(v) {
          if (v) {
            we.log.info('Vocabulary 1 already exists:', v.id);
            done();
            return null;
          }

          return we.db.models.vocabulary.findOrCreate({
            where: {
              name: 'Category'
            },
            defaults: {
              creatorId : user.id,
              name: 'Category'
            }
          })
          .spread(function (v){
            we.log.info('Vocabulary created with id:', v.id);
            done();

            return null;
          });
        })
        .catch(done);
      },
      function createExampleConference(done) {
        we.db.models.event.create({
          abbreviation: 'CIPSSP-V',
          title: 'V CONGRESSO INTERNACIONAL DE PEDAGOGIA SOCIAL E SIMPÓSIO DE PÓS-GRADUAÇÃO',
          about: 'Os Congressos Internacionais de Pedagogia Social (CIPS) são organizados pelo Grupo de Pesquisa Pedagogia Social, da Faculdade de Educação da USP, a Associação Brasileira de Pedagogia Social (ABRAPSocial) e pelas instituições de ensino superior e grupos de pesquisas nomeados neste regulamento e constituem espaços de discussão, de reflexão, de articulação e de avaliação das práticas de Educação Social, popular e comunitária que têm a Pedagogia Social como principal referencial teórico e metodológico.',
          registrationManagerName: 'Alberto Souza',
          registrationManagerEmail: 'contato@albertosouza.net',
          email: 'contato@albertosouza.net',
          location: 'Brasil, Rio de Janeiro',
          latitude: '-22.905412',
          longitude: '-43.1732707',
          tags: ['educação', 'saúde'],
          callForPapersStartDate: new Date(),
          callForPapersEndDate: new Date((new Date()).getTime() + (8 * 86400000)),
          eventStartDate: new Date((new Date()).getTime() + (8 * 86400000)),
          eventEndDate: new Date((new Date()).getTime() + (10 * 86400000)),
          published: true,
          managers: [2]
        })
        .then(function after(r) {
          return r.addManager(2)
          .then(function(){
            we.log.info('Event created: ', r.id, r.title);
            done();
            return null;
          });
        })
        .catch(done);
      },
      function createDefaultMenus (done){
        we.db.models.menu.findOrCreate({
          where: { 'name': 'main'},
          defaults: {
            name: 'main',
            class: 'nav navbar-nav'
          }
        })
        .then(function (rs){
          var r = rs[0];

          we.log.info('New menu with name: '+r.name+' and id: '+r.id);
          // then create menu links
          return we.db.models.link.bulkCreate([
            {
              href: '/',
              text: 'Home',
              title: 'Home page',
              menuId: r.id
            }, {
              href: '/event',
              text: 'Events',
              title: 'Events list',
              menuId: r.id
            },
          ])
          .spread(function(){
            we.log.info('Done create default menus');
            done();
            return null;
          });
        })
        .catch(done);
      }
    ], done);
  }
};