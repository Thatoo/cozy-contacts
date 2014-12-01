// Generated by CoffeeScript 1.8.0
var americano, contactwatch, host, port, start;

contactwatch = require('./server/initializers/contactwatch');

americano = require('americano');

start = function(host, port, callback) {
  return americano.start({
    name: 'Contacts',
    port: port,
    root: __dirname,
    host: host
  }, function(app, server) {
    return contactwatch(server, function(err) {
      return typeof callback === "function" ? callback(null, app, server) : void 0;
    });
  });
};

if (!module.parent) {
  host = process.env.HOST || '127.0.0.1';
  port = process.env.PORT || 9114;
  start(host, port, function(err) {
    if (err) {
      console.log("Initialization failed, not starting");
      console.log(err.stack);
      return process.exit(1);
    }
  });
} else {
  module.exports = start;
}
