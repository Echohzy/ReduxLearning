var koa = require("koa");
var main = require("./routes/main.js");
var route = require("koa-route");
var app = koa();

app.use(route.get('/', main.get));
app.listen(8080);