var singleDiv = angular.module('singleDiv',['ngRoute']);
singleDiv.config(['$httpProvider','$routeProvider', function ($httpProvider,$routeProvider) {
    $routeProvider
        .when('/', {templateUrl:'tpl/shapes.html'})
        .when('/create', {templateUrl:'tpl/create.html'})
        .when('/impress', {templateUrl:'tpl/impress.html'})
        .otherwise({redirectTo:'/'});
}]);