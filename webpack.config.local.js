const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base');
const path = require('path');

process.env.BROWSERSLIST_ENV = process.env.BABEL_ENV = 'development';

const pathTo = (fileName) => {
  return path.join(__dirname, fileName);
};

module.exports = merge(baseConfig, {
  entry: [pathTo('src/main/js/local.js'), pathTo('src/main/js/index.js')],
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
