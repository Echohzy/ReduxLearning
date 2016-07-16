var route = require('koa-route');
var render = require('../lib/render');

module.exports.get2 = route.get('/main2',function *(){
  this.body = yield render('main2',{test: "Hello Kitty!"});
});

module.exports.get = route.get('/',function *(){
  this.body = yield render('main',{test: "Hello Kitty!"});
});