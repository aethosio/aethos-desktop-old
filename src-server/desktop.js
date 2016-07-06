
global.aethos = { config: require('../aethosconfig.json') };

// Start the web server
var server = app.listen(aethos.config["desktop"]["port"], () => {
  const host = server.address().address;
  const port = server.address().port;

  debug(`Server listening at http://${host}:${port}`);
});
