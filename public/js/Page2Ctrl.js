routingApp.controller('Page2Ctrl', ['$scope',
'ComputeService', function ($scope, ComputeService) {
//Necessite de mettre le même "ComputeService" partout sinon ça provoque des bugs et des undefined
    $scope.comp = function () {
        $scope.result = ComputeService.addNumber($scope.val.paramA, $scope.val.paramB);
    };
}])