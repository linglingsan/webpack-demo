const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
  mode: 'development',
  output: {
    filename: '[name].js'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './news.html',
      filename: 'news.html',
      chunks: ['index', 'news']        //  对应entry对象的key
    })
  ]
};
