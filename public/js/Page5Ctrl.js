routingApp.controller('Page5Ctrl', ['$scope', '$http', function ($scope, $http) {

    $scope.loadCounter = function() {

        $http.post('/getCounter')// Le post est fait en asynchrone, le "then" indique qu'on attend la réponse avant de faire la suite(exemple : une autorisation ou les infos)
        .then(function (data) { // Cette méthode est un callback, elle attend qu'il y ait eu réponse pour s'executer
                                //data est le nom arbitraire donnée a l'objet contenant nos informations
            console.log(data);
            $scope.counter = data.data.counter;
            //data.data.counter
            //Le premeir data depend de ce qu'on met en parametre de la fonction, le deuxieme s'appelle 
            //data quoiqu'il arrive, et counter est la propriéetée
        });
    };

    $scope.addCounter = function () {

        //Les posts servent a echanger des données entre serveur et client
        $http.post('/addCounter')
        .then(function (data) {
            console.log(data);
            $scope.counter = data.data.counter;
        });
    };
    /*Les deux fonctions font un appel similaire parcequ'au final elle font la même, elle demande l'objet counter au serveur
    qui s'occupe du traitement. Les différences sont côté serveur.*/

    $scope.loadCounter(); // Necessaire pour que le compteur soit initialisé et donc affiché au tout début
}]);