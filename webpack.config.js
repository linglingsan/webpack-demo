const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = function (env, argv) {
    env = env || {};

    return {
        entry: {
            index: './js/index',
            news: './js/news'
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
                '@': path.resolve(__dirname, 'src')
            }
        },
        ...env.development ? require('./config/webpack.dev') : require('./config/webpack.pro')
    };
};
