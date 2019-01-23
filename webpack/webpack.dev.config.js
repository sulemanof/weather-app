const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 1200,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
