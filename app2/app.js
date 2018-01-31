angular.module("pokemon", ['ui.router']);

angular.module("pokemon").config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('home', {
        url: '/',
        // template: '<h2>home</h2>'
        templateUrl: './app2/views/home.html'
        })

    $stateProvider.state('characters', {
        url: '/characters',
        // template: '<h2>characters</h2>',
        templateUrl: './app2/views/characters.html',
        controller: 'charactersCtrl'
        })

    $stateProvider.state('character', {
        url: '/characters/:id',
        templateUrl: './app2/views/character.html',
        controller: 'characterCtrl',
    })

    $urlRouterProvider.otherwise('/')
})