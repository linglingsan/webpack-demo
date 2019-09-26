const webpack = require("webpack");

const devConfig = {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: "./dist",
    open: true,
    port: "8081",
    hot: true,
    hotOnly: true,
    proxy: {
      "/api": {
        target: "http://localhost:4000"
      }
    }
  }
};

module.exports = devConfig;
