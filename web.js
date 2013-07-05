var express = require('express');
var fs = require("fs");

var indexBuffer = fs.readFileSync('index.html').toString();


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  console.log('Request to "/" ...');
  response.send(indexBuffer)
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
