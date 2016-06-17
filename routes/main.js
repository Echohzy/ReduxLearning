var route = require('koa-route');
var render = require('../lib/render');

module.exports.get = route.get('/',function *(){
  this.body = yield render('main',{test: "Hello Kitty!"});
});