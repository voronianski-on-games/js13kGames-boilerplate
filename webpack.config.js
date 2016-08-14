'use strict';

var env = process.env.NODE_ENV || 'development';
var webpack = require('webpack');
var path = require('path');
var HtmlPlugin = require('html-webpack-plugin');

var plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(env)
    }
  }),
  new HtmlPlugin({
    title: 'voronianski-js13k'
  })
];

if ('production' === env) {
  plugins = plugins.concat([
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false }
    }),
    new webpack.NoErrorsPlugin()
  ]);
}

module.exports = {
  devtool: 'eval',

  entry: {
    app: './src/main'
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'b.js'
  },

  plugins: plugins,

  resolve: {
    extensions: ['', '.js', 'json']
  }
};
