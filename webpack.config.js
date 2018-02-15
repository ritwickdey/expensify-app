const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { commonSetup } = require('./webpack.common');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

console.log(`Using file '.env.${process.env.NODE_ENV}' for env variable`);

const setup = env => {
  const config = commonSetup();
  if (env == 'production') {
    console.info('Production Build');
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        mangle: false
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './public/index.html',
        baseName: '/expensify-app/'
      })
    );
  } else {
    console.info('Development Build');
    config.plugins.push(
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './public/index.html',
        baseName: '/'
      })
    );
    Object.assign(config, {
      devtool: 'inline-source-map',
      devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
      }
    });
  }

  return config;
};

module.exports = env => setup(env);
