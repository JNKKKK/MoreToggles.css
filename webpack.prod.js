const path = require('path');
const { merge } = require('webpack-merge');
const dev = require('./webpack.dev.js');

module.exports = merge(dev, {
    mode: 'production',
    devtool: 'source-map',
});