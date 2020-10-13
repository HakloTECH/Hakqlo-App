const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const fs = require('fs')

const webpack = require('webpack')
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ],
  devServer: {
    contentBase: './dist',
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      //"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    https: true,
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
  },
});