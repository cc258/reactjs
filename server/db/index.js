const mongoose = require('mongoose');
const config = require('../config');

// 连接
mongoose.connect(config.DB, {
  useNewUrlParser: true
});

// 连接成功
mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open to ', config.DB);
})

// 连接异常
mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error: ' + err);
})

// 断开连接
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose connection disconnected');
})

module.exports = mongoose;