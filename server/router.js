const koaBody = require('koa-body');
const Router = require('@koa/router');
const routers = new Router();

const Home = require('./controller/home');
// const User = require("./controller/user");
const Api = require('./controller/api');

module.exports = routers
  .get('/compaigns', Api.getCompaigns)
  .post('/api/v1/widget', Api.getWidget)
  .get('/getUsers', Api.getUsers)
  .get('/api/getData', Api.getData)
  .get('/api/star', Api.allStar)
  .post('/api/star/add', Api.starAdd)
  .post('/api/star/update', Api.starUpdate)
  .post('/api/star/del', Api.starDelete)
  .post('/updataFiles', koaBody(), Api.updataFiles)

  .get('/', Home.index);
