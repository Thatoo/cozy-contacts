// Generated by CoffeeScript 1.8.0
var Realtimer;

Realtimer = require('cozy-realtime-adapter');

module.exports = function(server, callback) {
  var realtime;
  realtime = Realtimer({
    server: server
  }, ['contact.*']);
  return callback();
};
