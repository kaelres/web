//cote serveur

var path = require('path');
var express = require('express');
var uuidv4 = require('uuid/v4')

//needed for the search method
//used to parse the request in param to get the param
var bodyParser = require('body-parser');

var app = express();
var port = 8090;

//Initialisation compteur cote serveur pour qu'il soit accessible a tout le monde
var counter = 0;

//init parser with express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true}));

//authorize access to public directory to server html, css, js
app.use(express.static(path.join(__dirname, 'public')));
//http://localhost:8090/Routing.html donne accès a l'appli précedemment créé

//----------TODOLIST PART----------
var taskSet = [
    {
        id: 'a573aba6-762e-4749-bee7-ad2fc68cf45',
        taskName: 'Faire les courses',
        done : false
    },
    {
        id : '036dd56a-623c-4ee0-9bee-b64f04e60a34',
        taskName: 'Sortir les poubelles',
        done: false
    }
];

app.post('/getTaskSet', function(req, res) {

    //return object
    var obj = {
        success : true,
        taskSet: taskSet
    }
    res.send(obj);
});

app.post('/updateTask', function(req, res) {
    //task = argument du find, c'est les elements un a un du tableau taskSet, req.body encore une fois le body c'est comme ça
    var t = taskSet.find(function(task){ return task.id == req.body.id});
    console.log("yolo");
    if (!t) {
        res.send({success: false});
    } else {
        t.done = req.body.status;
        res.send({success: true}); //on envoie un objet comportant l'etat de la transaction, réussie ou non
    }
});

app.post('/removeTask', function(req, res) {
    var t = taskSet.findIndex(function(task){ return task.id == req.body.id});
    if(t == -1) {
        res.send({success:false});
    } else {
        taskSet.splice(t, 1);
        res.send({success:true});
    }
});

app.post('/addTask', function(req, res) {
    //Pour tester celui la qui nécessite un argument
    //Juste en dessous du post je choisis le menu 'body' a udessus de la feneter de resultat
    //format x-www-form-urlencoded
    //Je crée une var de nom taskName

    //check if tasName not empty
    if (!req.body.taskName) {
        res.send(
            { success : false, errorSet: ['TASKNAME_EMPTY']}
        );
    } else {

        //create object
        var task = {
            id : uuidv4(),
            taskName: req.body.taskName, // le body comme le data avant, c'est comme ça qu'on dit qu'on cherche dans l'objet
            done: false
        };

        //add to array
        taskSet.push(task)

        //return success
        res.send({success:true});
    }
});

//-------TODOLIST END-------

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
app.post('/addCounter', function(req, res) {
    counter++;
    var obj = {
        success: true,
        counter: counter
    };
    res.send(obj);
});

/*
Même qu'au dessus MAIS on incrémente avant de renvoyer la valeur au client puisqu'il souhaite faire un addCounter */
console.log('serveur demarre sur port : ' + port);

app.listen(port);