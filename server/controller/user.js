const mongoose = require('mongoose')
const User = mongoose.model('User')
const uuid = require('uuid')

/**
 * 注册新用户
 * @param {Function} next          [description]
 * @yield {[type]}   [description]
 */
exports.signup = async (ctx, next) => {
  const phoneNumber = ctx.request.body.phoneNumber.trim()
  const user = await User.findOne({
    phoneNumber: phoneNumber
  }).exec()
  console.log(user)

  const verifyCode = Math.floor(Math.random() * 10000 + 1)
  console.log(phoneNumber)
  if (!user) {
    const accessToken = uuid.v4()

    user = new User({
      nickname: '测试用户',
      avatar: 'http://upload-images.jianshu.io/upload_images/5307186-eda1b28e54a4d48e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
      phoneNumber: phoneNumber,
      verifyCode: verifyCode,
      accessToken: accessToken
    })
  }
  else {
    user.verifyCode = verifyCode
  }

  try {
    user = await user.save()
    ctx.body = {
      success: true
    }
  }
  catch (e) {
    ctx.body = {
      success: false
    }

    return next
  }

}

/**
 * 更新用户信息操作
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.update = async (ctx, next) => {
  var body = ctx.request.body
  var user = ctx.session.user
  var fields = 'avatar,gender,age,nickname,breed'.split(',')

  fields.forEach(function (field) {
    if (body[field]) {
      user[field] = body[field].trim()
    }
  })

  user = await user.save()

  ctx.body = {
    success: true,
    data: {
      nickname: user.nickname,
      accessToken: user.accessToken,
      avatar: user.avatar,
      age: user.age,
      breed: user.breed,
      gender: user.gender,
      _id: user._id
    }
  }
}

exports.users = async () => {
  console.log('========users=======', User)
  const res = await User.find({});
  return res;
}
exports.addUser = async (ctx, next) => {
  console.log('result=======')
  const user = new User({
    nickname: '测试用户',
    avatar: 'http://ip.example.com/u/xxx.png',
    phoneNumber: '13800138000',
    verifyCode: '5896',
    accessToken: uuid.v4()
  })
  const result = await userHelper.addUser(user)
  console.log('result=======', result)
  if (result) {
    ctx.body = {
      success: true,
      data: result
    }
  }
}

exports.updateUser = async (ctx, next) => {
  const phoneNumber = ctx.request.body.phoneNumber.trim()
  console.log(phoneNumber)
  // var data = await userHelper.updateUser({ phoneNumber })
  // ctx.body = {
  //   success: true,
  //   data
  // }
}

exports.deleteUser = async (ctx, next) => {
  const phoneNumber = ctx.request.body.phoneNumber.trim()
  console.log(phoneNumber)
  var data = await userHelper.deleteUser({ phoneNumber })
  ctx.body = {
    success: true,
    data
  }
}
