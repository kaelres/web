//cote serveur

var http = require('http');
//ici on l'a pas installé et ça marche quand même, module de base (suite dans app2)
var port = 8090;

var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Hello world');
});

server.listen(port);

console.log('server started port : ' + port);