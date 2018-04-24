routingApp.controller('TodoCtrl', ['$scope', '$http', 'todoService', 
function($scope, $http, todoService) {

    //initialise le tableau des taches
    $scope.taskSet = [];

    // ajoute une nouvelle tache à la liste
    $scope.addTask = function() {
        console.log("pingouin");
        if($scope.taskName) {
            todoService.addTask($scope.taskName, function(resp) {
                if(resp) {
                    $scope.refreshTaskSet();
                }
            });
            $scope.taskName = '';
        }
    };

    $scope.removeTask = function(task) {
        todoService.removeTask(task, function (res) {
            if (res) {
                $scope.refreshTaskSet();
            }
        });
    };

    $scope.refreshTaskSet = function () {
        console.log("refresh");
        todoService.getTaskSet(function(taskSet) {
            $scope.taskSet = taskSet;
        });
    };

    $scope.updateTask = function(task) {
        console.log("pingouin");
        todoService.updateTask(task, function (res) {});
    };

    

    $scope.refreshTaskSet();
}]);
//se lance une fois pour crée un objet dans le $scope
//partagé par client et serveur et qui possède 2 fonctions