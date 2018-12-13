const fs = require('fs');
const http = require('http');
var colors = require('colors');

const server = http.createServer(function (req, res){
    fs.readFile('index.html', function(err, data) {
        console.log(req.connection.remoteAddress.rainbow);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);

var serverListenMessage = "Server [" + server.address().address + "] is listening on port " + server.address().port;
console.log(serverListenMessage.magenta.bgWhite);