var route = require('koa-route');

module.exports.get = function *(){
  this.body = "Hello World!";
}