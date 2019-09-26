const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const merge = require("webpack-merge");
const devConfig = require("./webpack.dev");
const prodConfig = require("./webpack.pro");

const commonConfig = {
  entry: {
    polyfill: './src/js/polyfill',
    index: './src/js/index',
    news: './src/js/news',
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].min.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index', 'polyfill',]
    }),
    new HtmlWebpackPlugin({
      template: './src/news.html',
      filename: 'news.html',
      chunks: ['news', 'polyfill']
    })
  ]
};

module.exports = env => {
  if (env && env.production) {
    return merge(commonConfig, prodConfig);
  } else {
    return merge(commonConfig, devConfig);
  }
};
