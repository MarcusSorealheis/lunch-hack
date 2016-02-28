var express = require('express')
var path = require('path')
var fallback = require('express-history-api-fallback')

var app = express()
var root = path.join(__dirname, '../dist');

app.use(express.static(root))
app.use(fallback('index.html', { root: root }))

var server = app.listen(process.env.PORT || 8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});