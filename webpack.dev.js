const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const fs = require('fs')
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: '192.168.0.102',
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