const fs = require('fs');
const http = require('http');

http.createServer(function (req, res){
    fs.readFile('index.html', function(err, data) {
        console.log(req.connection.remoteAddress);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);