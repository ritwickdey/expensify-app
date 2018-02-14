const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('styles.css');

const commonSetup = () => ({
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        use: extractCSS.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [extractCSS]
});

module.exports = { commonSetup };
