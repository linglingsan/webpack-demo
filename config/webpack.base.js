const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const merge = require("webpack-merge");
const devConfig = require("./webpack.dev");
const prodConfig = require("./webpack.pro");


const commonConfig = {
  entry: {
    polyfill: './src/js/polyfill.js',
    news: './src/js/news.js',
    index: './src/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].[contenthash].min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, exclude: /node_modules/, use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [
                '@babel/plugin-transform-runtime'
              ],
              [
                '@babel/plugin-transform-modules-commonjs'
              ]
            ]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use:
          [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            }
          }, 'css-loader', 'sass-loader',],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images'
        }
      },
      { // 处理字体
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: false
        }
      }

    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          ie8: true,
          //  mangle: true     //  mangle默认就是true，会混淆变量名
        }
      })
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '')
    }
  },

  plugins: [
    new CopyPlugin([{ from: 'lib', to: 'lib' }]),
    new HtmlWebpackPlugin({
      favicon: './favicon.ico',
      template: './src/news.html',
      filename: 'news.html',
      chunks: ['polyfill', 'news']
    }),
    new HtmlWebpackPlugin({
      favicon: './favicon.ico',
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['polyfill', 'index']
    }),
    //  抽离css文件
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: '[id].css',
      ignoreOrder: false
    })
  ]

}

module.exports = env => {
  if (env && env.production) {
    return merge(commonConfig, prodConfig);
  } else {
    return merge(commonConfig, devConfig);
  }
};
