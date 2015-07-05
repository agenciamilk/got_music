angular.module('gotMusicApp')
.controller('InternetModalInstanceCtrl', ["$scope", "$modalInstance", "$log", "$modal", "$sce", function ($scope, $modalInstance, $log, $modal, $sce) {
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}]);
