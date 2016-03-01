module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './app/index.js',
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
      }, {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
};
