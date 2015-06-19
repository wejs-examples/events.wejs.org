/**
 * Main project controller
 */

module.exports = {
  /**
   * Index page route /
   */
  index: function(req, res) {
    var we = req.getWe();
    res.view({ title: we.config.appName });
  }
};