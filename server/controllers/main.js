/**
 * Main project controller
 */

module.exports = {
  /**
   * Index page route /
   */
  index: function(req, res) {
    var we = req.getWe();

    res.locals.template = 'home/index';

    // use fullwidth layout in home page
    res.locals.layoutName = 'fullwidth';

    res.view({ title: we.config.appName });
  }
};