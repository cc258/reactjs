'use strict'

var mongoose = require('mongoose')
var User = mongoose.model('User')

/**
 * 通过电话号码查询
 * @param  {[type]} options.phoneNumber [description]
 * @return {[type]}                     [description]
 */
exports.findByPhoneNumber = async ({ phoneNumber }) => {
  const res = await User.find({ phoneNumber })
  return res;
}

/**
 * 查找所用用户
 * @return {[type]} [description]
 */
exports.findAllUsers = async () => {
  const res = await User.find({});
  return res
}

/**
 * 增加用户
 * @param  {[User]} user [mongoose.model('User')]
 * @return {[type]}      [description]
 */
exports.addUser = async (user) => {
  user = await user.save()
  return user
}

/**
 * 删除用户
 * @param  {[type]} options.phoneNumber [description]
 * @return {[type]}                     [description]
 */
exports.deleteUser = async ({ phoneNumber }) => {
  var flag = false
  console.log('flag==========>' + flag)
  await User.remove({ phoneNumber }, function (err) {
    if (err) {
      flag = false
      // return false
    } else {
      flag = true
    }

  })
  console.log('flag=====await=====>' + flag)
  return flag
}