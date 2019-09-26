const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
  mode: 'production',
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
