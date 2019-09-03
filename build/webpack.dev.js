const path = require("path");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const devConfig = {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  entry: [
    "react-hot-loader/patch",
    // 实现刷新浏览器webpack-hot-middleware/client?noInfo=true&reload=true 是必填的
    // webpack-hot-middleware/client?noInfo=true&reload=true
    path.resolve(__dirname, "../static/src/index.tsx")
  ]
};

module.exports = merge(commonConfig, devConfig);
