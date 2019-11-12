
const webpack = require("webpack");

const devConfig = {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: "./build",
    index: 'index.html',
    open: true,
    port: 4000,
    proxy: {
      '/user-center': 'http://192.168.123.157:5555',
      '/template': 'http://192.168.123.157:5555',
      '/register': 'http://192.168.123.157:5555'
    }
  }
}

module.exports = devConfig;
