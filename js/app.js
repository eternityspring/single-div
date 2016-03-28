var singleDiv = angular.module('singleDiv',['ngRoute']);
singleDiv.config(['$httpProvider','$routeProvider', function ($httpProvider,$routeProvider) {
    $routeProvider
        .when('/', {templateUrl:'tpl/shapes.html',controller:'shapeCtrl'})
        .when('/create', {templateUrl:'tpl/create.html',controller:'createCtrl'})
        .when('/impress', {templateUrl:'tpl/impress.html',controller:'impressCtrl'})
        .otherwise({redirectTo:'/'});
}]);

singleDiv.controller('shapeCtrl',['$scope','$anchorScroll',function ($cope,$anchorScroll) {
    $anchorScroll(0);
}])
    .controller('createCtrl',['$scope','$anchorScroll',function ($cope,$anchorScroll) {
    $anchorScroll(0);
}])
    .controller('impressCtrl',['$scope','$anchorScroll',function ($cope,$anchorScroll) {
    $anchorScroll(0);
}]);