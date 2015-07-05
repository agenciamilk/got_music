angular.module('gotMusicApp')
.controller('NavigationCtrl', ['$scope', '$log', '$location', function($scope, $log, $location) {
  $scope.goToNews = function() {
    $location.path("/news");
  };

  $scope.goToMusic = function() {
    $location.path("/music");
  };

  $scope.goToShows = function() {
    $location.path("/shows");
  };

  switch($location.path()) {
    case '/news':
      $('#btn-news').addClass('selected');
      $('#img-news').attr('src', 'img/icons/menu_news_selected.svg');
      break;
    case '/music':
      $('#btn-music').addClass('selected');
      $('#img-music').attr('src', 'img/icons/menu_music_selected.svg');
      break;
    case '/shows':
      $('#btn-shows').addClass('selected');
      $('#img-shows').attr('src', 'img/icons/menu_shows_selected.svg');
      break;
    }
}]);
