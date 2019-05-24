var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var yr= q.name;
  var mnth= q.userNo;
  res.write(mnth);
  res.end(yr);


}).listen(8000);