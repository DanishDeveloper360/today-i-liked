const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const webpack = require('webpack');

process.env.BROWSERSLIST_ENV = process.env.BABEL_ENV = 'production';

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: false,
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: 'sourcemaps/[file].map',
    }),
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
});
