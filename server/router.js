const Home = require("./controller/home");
// const User = require("./controller/user");
const Api = require("./controller/api");

const router = require("koa-router")();

module.exports = router
  // .get("/getdata", Api.getData)
  // .get("/sn/:id", Home.sn)

  // user
  // .post('/u/signup', App.hasBody, User.signup)
  // .post('/u/update', App.hasBody, App.hasToken, User.update)

  // DB Interface test
  // .get('/test/user/users', User.users)
  // .post('/test/user/add', User.addUser)
  // .post('/test/user/update', User.updateUser)
  // .post('/test/user/delete', User.deleteUser)

  .get('/api/star', Api.allStar)
  .post('/api/star/add', Api.starAdd)
  .post('/api/star/update', Api.starUpdate)
  .post('/api/star/del', Api.starDelete)


  .get("*", Home.index);
