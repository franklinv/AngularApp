var app = angular.module('myapp', []);

app.controller('MainCtrl', function($scope) {
  $scope.firstname="andrew";
  $scope.lastname="johnson";
  
});

app.directive('myDirective', function() {
  return {
      restrict: 'AE',
      templateUrl: function(ele, attrs) {
        debugger
          return attrs.templatePath;
      }
  };
});