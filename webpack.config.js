const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { commonSetup } = require('./webpack.common');

const setup = env => {
  const config = commonSetup();
  if (env == 'production') {
    console.info('Production Build')
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        mangle: false
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './public/index.html',
        baseName: '/expensify-app/'
      })
    );
  } else {
    console.info('Development Build')
    config.plugins.push(
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './public/index.html',
        baseName: '/'
      })
    );
    Object.assign(config, {
      devtool: 'cheap-module-eval-source-map',
      devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
      }
    });
  }

  return config;
};

module.exports = env => setup(env);
