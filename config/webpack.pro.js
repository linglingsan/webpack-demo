const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports={
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].min.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './news.html',
      filename: 'news.html',
      chunks: ['news']
    })
  ]
};
