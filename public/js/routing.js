var routingApp = angular.module('routeApp', ['ui.router']);
//Même nom d'appli pour tous les javascript: routing+controller et ComputeService, et reference sur le nom d'app de l'html dans ce fichier)
routingApp.config(function($stateProvider) {

    var page1State = {
        name: 'page1',
        url: '/page1',
        templateUrl: 'page1.html',
        controller: 'Page1Ctrl'

    };

    var page2State = {
        name: 'page2',
        url: '/page2',
        templateUrl: 'Page2.html',
        controller: 'Page2Ctrl'
    };

    var page3State = {
        name: 'page3',
        url: '/page3',
        templateUrl: 'Page3.html',
        controller: 'Page3Ctrl'
    };

    var page4State = {
        name: 'page4',
        url: '/page4',
        templateUrl: 'Page4.html',
        controller: 'Page4Ctrl'
    };

    var page5State = {
        name: 'page5',
        url: '/page5',
        templateUrl: 'Page5.html',
        controller: 'Page5Ctrl'
    };

    var page6State = {
        name: 'page6',
        url: '/page6',
        templateUrl: 'Page6.html',
        controller: 'TodoCtrl' //on lui a pas donné le nom Page6Ctrl dans la déclaratio nde fonction, on met celui déclaré
    };

    $stateProvider.state(page1State);
    $stateProvider.state(page2State);
    $stateProvider.state(page3State);
    $stateProvider.state(page4State);
    $stateProvider.state(page5State);
    $stateProvider.state(page6State);
});