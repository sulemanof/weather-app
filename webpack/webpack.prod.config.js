const merge = require('webpack-merge');
const common = require('./webpack.common.config');

const prod = {
  mode: 'production',
};

module.exports = merge(common, prod);
