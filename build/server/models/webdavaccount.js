// Generated by CoffeeScript 1.8.0
var WebDAVAccount, americano;

americano = require('cozydb');

module.exports = WebDAVAccount = americano.getModel('WebDAVAccount', {
  id: String,
  login: String,
  token: String,
  password: String,
  ctag: Number,
  cardctag: Number
});
