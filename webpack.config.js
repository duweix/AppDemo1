// webpack.config.js
const path = require('path')
const webpack = require('webpack')

const _entry = {
  index: './src/index.js'
}

const _output = {
  path: path.resolve(__dirname, 'build'),
  filename: '[name].js',
  publicPath: '/'
}

const _module = {
  rules: [
    {
      test: /\.js$/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react',
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader']
    },
    {
      test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }]
    }
  ]
}

const _plugins = [
  /*
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor'
  })
  */
]

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
