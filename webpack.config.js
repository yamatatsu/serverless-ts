var path = require('path')

module.exports = {
  entry:  './index.ts',
  target: 'node',

  module: {
    loaders: [
      {
        test:   /\.ts(x?)$/,
        loader: 'ts-loader',
      },
    ],
  },

  resolve: {
    extensions: [
      '.ts',
      '.js',
      '.tsx',
      '.jsx',
      '',
    ],
  },

  output: {
    libraryTarget: 'commonjs',
    path:          path.join(__dirname, '.built'),
    filename:      'index.js',
  },
}
