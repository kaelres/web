//cote serveur

var express = require('express');
//on l'a pas installé et il n'st pas la de base, donc a installer sinon ça marche pas

var app = express();
var port = 8090;

//pas d'obligation sur les nom req et res
app.get('/', function (req, res) {

    console.log(req);

    res.setHeader('Content-Type', 'text/plain'),
    res.send('Hello world express!');
});

//Quand on utilisel 'option 'post' de postman il faut ecrire lcoalhost:8089/getData pour que ça fonctionne
app.post('/getData', function (req, res) {
    var obj = {
        success : true,
        userSet: [
            {
                firstName: 'Maurice',
                lastName: 'Topalof'
            },
            {
                firstName: 'Steeven',
            lastName: 'Seagle'
            },
            {
                firstName: 'Karine',
            lastName: 'Bolt'
            }
        ]
    }
    res.send(obj);
});

console.log('serveur demarre sur port : ' + port);

app.listen(port);