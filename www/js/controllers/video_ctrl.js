angular.module('gotMusicApp')
.controller('VideoCtrl', ['$scope', '$log', '$http', '$sce', '$timeout', '$location', 'videoService', function($scope, $log, $http, $sce, $timeout, $location, videoService) {
    $scope.video_url = $sce.trustAsResourceUrl(videoService.video_url);

    $scope.update_dimensions = function() {
        $scope.width = window.innerWidth;
        $scope.height = window.innerHeight - 65;
    };

    $scope.quit_player = function() {
        //$location.path("/music");
        window.history.back();
    };

    setInterval(function(){
        if ($('#ytplayer').length) {
            $('#ytplayer').contents().find('.ytp-scalable-icon-shrink').css('pointer-events', 'none');
        }
    }, 1000);

    window.addEventListener('orientationchange', function(e) {
        switch(window.orientation) {
            case -90:
            case 90:
                // Landscape
                break;
            default:
                // Portrait
                break;
        }
    });
}]);
