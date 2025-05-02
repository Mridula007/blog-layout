const app = angular.module("blogApp", []);

app.controller("MainController", function($scope) {
  $scope.isDarkMode = false;

  $scope.toggleDarkMode = function() {
    $scope.isDarkMode = !$scope.isDarkMode;
  };
});