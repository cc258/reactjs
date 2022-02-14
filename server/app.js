const fs = require("fs");
const path = require("path");
const Koa = require("koa");
const cors = require("koa2-cors");
const static = require("koa-static");
const koaBody = require('koa-body');
const bodyParser = require("koa-bodyparser");
const koaNunjucks = require("koa-nunjucks-2");
const routers = require("./router");

const app = new Koa();

const port = 8090;
const socketPort = { port: 7080 };
// 关于静态资源地址，相对于app.js的路径，如果遇到路径不正确，打点或console查看
const public = "../static/dist";

// 处理跨域的配置
app.use(cors({}));

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

app.use(koaBody({
  multipart: true, // 支持文件上传
  encoding: 'gzip',
  formidable: {
    uploadDir: path.join(__dirname, '../public/upload/'), // 设置文件上传目录
    keepExtensions: true,    // 保持文件的后缀
    maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小
    onFileBegin: (name, file) => { // 文件上传前的设置
      // console.log(`name: ${name}`);
      // console.log(file);
    },
  }
}));

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
wss.on("connection", function connection(ws, req) {
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

app.use(routers.routes());
app.listen(port);
console.log(
  "\033[45;30m DONE \033[40;32m http://localhost:" + port + "/ \033[0m"
);
// console.log(
//   "\033[43;30m DONE \033[40;32m http://localhost:" + port + "/ \033[0m"
// );
console.log("启动成功");
