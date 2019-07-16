const path = require("path");
const Koa = require("koa");
const static = require("koa-static");
const bodyParser = require("koa-bodyparser");
const koaNunjucks = require("koa-nunjucks-2");

const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackConfig = require("../webpack.config");
const compiler = webpack(webpackConfig);
const app = new Koa();

const port = 8090;
const socketPort = { port: 7080 };
// 关于静态资源地址，相对于app.js的路径，如果遇到路径不正确，打点或console查看
const public = "../static/dist";

app.use(bodyParser());
app.use(static(path.resolve(__dirname, public)));
app.use(
  koaNunjucks({
    ext: "html",
    path: path.resolve(__dirname, "../static/dist"),
    nunjucksConfig: {
      trimBlocks: true
    }
  })
);

// ext (default: 'njk'): Extension that will be automatically appended to the file name in ctx.render calls. Set to a falsy value to disable.
// path (default: current directory): Path to the templates. Also supports passing an array of paths.
// writeResponse (default: true): If true, writes the rendered output to response.body.
// functionName (default: 'render'): The name of the function that will be called to render the template.
// nunjucksConfig: Object of Nunjucks config options.
// configureEnvironment: A function to modify the Nunjucks environment. See the Extending Nunjucks section below for usage.

// websocket
const WebSocket = require("ws");
const clients = [];
const wss = new WebSocket.Server(socketPort);
wss.on("connection", function connection(ws) {
  clients.push(ws);
  ws.on("message", function incoming(message) {
    console.log(
      "\033[45;30m DONE \033[40;32m received: " + message + "/ \033[0m",
      message
    );
    clients.forEach(function (ws1) {
      ws1.send(`service, ${message}`);
    });
  });
});

app.use(require("./router").routes());
app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  })
);
app.use(webpackHotMiddleware(compiler));
app.listen(port);
console.log(
  "\033[45;30m DONE \033[40;32m http://localhost:" + port + "/ \033[0m"
);
console.log(
  "\033[43;30m DONE \033[40;32m http://localhost:" + port + "/ \033[0m"
);
console.log("启动成功");
