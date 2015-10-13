/**
 * Main project controller
 */

module.exports = {
  /**
   * Index page route /
   */
  index: function(req, res) {
    var we = req.getWe();

    if (!res.locals.metadata) res.locals.metadata = {};

    res.locals.metadata.description = 'Host multiple events in one installation and every event have its own content, administrative interface and compatible with We.js plugins';
    res.locals.metadata.image = 'http://wejs.org/public/plugin/we-core/files/images/logo.png';
    res.locals.metadata.keywords = 'Events, conferences, we.js, node.js, javascript';

    res.view({ title: we.config.appName });
  }
};