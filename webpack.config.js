// webpack.config.js
const path = require('path')

const _entry = {
  index: './src/index.js'
}

const _output = {
  path: path.join(__dirname, 'build'),
  filename: '[name].js',
  publicPath: '/'
}

const _module = {
  rules: [
    {
      test: /\.js$/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react',
      exclude: /node_modules/
    }
  ]
}

const _plugins = []

const _devServer = {
  contentBase: path.join(__dirname, 'public'),
  compress: true,
  port: 9000
}

module.exports = (options = {}) => ({
  entry: _entry,
  output: _output,
  module: _module,
  plugins: _plugins,
  devServer: _devServer
})
