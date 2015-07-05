angular.module('gotMusicApp').config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/home', {
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl'
    }).
    when('/news', {
      templateUrl: 'templates/news.html',
      controller: 'NewsCtrl'
    }).
    when('/music', {
      templateUrl: 'templates/music.html',
      controller: 'MusicCtrl'
    }).
    when('/shows', {
      templateUrl: 'templates/shows.html',
      controller: 'ShowsCtrl'
    }).
    when('/video', {
      templateUrl: 'templates/video.html',
      controller: 'VideoCtrl'
    });
}]);
