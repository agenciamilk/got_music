angular.module('gotMusicApp')
.controller("HomeCtrl", ["$scope", "$log", "$location", function($scope, $log, $location) {
  // Bottom Menu Navigation
  $scope.goToNews = function() {
    $location.path("/news");
  };

  $scope.goToMusic = function() {
    $location.path("/music");
  };

  $scope.goToShows = function() {
    $location.path("/shows");
  };

  // Analytics
  $scope.trackView('Home Screen');

  // Home Image
  $scope.getHomeImage = function() {
    var w = window.innerWidth;
    var h = window.innerHeight;
  };
}]);
