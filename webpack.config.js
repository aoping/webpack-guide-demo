const path = require('path')
const webpack = require('webpack');

module.exports = {
  // mode: 'development',
  entry: {
    polyfills: './src/polyfills.js',
    index: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.ProvidePlugin({
      // _: 'lodash'
      join: ['lodash', 'join']
    })
  ]
}