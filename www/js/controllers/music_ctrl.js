angular.module('gotMusicApp')
.controller('MusicCtrl', ['$scope', '$log', '$http', '$sce', '$timeout', '$location', 'videoService', '$modal', '$interval', function($scope, $log, $http, $sce, $timeout, $location, videoService, $modal, $interval) {
    $scope.openModal = function() {
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

    // TODO: Move this to an appropriate place
    if (!checkConnection()) {
        $scope.openModal();
        $interval.cancel($scope.internet_check);
    }

    // TODO: Move this to an appropriate place
    $scope.start_internet_check = function() {
        $scope.internet_check = $interval(function() {
            if (!checkConnection()) {
                //alert('NO INTERNET!');
                $scope.openModal();
                $interval.cancel($scope.internet_check);
            }
        }, INTERNET_CHECK_INTERVAL);
    };

    // TODO: Move this to an appropriate place
    $scope.start_internet_check();

    // TODO: Move this to an appropriate place like routing scripts
    // Analytics
    $scope.trackView('Music Screen');

    // MODULES
    $scope.deezer = {};
    $scope.youtube = {};
    $scope.itunes = {};

    $('#loading-wrapper').hide();

    $('#deezer-carousel').css({height: 175, width: window.innerWidth - ITEM_MARGIN});

    // Deezer API
    $scope.deezer.embed = false;

    if (ANDROID && VERSION[0] != '5') {
        $scope.deezer.items = ['1'];

        $(document).ready(function() {
            $timeout(function() {
                $('.deezer-embed').append('<iframe id="deezer-iframe" scrolling="no" frameborder="0" allowTransparency="true" src="http://www.deezer.com/plugins/player?autoplay=false&playlist=false&cover=true&type=album&id=' + DEEZER_ALBUM_ID + '&title=&app_id=' + DEEZER_API_ID + '" width="100%" height="115px"></iframe>');
                $('.deezer-embed').addClass('embed');
                $('.album-cover-wrapper').hide();
                $('.deezer-content').hide();
                $scope.deezer.player_loaded = true;
                $scope.$broadcast('deezerLoad');
            }, INITIAL_RESIZE_TIMEOUT);
        });

        $scope.deezer.embed = true;
    } else {
        $scope.deezer.items = JSON.parse(window.localStorage.getItem("DEEZER_FEED")) || [];
        $('#deezer-iframe').remove();
        $scope.deezer.embed = false;

        $timeout(function() {
            $scope.deezer.initialize();
        }, INITIAL_RESIZE_TIMEOUT);
    }

    $scope.deezer.get_iframe_src = function() {
        $timeout(function() {
            if ($scope.deezer.embed) {
                return $sce.trustAsResourceUrl('http://www.deezer.com/plugins/player?autoplay=false&playlist=false&width=700&height=80&cover=true&type=album&id=' + DEEZER_ALBUM_ID + '&title=&app_id=' + DEEZER_API_ID);
            } else {
                return '';
            }
        }, 1000);
    };

    $scope.deezer.play = function() {
        window.analytics.trackEvent('Deezer', 'Click', 'Deezer Play', 1);
        $scope.deezer.playing = true;

        // Run twice as workaround for iOS. TODO: Find out best solution
        DZ.player.play(); DZ.player.play();
    };

    $scope.deezer.pause = function() {
        $scope.deezer.playing = false;
        DZ.player.pause();
    };

    $scope.deezer.player_loaded = false;

    $scope.onDeezerSlideChangeEnd = function (swiper) {
        $scope.deezer.current_item = swiper.activeIndex;
        $scope.deezer.time_current = 0.0;
        $scope.deezer.time_total = 100.0;

        if (swiper.touches.diff < 0) {
            DZ.player.play(); // Workaround to avoid the previous music continues playing after user skips after pausess it.
            DZ.player.next();
            $scope.deezer.playing = true;
        } else {
            DZ.player.play(); // Workaround to avoid the previous music continues playing after user skips after pausess it.
            DZ.player.prev();
            $scope.deezer.playing = true;
        }
    };

    $scope.deezer.get_album_cover = function(track) {
        if (DEEZER_MODE_PLAYLIST) {
            return track.album.cover;
        } else if (DEEZER_MODE_ALBUM) {
            return $scope.deezer.album_cover;
        }
    };

    $scope.deezer.setup = function() {
        DZ.Event.subscribe('player_position', function(e){
            $scope.deezer.time_current = e[0];
            if (e[1]) {
                $scope.deezer.time_total = +e[1];
            }
            $scope.$apply();
        });
        DZ.Event.subscribe('track_end', function(e){
            DZ.player.prev();
        });
        DZ.player.playTracks($scope.deezer.track_ids, false, 0, 0, function(response){
            $scope.deezer.player_loaded = true;
            $scope.$broadcast('deezerLoad');
            $scope.$apply();
        });
    };

    $scope.deezer.initialize = function() {
        // DEEZER PLAYLIST
        if (DEEZER_MODE_PLAYLIST) {
            $http.get("http://api.deezer.com/playlist/" + DEEZER_PLAYLIST_ID)
                .success(function(e) {
                    $scope.deezer.items = e.tracks.data;
                    $scope.deezer.track_ids = [];

                    for (var i = 0; i < $scope.deezer.items.length; i++) {
                        $scope.deezer.track_ids.push($scope.deezer.items[i].id);
                    }

                    DZ.init({
                        appId: DEEZER_API_ID,
                        channelUrl: DEEZER_CHANNEL_URL,
                        player: {
                            onload: $scope.deezer.setup
                        },
                    });

                    window.localStorage.setItem("DEEZER_FEED", JSON.stringify($scope.deezer.items)); // TODO: Take advantage of this data
                })
                .error(function() {
                    $log.info("error");
                });
        }
        // DEEZER ALBUM
        else if (DEEZER_MODE_ALBUM) {
            $http.get("http://api.deezer.com/album/" + DEEZER_ALBUM_ID)
            .success(function(e) {
                $scope.deezer.items = e.tracks.data;
                $scope.deezer.track_ids = [];

                for (var i = 0; i < $scope.deezer.items.length; i++) {
                    $scope.deezer.track_ids.push($scope.deezer.items[i].id);
                }

                DZ.init({
                    appId: DEEZER_API_ID,
                    /*
                    token : {
                        access_token : 'nye16f6f534d9b2d310764091af94322',
                        //expire : {int}
                    },
                    */
                    channelUrl: 'http://agenciamilk.com/deezer',
                    player: {
                        onload: $scope.deezer.setup
                    }
                });

                $scope.deezer.album_cover = e.cover;
                window.localStorage.setItem('DEEZER_FEED', JSON.stringify($scope.deezer.items)); // TODO: Take advantage of this data
            })
            .error(function() {
                $log.info("error");
            });
        }
    };

    /*
    $scope.deezer.login = function() {
        var DEEZER_REDIRECT_URI = URL_SCHEME + 'deezer/';
        var DEEZER_ACCESS_TOKEN = 'nye16f6f534d9b2d310764091af94322';

        $log.info('dz click');

        DZ.login(function(e){
            alert(JSON.stringify(e));
        });

        //$log.info('https://connect.deezer.com/oauth/auth.php?app_id=' + DEEZER_API_ID + '&redirect_uri=' + DEEZER_REDIRECT_URI + '&perms=basic_access,email');
        //$http.get('https://connect.deezer.com/oauth/auth.php?app_id=' + DEEZER_API_ID + '&redirect_uri=' + DEEZER_REDIRECT_URI + '&perms=basic_access,email');
    };
    */

    // YOUTUBE API
    $scope.youtube.playlist_index = 0;

    // YOUTUBE PLAYLIST
    if (YOUTUBE_MODE_PLAYLIST) {
        $http.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=' + YOUTUBE_PLAYLIST_ID + '&key=' + YOUTUBE_API_KEY)
            .success(function(e) {
                $scope.youtube.items = e.items;
                window.localStorage.setItem('YOUTUBE_FEED', JSON.stringify($scope.youtube.items));  // TODO: Take advantage of this data
                $scope.$broadcast('youtubeLoad');
                $scope.youtubeLoad = true;
            })
            .error(function(e) {
                $log.info(e);
            });
    }
    // YOUTUBE VIDEO
    else if (YOUTUBE_MODE_VIDEO) {
        $http.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + YOUTUBE_VIDEO_ID + '&key=' + YOUTUBE_API_KEY)
            .success(function(e) {
                $scope.youtube.items = [e.items[0]];
                window.localStorage.setItem('YOUTUBE_FEED', JSON.stringify($scope.youtube.items));  // TODO: Take advantage of this data
                $scope.$broadcast('youtubeLoad');
                $scope.youtubeLoad = true;
            })
            .error(function(e) {
                $log.info(e);
            });
    }

    $scope.youtube.get_video_url = function(id) {
        return $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + id + "/?showinfo=0&modestbranding=1");
    };

    $scope.youtube.play_video = function(video) {
        window.analytics.trackEvent('YouTube', 'Click', 'YouTube Play', 1);
        if (YOUTUBE_MODE_PLAYLIST) {
            videoService.video_url = 'https://www.youtube.com/embed/' + video.snippet.resourceId.videoId + '/?showinfo=0&modestbranding=1&&autoplay=1&fs=0';
        } else if (YOUTUBE_MODE_VIDEO) {
            videoService.video_url = 'https://www.youtube.com/embed/' + video.id + '/?showinfo=0&modestbranding=1&&autoplay=1&fs=0';
        }

        $location.path('/video');
    };

    $scope.youtube.play_next = function() {
        $scope.youtube.playlist_index += 1;
    };

    $scope.youtube.play_previous = function() {
        $scope.youtube.playlist_index -= 1;
    };

    // Move this to a suitable module
    $scope.formatDate = function(t) {
        t = new Date(t);
        return t.getDate() + "/" + (t.getMonth() + 1) + "/" + t.getFullYear();
    };

    // ITUNES API
    $http.get('https://itunes.apple.com/lookup?&country=br&entity=album&id=' + ITUNES_USER_ID)
        .success(function(e) {
            $scope.itunes.items = e.results.slice(1, e.results.length);
            window.localStorage.setItem("ITUNES_FEED", JSON.stringify($scope.itunes.items));
            $scope.$broadcast('itunesLoad');
            $scope.itunesLoad = true;
        }).error(function() {
            // TODO: Handle errors.
        });

    $scope.itunes.getAlbum = function(album) {
        if (IOS) {
            window.open(album.collectionViewUrl + '&at=' + ITUNES_AFFILIATE_CODE, '_system');
        } else if (ANDROID) {
            navigator.app.loadUrl(album.collectionViewUrl + '&at=' + ITUNES_AFFILIATE_CODE, { openExternal: true });
        }
        window.analytics.trackEvent('iTunes', 'Click', 'iTunes Buy Click', 1);
    };
}]);
