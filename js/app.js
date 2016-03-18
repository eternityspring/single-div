var singleDiv = angular.module('singleDiv',['ngRoute']);
singleDiv.config(['$httpProvider','$routeProvider', function ($httpProvider,$routeProvider) {
    $routeProvider
        .when('/', {templateUrl:'tpl/shapes.html'})
        .when('/create', {templateUrl:'tpl/create.html'})
        .when('/works', {templateUrl:'tpl/works.html'})
        .otherwise({redirectTo:'/'});
}]);