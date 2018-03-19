const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const chalk = require('chalk')
const webpackConfig = require('../config/webpack.config.dev.js')
const compiler = webpack(webpackConfig)
const devServer = WebpackDevServer(compiler, {
  contentBase:'dist/'
})
devServer.listen(port, HOST, err => {
  if (err) {
    return console.log(err);
  }
  console.log(chalk.cyan('Starting the development server...\n'));
});