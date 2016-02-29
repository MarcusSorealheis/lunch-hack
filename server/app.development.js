const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../webpack.development.config');
const historyApiFallback = require('connect-history-api-fallback');
const path = require('path');

const app = express();
const compiler = webpack(config);

app.use(historyApiFallback());
app.use(webpackDevMiddleware(compiler, {
  publicPath: path.resolve(__dirname, '../dist/'),
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false,
  },
}));
app.use(historyApiFallback());
app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static(config.output.publicPath));

const server = app.listen(process.env.PORT || 8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
