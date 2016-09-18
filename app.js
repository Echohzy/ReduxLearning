var koa = require('koa');
var serve = require('koa-static');
var webpack = require('webpack');
var devMiddleware = require("koa-webpack-dev-middleware");
var hotMiddleware = require("koa-webpack-hot-middleware");
var webpackConfig = require('./webpack.config');
var main = require("./routes/main.js");


var app = koa();
var compiler = webpack(webpackConfig);


app.use(devMiddleware(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));

app.use(hotMiddleware(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

app.use(serve('./public'));
app.use(main.get2);
app.use(main.get);


app.listen(8080);
console.log("lalalalalalala");
console.log("testtesttest");