const fs = require('fs');
const http = require('http');

http.createServer(function (req, res){
    res.write('Hello world!');
    res.end();
}).listen(8080);