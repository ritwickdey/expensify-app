const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('styles.css');
const webpack = require('webpack');

const commonSetup = () => ({
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    extractCSS,
    new webpack.DefinePlugin({
      'process.env.FIRE_API_KEY': JSON.stringify(process.env.FIRE_API_KEY),
      'process.env.FIRE_AUTH_DOMAIN': JSON.stringify(process.env.FIRE_AUTH_DOMAIN),
      'process.env.FIRE_DATABASE_URL': JSON.stringify(process.env.FIRE_DATABASE_URL),
      'process.env.FIRE_PROJECT_ID': JSON.stringify(process.env.FIRE_PROJECT_ID),
      'process.env.FIRE_STORAGE_BUCKET': JSON.stringify(process.env.FIRE_STORAGE_BUCKET),
      'process.env.FIRE_MESSAGINGSENDER_ID': JSON.stringify(process.env.FIRE_MESSAGINGSENDER_ID)
    })
  ]
});

module.exports = { commonSetup };
