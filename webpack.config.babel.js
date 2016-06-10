export default {
  context: __dirname + '/app',
  entry: {
    javascript: './index.js',
    html: './index.html'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.html$/, exclude: /node_modules/, loader: 'file?name=[name].[ext]' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.s?css$/, exclude: /node_modules/, loaders: ['style', 'css', 'sass'] }
    ]
  }
}
