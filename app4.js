//cote serveur

var path = require('path');
var express = require('express');

//needed for the search method
//used to parse the request in param to get the param
var bodyParser = require('body-parser');

var app = express();
var port = 8090;

var app = express();


//Initialisation compteur cote serveur pour qu'il soit accessible a tout le monde
var counter = 0;



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

app.post('/getCounter', function (req, res) {
    var obj = {
        success : true,
        counter : counter
    };
    res.send(obj);
});
/*
req : requete
res : resultat
On n'utilise pas encore le req pour s'occuper récup des paramètres mais on aura toujours 2 paramètres comme ça.
Les appeler req et res sont des conventions, important à suivre pour la compatibilitée.
On prend le compteur et on le range dans un objet obj. le succes:true est une convention. On utilise donc res pour renvoyer le res
au client*/

app.post('/addCounter', function (req, res) {
    counter++;
    var obj = {
        success : true,
        counter : counter
    };
    res.send(obj);
})
/*
Même qu'au dessus MAIS on incrémente avant de renvoyer la valeur au client puisqu'il souhaite faire un addCounter */
console.log('serveur demarre sur port : ' + port);

app.listen(port);