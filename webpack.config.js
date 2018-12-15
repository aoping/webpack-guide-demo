const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MainfestPlugin = require('webpack-manifest-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    another: './src/another-module.js',
    another1: './src/another-module1.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new MainfestPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      name (module) {
        // generate a chunk name...
        return 'vendors'; //...
      }
    }
   }
}