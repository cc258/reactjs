const HtmlWebpackPlugin = require("html-webpack-plugin");

/** [Optimize CSS Assets Webpack Plugin]
  @see https://github.com/NMFR/optimize-css-assets-webpack-plugin
*/
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/** @see https://github.com/webpack-contrib/terser-webpack-plugin */

const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  entry: ["react-hot-loader/patch", "./static/src/index.jsx"],
  // 使用 source map
  // 当 webpack 打包源代码时，可能会很难追踪到错误和警告在源代码中的原始位置。
  // 例如，如果将三个源文件（a.js, b.js 和 c.js）打包到一个 bundle（bundle.js）中，
  // 而其中一个源文件包含一个错误，那么堆栈跟踪就会简单地指向到 bundle.js。这并通常没有太多帮助
  // 因为你可能需要准确地知道错误来自于哪个源文件。
  // 为了更容易地追踪错误和警告，JavaScript 提供了 source map 功能，
  // 将编译后的代码映射回原始源代码。如果一个错误来自于 b.js，source map 就会明确的告诉你。
  // source map 有很多不同的选项可用，请务必仔细阅读它们，以便可以根据需要进行配置。
  //对于本指南，我们使用 inline-source-map 选项，这有助于解释说明我们的目的（仅解释说明，不要用于生产环境）：
  // devtool: "cheap-module-eval-source-map",
  devtool: false,
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "./static/dist"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./static/dist"),
    compress: true,
    port: 8080,
    // quiet: true,
    // 重要，关于热加载的细节 https://github.com/webpack/docs/wiki/webpack-dev-server#content-base
    hot: true,
    inline: true,
    watchOptions: {
      ignored: /node_modules/
    },
    historyApiFallback: true
  },
  resolve: {
    alias: {
      // react hooks hot loader config
      "react-dom": "@hot-loader/react-dom"
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules|packages/,
        loader: "babel-loader"
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules|packages/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader"
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      name: true,
      cacheGroups: {
        common: {
          test: /[\\/]node_modules[\\/]/,
          name: "common",
          chunks: "initial",
          priority: 2,
          minChunks: 2
        }
      }
    },
    minimizer: [
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require("cssnano"),
        cssProcessorOptions: {
          safe: true,
          discardComments: { removeAll: true }
        },
        canPrint: true
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./static/src/index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),

    //别加这一句，会报错： HMR模块热更新出现的错误
    //Uncaught RangeError: Maximum call stack size exceeded
    //new webpack.HotModuleReplacementPlugin(),

    new webpack.NamedModulesPlugin()
  ]
};
