var fs = require('fs');
var express = require('express');
var app = express.createServer(express.logger());
var buff = fs.readFileSync('index.html');
var strng = buff.toString();

app.get('/', function(request, response) {
  response.send(strng);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
