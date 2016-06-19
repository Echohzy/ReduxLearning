var koa = require("koa");
var serve = require("koa-static");
var main = require("./routes/main.js");
var app = koa();

app.use(serve("./assets"));

app.use(main.get);
app.listen(8080);