var path = require('path');

module.exports = {
  entry: {
    demo: './demo/js/index.js',
  },
  output: {
    path: path.join(__dirname, 'demo'),
    filename: 'demo-bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
    ],
  },
};
