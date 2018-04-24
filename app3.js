//cote serveur

var path = require('path');
var express = require('express');

//needed for the search method
//used to parse the request in param to get the param
var bodyParser = require('body-parser');

var app = express();
var port = 8090;

var app = express();

//init parser with express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true}));

//authorize access to public directory to server html, css, js
app.use(express.static(path.join(__dirname, 'public')));
//http://localhost:8090/Routing.html donne accès a l'appli précedemment créé

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