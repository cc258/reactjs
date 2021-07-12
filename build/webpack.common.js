const webpack = require("webpack");
const path = require("path");
const fs = require("fs");

const WebpackBar = require("webpackbar");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

const output = {
  publicPath: "/",
  pathinfo: false,
  path: path.resolve(__dirname, "../static/dist"),
  filename: "[name].js",
  chunkFilename: "[name].js",
};

const webpackModule = {
  rules: [
    {
      test: /\.(j|t)sx?$/,
      include: path.resolve(__dirname, '../static/src'),
      use: {
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          babelrc: false,
          presets: [
            [
              "@babel/preset-env",
              { targets: { browsers: "last 2 versions" } } // or whatever your project requires
            ],
            "@babel/preset-typescript",
            "@babel/preset-react"
          ],
          plugins: [
            // plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
            ["@babel/plugin-proposal-decorators", { legacy: true }],
            ["@babel/plugin-proposal-class-properties", { loose: true }],
            "react-hot-loader/babel"
          ]
        }
      }
    },
    {
      test: /\.(sc|sa|c)ss$/,
      use: ["style-loader", "css-loader", "sass-loader"]
    },
    {
      test: /\.(png|jpe?g|gif|svg)$/i,
      exclude: /(node_modules)/,
      type: 'asset/resource',
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      type: 'asset/resource',
    },
  ]
};

const plugins = [
  /**
   * 打包后先清除dist文件，先于HtmlWebpackPlugin运行
   */
  new CleanWebpackPlugin(),
  /**
   * webpack打包进度条
   * Elegant ProgressBar and Profiler for Webpack
   * @see https://www.npmjs.com/package/webpackbar
   */
  // new WebpackBar(),
  /**
   * 能够更好在终端看到webapck运行的警告和错误
   * Friendly-errors-webpack-plugin recognizes certain classes of webpack errors and cleans, aggregates and prioritizes them to provide a better Developer Experience.
   * @see https://www.npmjs.com/package/friendly-errors-webpack-plugin
   */
  new FriendlyErrorsWebpackPlugin(),

  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "../static/src/index.html")
  }),

  //开启模块热更新，热加载和模块热更新不同，热加载是整个页面刷新
  //别加这一句，会报错： HMR模块热更新出现的错误
  //Uncaught RangeError: Maximum call stack size exceeded
  new webpack.HotModuleReplacementPlugin()

  // new OpenBrowserPlugin({ url: 'http://localhost:8081' }), // 自动打开浏览器
];

const optimization = {
  // usedExports: true, // 标注使用到的导出
  moduleIds: 'deterministic', // deterministic natural named
  // chunkIds: 'named',
  runtimeChunk: 'single',
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all',
      },
    },
  },
}

const resolve = {
  extensions: [".tsx", ".ts", ".js", ".jsx", "json"],
  alias: {
    "react-hot-loader": path.resolve(
      path.join(__dirname, "../node_modules/react-hot-loader")
    ),
    react: path.resolve(path.join(__dirname, "../node_modules/react")),
  }
};

const performance = {
  hints: false
};

const commonConfig = {
  output,
  optimization,
  plugins,
  module: webpackModule,
  resolve,
  performance,
};

module.exports = commonConfig;
