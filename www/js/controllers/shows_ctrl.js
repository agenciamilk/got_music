angular.module('gotMusicApp')
.controller('ShowsCtrl', ['$scope', '$log', '$http', '$location', '$timeout', '$modal', '$sce', 'videoService', '$interval', function($scope, $log, $http, $location, $timeout, $modal, $sce, videoService, $interval) {
  // MODULES
  $scope.demand = {};
  $scope.songkick = {};
  $scope.livestream = {};

  // Get From Local Storage
  $scope.demand.demanded = Boolean(window.localStorage.getItem("DEMAND_DEMANDED")) || false;
  $scope.demand.last_demand = window.localStorage.getItem("DEMAND_LAST_DEMAND") || [];

  $scope.artist_name = ARTIST_NAME;

  $scope.openInternetModal = function() {
      $('#internet-modal-background').show();
      var modalInstance = $modal.open({
          templateUrl: 'templates/modal_internet_error.html',
          controller: 'InternetModalInstanceCtrl',
          size: "sm"
      });

      modalInstance.result.then(function(e) {
          $('#internet-modal-background').hide();
          $scope.start_internet_check();
      }, function(e) {
          $('#internet-modal-background').hide();
          $scope.start_internet_check();
      });
  };

  // TODO: Move this to a suitable module
  $scope.start_internet_check = function() {
      $scope.internet_check = $interval(function() {
          if (!checkConnection()) {
              $scope.openInternetModal();
              $interval.cancel($scope.internet_check);
          }
      }, INTERNET_CHECK_INTERVAL);
  };

  $scope.demand.set_width = function() {
      $(".demand-item").width(window.innerWidth - ITEM_MARGIN);
  };

  $scope.livestream.set_width = function() {
      $(".livestream-item").width(window.innerWidth - ITEM_MARGIN);
  };

  // DEMAND
  $scope.openModal = function() {
      window.analytics.trackEvent('Demand', 'Click', 'Pedir Show', 1);
      $('#demand-modal-background').show();
      var modalInstance = $modal.open({
          templateUrl: 'templates/modal.html',
          controller: 'ModalInstanceCtrl',
          size: "sm"
      });

      modalInstance.result.then(function(e) {
          $('#demand-modal-background').hide();
          if (e) {
              $scope.demand.demanded = Boolean(window.localStorage.getItem("DEMAND_DEMANDED")) || false;
              $scope.demand.last_demand = window.localStorage.getItem("DEMAND_LAST_DEMAND");
          }

      }, function(e) {
          $('#demand-modal-background').hide();
      });
  };

  $scope.songkick.see_more = function(show) {
      window.analytics.trackEvent('Songkick', 'Click', 'Click Songkick', 1);

      if (IOS) {
        window.open(show, '_system');
      } else if (ANDROID) {
        navigator.app.loadUrl(show, { openExternal: true });
      }
  };

  $scope.songkick.formatDate = function (event) {
      // TODO: Investigate the reason of 'event' is undefined sometimes
      if (event) {
          var d = (event.start.date).split('-');
          return d[2] + '/' + d[1];
      }
  };

  $scope.livestream.play_video = function(url) {
      window.analytics.trackEvent('Livestream', 'Click', 'Livestream Play', 1);
      if ($scope.livestream.status == LIVESTREAM_LIVE_STRING || $scope.livestream.status == LIVESTREAM_COMPLETED_STRING) {
          videoService.video_url = url;
          $location.path('/video');
      }
  };

  $scope.livestream.get_text = function() {
      return ($scope.livestream.status === LIVESTREAM_EMPTY_STRING) ? LIVESTREAM_EMPTY_STRING : ($scope.livestream.status + ' - ' + $scope.livestream.title);
  };

  $scope.livestream.get_image = function() {
      switch($scope.livestream.status) {
          case LIVESTREAM_COMPLETED_STRING:
              return 'img/livestream/completed.jpg';
          case LIVESTREAM_LIVE_STRING:
              return 'img/livestream/live.jpg';
          case LIVESTREAM_PENDING_STRING:
              return 'img/livestream/pending.jpg';
          case LIVESTREAM_EMPTY_STRING:
              return 'img/livestream/empty.jpg';
          default:
              return 'img/livestream/empty.jpg';
      }
  };

  if (!checkConnection()) {
      $scope.openInternetModal();
      $interval.cancel($scope.internet_check);
  }

  $scope.start_internet_check();

  // Analytics
  $scope.trackView('Shows Screen');

  $('#loading-wrapper').hide();

  if ($scope.demand.demanded) {
      var now = new Date().getTime();

      if (now - $scope.demand.last_demand > DEMAND_MINIMUM_INTERVAL) {
          $scope.demand.demanded = false;
          window.localStorage.setItem("DEMAND_DEMANDED", false);
      }

  } else {
      $scope.demand.demanded = false;
      window.localStorage.setItem("DEMAND_DEMANDED", false);
  }

  // Songkick API
  $http.get("http://api.songkick.com/api/3.0/artists/" + SONGKICK_ARTIST_ID + "/calendar.json?apikey=" + SONGKICK_API_KEY)
    .success(function(e) {
        $scope.songkick.items = [];

        for (var i = 0; i < e.resultsPage.results.event.length; i += 2) {
            var l = e.resultsPage.results.event[i];
            var r = e.resultsPage.results.event[i + 1];

            var event = {"left": l, "right": r};
            $scope.songkick.items.push(event);
        }
        window.localStorage.setItem('SONGKICK_FEED', JSON.stringify($scope.songkick.items)); // TODO: Take advantage of this data
        $scope.$broadcast('songkickLoad');
        $scope.songkickLoad = true;
    }).error(function() {
      // TODO: Handle errors.
    });

  // Livestream API
  $http.get('https://gdata.youtube.com/feeds/api/users/' + LIVESTREAM_USER_ID + '/live/events?v=2&alt=json')
    .success(function(e) {
        if (e.feed.entry) {
            var current_stream = e.feed.entry[e.feed.entry.length - 1];
            var livestream_url = current_stream.content.src;
            var stream_id = (livestream_url.split('/')[livestream_url.split('/').length - 1]).split('?')[0];

            $scope.livestream.title = current_stream.title.$t;
            $scope.livestream.status;

            if (current_stream.yt$status.$t == 'completed') {
                $scope.livestream.status = LIVESTREAM_COMPLETED_STRING;
            } else if (current_stream.yt$status.$t == 'active') {
                $scope.livestream.status = LIVESTREAM_LIVE_STRING;
            } else if (current_stream.yt$status.$t == 'pending') {
                $scope.livestream.status = LIVESTREAM_PENDING_STRING;
            } else {
                $scope.livestream.status = LIVESTREAM_EMPTY_STRING;
            }

            $scope.livestream.stream_url = 'https://www.youtube.com/embed/' + stream_id;
        } else {
            $scope.livestream.status = LIVESTREAM_EMPTY_STRING;
        }
    })
    .error(function(e) {
        // TODO: Handle errors.
    });

}]);
