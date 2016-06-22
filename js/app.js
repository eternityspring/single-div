var singleDiv = angular.module('singleDiv',['ngRoute']);
singleDiv.config(['$httpProvider','$routeProvider', function ($httpProvider,$routeProvider) {
    $routeProvider
        .when('/', {templateUrl:'tpl/shapes.html',controller:'shapeCtrl'})
        .when('/create', {templateUrl:'tpl/create.html',controller:'createCtrl'})
        .when('/impress', {templateUrl:'tpl/impress.html',controller:'impressCtrl'})
        .otherwise({redirectTo:'/'});
}]);

singleDiv.controller('shapeCtrl',['$scope','$anchorScroll',function ($scope,$anchorScroll) {
    $anchorScroll(0);
    $scope.shapes = [
      'line',
      'line-top-bottom',
      'line-left-right',
      'line-top-right',
      'line-border',
      'line-border-radius',
      'line-border-circle',
      'line-border-oval',
      'square',
      'rectangle',
      'circle',
      'oval',
      'triangle-up',
      'triangle-down',
      'triangle-left',
      'triangle-right',
      'triangle-top-left',
      'triangle-top-right',
      'triangle-bottom-left',
      'triangle-bottom-right',
      'triangle-up-o',
      'triangle-down-o',
      'triangle-left-o',
      'triangle-right-o',
      'triangle-top-left-o',
      'triangle-top-right-o',
      'triangle-bottom-left-o',
      'triangle-bottom-right-o',
      'trapezoid',
      'parallelogram',
      'star-six',
      'star-five',
      'pentagon',
      'hexagon',
      'octagon',
      'heart',
      'infinity',
      'diamond',
      'diamond-shield',
      'diamond-narrow',
      'cut-diamond',
      'egg',
      'pacman',
      'talkbubble',
      'burst-12',
      'burst-8',
      'css-text'
    ];
}])
    .controller('createCtrl',['$scope','$anchorScroll',function ($scope,$anchorScroll) {
    $anchorScroll(0);
        $scope.creates = [
          'triangle-up-tree',
          'ba-gua',
          'badge-ribbon',
          'magnifying-glass',
          'facebook-icon',
          'moon',
          'cross',
          'create-computer',
          'burger',
          'tag-green',
          'slack-icon',
          'man',
          'chrome',
          'pacman-animate',
          'drip',
          'coffee-mug',
          'loader'
        ];
}])
    .controller('impressCtrl',['$scope','$anchorScroll',function ($scope,$anchorScroll) {
    $anchorScroll(0);
}]);