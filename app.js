var koa = require("koa");
var serve = require("koa-static");
var main = require("./routes/main.js");
var webpack = require("webpack");
var webpackDevMiddleware = require("koa-webpack-dev-middleware");
var config = require("./webpack.config.js");
var compiler = webpack(config);
var app = koa();

app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    publicPath: '/'
}));
app.use(serve("./assets"));

app.use(main.get);
app.listen(8080);