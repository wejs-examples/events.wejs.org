var async = require('async');
module.exports = function(we, done) {
  we.db.models.user.find({ limit: 1}).then(function(user) {
    we.db.models.conference.create({
      abbreviation: 'CIPSSP-V',
      title: 'V CONGRESSO INTERNACIONAL DE PEDAGOGIA SOCIAL & SIMPÓSIO DE PÓS-GRADUAÇÃO',
      about: 'Os Congressos Internacionais de Pedagogia Social (CIPS) são organizados pelo Grupo de Pesquisa Pedagogia Social, da Faculdade de Educação da USP, a Associação Brasileira de Pedagogia Social (ABRAPSocial) e pelas instituições de ensino superior e grupos de pesquisas nomeados neste regulamento e constituem espaços de discussão, de reflexão, de articulação e de avaliação das práticas de Educação Social, popular e comunitária que têm a Pedagogia Social como principal referencial teórico e metodológico.',
      registrationManagerName: 'Alberto Souza',
      registrationManagerEmail: 'contato@albertosouza.net',
      location: 'Brasil, Rio de Janeiro',

      callForPapersStartDate: Date.now(),
      callForPapersEndDate: Date.now(),
      registrationStartDate: Date.now(),
      registrationEndDate: Date.now(),
      eventStartDate: Date.now(),
      eventEndDate: Date.now()
    }).then(function (r) {
      we.log.info('Conference created: ', r.id, r.title);
      done();
    });
  }).catch(done);
};