const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index'
  },
  output: {
    path: path.join(__dirname, '..', './dist'),
    filename: "[name].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true,
      chunks: ['index']
    })
  ]
}