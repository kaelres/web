routingApp.factory('todoService', ['$http', function($http) {

    var serv = {};

    serv.addTask = function (taskName, cb) { //cb = callback, fonction qui va être appelé
        var req = {
          taskName: taskName
        };

        $http.post('/addTask',req) //on envoie un addtask qui sera exec par app5.js comme postman avec comme argument req qui contient taskName
            .then(function (resp) {
                //console.log(resp);
                cb(resp.data.success);
                //$scope.counter = dt.data.counter
            });

    };

    serv.removeTask = function (task, cb) {
        var req = {
            id: task.id //le status est useless
        };
        $http.post('/removeTask', req)
        .then(function(res) {
            cb(res.data.success);
        });
    };

    serv.getTaskSet = function (cb) {
        var req = {};
        $http.post('/getTaskSet',req)
            .then(function (resp) {
                console.log(resp);
                cb(resp.data.taskSet);
            });
    };

    serv.updateTask = function (task, cb) {
        console.log("starfoullah");
        var req = {
            id:task.id,
            status: task.done //etat du done qu'on veut obtenir pour la tâche en fin de process
        };
        $http.post('/updateTask', req)
        .then(function(res) {
            res.data;
        });
    };

    return serv;

}]);
//equivalent du code côté serveur 
//(java lors du projet spring)