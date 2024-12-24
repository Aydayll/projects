const http= require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>HIIIIIII</h1>');
    res.end();
  }).listen(3333);