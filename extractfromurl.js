var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var userID= q.user;
  var nme = q.name;
  res.write("User ID : "+userID+", Name : "+nme);
  res.end("Values extracted from URL successfully!!!");
}).listen(8000);