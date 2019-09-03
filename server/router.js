const Home = require("./controller/home");
const User = require("./controller/user");
const Api = require("./controller/api");

const router = require("koa-router")();

module.exports = router
  .get("/getdata", Api.getData)
  .get("/sn/:id", Home.sn)
  .get("/user/reg", User.reg)
  .post("/user/validate", User.validate)
  .get("/user", async (ctx, next) => {
    ctx.response.body = `
      <form action="/user/validate" method="post">
        <input name="name" type="text" placeholder="请输入用户名：ikcamp"/>
        <br/>
        <input name="password" type="text" placeholder="请输入密码：123456"/>
        <br/>
        <button>GoGoGo</button>
      </form>
    `;
  })
  .get("/app", Home.app)
  .get("*", Home.index);
