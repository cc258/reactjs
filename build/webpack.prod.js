const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const devConfig = {
  mode: "production",
  devtool: "cheap-module-eval-source-map",
  entry: [path.resolve(__dirname, "../static/src/index.tsx")],
  output: {
    path: path.resolve(__dirname, "../static/dist"),
    filename: "[name].[hash].js",
    chunkFilename: "[name].[hash].js"
  }
};

module.exports = merge(commonConfig, devConfig);
