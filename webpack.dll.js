/*
* @desc 静态公共资源打包配置
*/


const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: {
    // 定义程序中打包公共文件的入口文件vendor.js
    vendors: ['react']
  },

  output: {
    path: path.resolve(__dirname, './static/dist'),
    filename: '[name].dll.js',
    library: '[name]',
  },

  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: '[name]',
      path: path.join(__dirname, './static/dist/vendors-manifest.json'),
    }),
  ]
}