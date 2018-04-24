//$http permet de reproduire le comportement de postman
routingApp.controller('Page4Ctrl', ['$scope', '$http', function ($scope, $http) {

    $scope.load = function () {

        $http.post('/getData')
        .then( function (data) {
            console.log(data);
            $scope.myData = data.data;

        });
    };

    $scope.load();
    
}]);