const Home = require("./controller/home");
// const User = require("./controller/user");
const Api = require("./controller/api");

const router = require("koa-router")();

module.exports = router
  .get(
    "/v1/telematics/vehicles/L6T7944Z5GN400022/tem/last-reset-time",
    Api.getData
  )
  .post("/api/v1/widget", Api.getWidget)
  .get("/api/getData", Api.getData)
  .get("/api/star", Api.allStar)
  .post("/api/star/add", Api.starAdd)
  .post("/api/star/update", Api.starUpdate)
  .post("/api/star/del", Api.starDelete)
  .post("/updataFiles", Api.updataFiles)

  .get("*", Home.index);
