var fs = require('fs');

var http = require ('http');

var server = http.createServer(function (req, res) {

      var myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf8');
      myReadShort.pipe(res);
      });
server.listen(80, '0.0.0.0')
server.listen(3000, '127.0.0.1')
