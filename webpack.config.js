var webpack = require('webpack');

module.exports = {
  entry: './src/app.jsx',
  output: {
    filename: 'bundle.jsx'
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          compact: false
        }
      }
    ]
  }
}
