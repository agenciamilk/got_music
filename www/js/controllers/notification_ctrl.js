angular.module('gotMusicApp').controller("NotificationCtrl", ["$scope", "$log", "$location", function($scope, $log, $location) {
  $scope.goToNews = function() {
    $scope.close();
    $location.path("/news");
  };

  $scope.close = function() {
    $('#notification').animate({top: '-100px'}, 1000);
  };
}]);
