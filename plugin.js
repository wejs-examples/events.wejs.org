
module.exports = function loadPlugin(projectPath, Plugin) {
  var plugin = new Plugin(__dirname);


  return plugin;
};