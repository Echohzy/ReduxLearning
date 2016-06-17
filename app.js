var koa = require("koa");
var main = require("./routes/main.js");
var app = koa();

app.use(main.get);
app.listen(8080);