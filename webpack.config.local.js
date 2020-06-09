const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base');
const path = require('path');

process.env.BROWSERSLIST_ENV = process.env.BABEL_ENV = 'development';

module.exports = merge(baseConfig, {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Micro UI playground',
      template: 'src/index.html',
    }),
  ],
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 9000,
    stats: 'minimal',
  },
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'sc-testing/sc-testing.js',
  },
});
