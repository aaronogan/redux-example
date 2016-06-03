const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'src/app'),
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  entry: [
    PATHS.app + '/index.jsx'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel?cacheDirectory'],
      include: PATHS.app
    }]
  }
};
