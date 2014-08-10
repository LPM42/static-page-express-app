var express = require('express');
var http = require('http');
var app = express();

app.use(express.static(__dirname + '/static'));

app.get('/static', function(request, response) {
  res.sendFile(__dirname + '/static/index.html');
});

var server = http.createServer(app);

server.listen(3000, function() {
  console.log('Server running on port 3000.');
});

