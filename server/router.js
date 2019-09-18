const Home = require("./controller/home");
// const User = require("./controller/user");
const Api = require("./controller/api");

const router = require("koa-router")();

module.exports = router

  .get("/api/star", Api.allStar)
  .post("/api/star/add", Api.starAdd)
  .post("/api/star/update", Api.starUpdate)
  .post("/api/star/del", Api.starDelete)

  .get("*", Home.index);
