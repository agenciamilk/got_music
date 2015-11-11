angular.module('gotMusicApp')
.controller('NewsCtrl', ['$scope', '$log', '$http', '$location', '$interval', '$timeout', '$document', 'videoService', '$modal', function($scope, $log, $http, $location, $interval, $timeout, $document, videoService, $modal) {
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

    if (!checkConnection()) {
        $scope.openModal();
        $interval.cancel($scope.internet_check);
    }

    $scope.start_internet_check = function() {
        $scope.internet_check = $interval(function() {
            if (!checkConnection()) {
                $scope.openModal();
                $interval.cancel($scope.internet_check);
            }
        }, INTERNET_CHECK_INTERVAL);
    };

    $scope.start_internet_check();

    // Analytics
    $scope.trackView('News Screen');

    // MODULES
    $scope.message = {};
    $scope.facebook = {};
    $scope.twitter = {};
    $scope.instagram = {};


    // Get From Local Storage
    $scope.message.items = [];

    $('#loading-wrapper').hide();

    $scope.artist_name = ARTIST_NAME;

    // Message API
    $http.get('https://spreadsheets.google.com/feeds/worksheets/' + MESSAGE_FORM_ID + '/public/full?alt=json')
        .success(function(e) {
            var worksheet_url = e.feed.entry[0].link[0].href.split('/');
            MESSAGE_WORKSHEET_ID = worksheet_url[worksheet_url.length - 3];

        $http.get('https://spreadsheets.google.com/feeds/list/' + MESSAGE_FORM_ID + '/' + MESSAGE_WORKSHEET_ID + '/public/full?alt=json')
            .success(function(e) {
                var entries = e.feed.entry;

                for (var i = 0; i < entries.length; i++) {
                    var entry = entries[i];
                  console.log(entry);
                  console.log('teste');

                    try {
                        var item = {
                            timestamp: entry.gsx$submissiondate.$t,
                            message: entry.gsx$message.$t,
                            call2action: entry.gsx$call2action.$t,
                            button_title: entry.gsx$buttontitle.$t,
                            app_link: entry.gsx$linkinterno.$t,
                            app_urlImage: entry.gsx$imagem.$t,
                            app_urlVideo: entry.gsx$video.$t
                            
                        };
                    } catch (exception) {
                        console.log('Malformed spreadsheet', exception); //  substituido o alert por console.log, para nao aparecer para o usuário final em caso de erros
                      
                    }

                    $scope.message.items.push(item);
                  
                }

                $scope.message.items.reverse();
                window.localStorage.setItem("MESSAGE_FEED", JSON.stringify($scope.message.items));
                $scope.$broadcast('newsMessagesLoad');
            }).error(function(e) {
                $log.info('Error: ' + e);
            });
        })
        .error(function(e) {
        });


    $scope.message.get_button = function(msg) {
        return (msg.call2action || msg.app_link);
    };

    $scope.message.get_button_title = function(msg) {
        return msg.button_title ? msg.button_title : 'Clique aqui';
    };

    $scope.message.get_call2action = function(msg) {
        window.analytics.trackEvent('Message', 'Click', 'Click Message', 1);
        if (msg.app_link) {
            switch(msg.app_link) {
                case 'Shows':
                    $location.path("/shows");
                    break;
                case 'Músicas':
                    $location.path("/music");
                    break;
                case 'Novidades':
                    $location.path("/news");
                    break;
            }
        } else {
            if (IOS) {
                window.open(msg.call2action, '_system');
            } else if (ANDROID) {
                navigator.app.loadUrl(msg.call2action, { openExternal: true });
            }
        }

    };
    
    $scope.message.get_urlImage = function(msg) {
      return msg.app_urlImage;
    };
  
    $scope.message.get_urlVideo = function(msg) {
      var resp = msg.app_urlVideo;
      console.log($sce.trustAsResourceUrl(resp));
      return $sce.trustAsResourceUrl(resp);
      
        
    };  

    // Facebook API
    $http.get('https://graph.facebook.com/oauth/access_token?grant_type=client_credentials&client_id=' + FACEBOOK_CLIENT_ID + '&client_secret=' + FACEBOOK_CLIENT_SECRET)
        .success(function(e) {
            $scope.facebook.access_token = e;
            $http.get('https://graph.facebook.com/v2.2/' + FACEBOOK_PAGE_ID + '/posts?' + $scope.facebook.access_token)
            .success(function(e) {
                $scope.facebook.items = [];
                for (var i = 0; i < e.data.length; i++) {
                    if ($scope.facebook.filter(e.data[i])) {
                        $scope.facebook.items.push(e.data[i]);
                        $scope.facebook.get_high_res_images(e.data[i]);
                    }
                    if (i == e.data.length - 1) {
                        $timeout(function() {
                            window.localStorage.setItem('FACEBOOK_FEED', JSON.stringify($scope.facebook.items)); // TODO: Take advantage of this data
                            $scope.$broadcast('newsFacebookLoad');
                        }, INITIAL_RESIZE_TIMEOUT);
                    }
                }
            })
            .error(function(e) {
            });
        })
        .error(function(e) {
        });

    $scope.facebook.get_high_res_images = function(item) {
        $http.get('https://graph.facebook.com/v2.2/' + item.id + '?' + $scope.facebook.access_token + '&fields=attachments')
            .success(function(e) {
                if (e.attachments.data[0].media) {
                    item.picture = e.attachments.data[0].media.image.src;
                }
            })
            .error(function(e) {
                $log.info(e);
            });
    };

    $scope.facebook.filter = function(post) {
        return post.from.id === FACEBOOK_PAGE_ID && ((post.type == 'photo' && (post.status_type == 'added_photos' || post.status_type == 'shared_story')) || (post.type == 'link' && post.status_type == 'shared_story') || (post.type == 'video' && post.status_type == 'shared_story'));
    };

    $scope.facebook.show_post = function(post, type) {
        return (post.type == type);
    };

    $scope.facebook.go_to_link = function(link) {
        if (IOS) {
                window.open(link, '_system');
            } else if (ANDROID) {
                navigator.app.loadUrl(link, { openExternal: true });
            } else {
                window.open(link, '_system');
            }
    };

    $scope.facebook.play_video = function(url) {
        videoService.video_url = url;
        $location.path('/video');
    };

    $scope.facebook.artist_name = ARTIST_NAME;


    // Twitter API
    $scope.twitter.open_twitter = function() {

        var twitter_timeline = 'https://twitter.com/farfromalaska';

        var twitter_window = window.open(twitter_timeline, '_blank', 'location=yes');
    };

    $scope.twitter.screen_name = TWITTER_USERNAME;


    // Instagram API
    // Load Instagram Feed
    $http.get('https://api.instagram.com/v1/users/' + INSTAGRAM_USER_ID + '/media/recent?client_id=' + INSTAGRAM_API_KEY)
        .success(function(e) {
            $scope.instagram.items = e.data;
            window.localStorage.setItem('INSTAGRAM_FEED', JSON.stringify($scope.instagram.items)); // TODO: Take advantage of this data
            $scope.$broadcast('newsInstagramLoad');

            // Get if user follows artist
            //INSTAGRAM_ACCESS_TOKEN = '196213762.a98b012.8fcd3182e6f34989865a0a45a9f4d884';
            if (INSTAGRAM_ACCESS_TOKEN) {
                $http.get('https://api.instagram.com/v1/users/' + INSTAGRAM_USER_ID + '/relationship?access_token=' + INSTAGRAM_ACCESS_TOKEN)
                    .success(function(e) {
                        $scope.instagram.following = (e.data.outgoing_status === 'follows');
                    })
                    .error(function(e) {
                        $scope.instagram.following = false;
                    });
            } else {
                $scope.instagram.following = false;
            }
        })
        .error(function() {
            $log.info("error");
        });

    $scope.instagram.username = INSTAGRAM_USERNAME;

    // Check if user is logged in to Instagram
    INSTAGRAM_ACCESS_TOKEN = window.localStorage.getItem('INSTAGRAM_ACCESS_TOKEN') || null;

    // Set Instagram like image
    $scope.onInstagramSlideChangeEnd = function (swiper) {
      $scope.instagram.get_photo_liked($scope.instagram.items[swiper.activeIndex]);

      if (swiper.activeIndex < $scope.instagram.items.length) {
        $scope.instagram.get_photo_liked($scope.instagram.items[swiper.activeIndex + 1]);
      }
    };

    $scope.instagram.get_photo_liked = function(photo) {
        if (!INSTAGRAM_ACCESS_TOKEN) {
            photo.liked = false;
        } else if (photo.liked === undefined) {
            $http.get('https://api.instagram.com/v1/media/' + photo.id + '?access_token=' + INSTAGRAM_ACCESS_TOKEN)
                .success(function(data, status) {
                    if (data.data.user_has_liked) {
                        photo.liked = true;
                    } else {
                        photo.liked = false;
                    }
                })
                .error(function(data, status) {
                    photo.liked = false;
                });
        } else {

        }
    };

    // Get First Imaged Liked
    $timeout(function() {
        $scope.instagram.get_photo_liked($scope.instagram.items[0]);
    }, 3000);

    // Follow artist on Instagram
    $scope.instagram.follow_user = function(photo) {
        if (INSTAGRAM_ACCESS_TOKEN) {
            //if (!photo.liked) {
            if (!$scope.instagram.following) {
                $scope.instagram.following = !$scope.instagram.following;
                $.post('https://api.instagram.com/v1/users/' + INSTAGRAM_USER_ID + '/relationship', {access_token: INSTAGRAM_ACCESS_TOKEN, action: 'follow'}, function (data,status) {
                    if (data.meta.code === 200) {

                    } else {

                    }
                });

            } else {

            }

        } else {
            // Login to Instagram to follow user
            window.localStorage.setItem('INSTAGRAM_METHOD', 'FOLLOW');

            var url = 'https://api.instagram.com/oauth/authorize/?client_id=' + INSTAGRAM_API_KEY + '&redirect_uri=' + INSTAGRAM_REDIRECT_URI + '&response_type=token&scope=' + INSTAGRAM_SCOPE;

            if (IOS) {
                window.open(url, '_system');
            } else if (ANDROID) {
                navigator.app.loadUrl(url, { openExternal: true });
            } else {
                window.open(url, '_system');
            }
        }
    };

    // Like photo on Instagram
    $scope.instagram.like_photo = function(photo) {
        if (INSTAGRAM_ACCESS_TOKEN) {
            if (!photo.liked) {
                photo.liked = !photo.liked;
                photo.likes.count += 1;

                $.post('https://api.instagram.com/v1/media/' + photo.id + '/likes', {access_token: INSTAGRAM_ACCESS_TOKEN}, function (data,status) {

                    if (data.meta.code === 200) {

                    } else {

                    }
                });
            } else {

                /*
                $.delete('https://api.instagram.com/v1/media/926333993577337897_32865756/likes?access_token=196213762.3b8448c.88fb74ff5193487fbd587d5b6b6db49a')
                    .success(function(data, status) {
                        $log.info(data);
                        $log.info(status);
                    })
                    .error(function(data, status) {
                        $log.info(data);
                        $log.info(status);
                    });
                    */
            }


        } else {
            // Login to Instagram to like photo
            window.localStorage.setItem('INSTAGRAM_PHOTO_ID', photo.id);
            window.localStorage.setItem('INSTAGRAM_METHOD', 'LIKE');

            var url = 'https://api.instagram.com/oauth/authorize/?client_id=' + INSTAGRAM_API_KEY + '&redirect_uri=' + INSTAGRAM_REDIRECT_URI + '&response_type=token&scope=' + INSTAGRAM_SCOPE;

            if (IOS) {
                window.open(url, '_system');
            } else if (ANDROID) {
                navigator.app.loadUrl(url, { openExternal: true });
            }
        }
    };

    // Translate time since photo was posted on Instagram
    $scope.instagram.getTimeLapse = function(t) {
        t = t * 1000;
        var now = new Date().getTime();

        var time_lapse = Math.ceil((now - t) / 1000 / 60);

        if (time_lapse < 60) {
            return time_lapse + " m";
        } else if (time_lapse < (60 * 24)) {
            return Math.ceil(time_lapse / 60) + " h";
        } else if (time_lapse < (60 * 24 * 3)) {
            return Math.ceil(time_lapse / (60 * 24)) + " dias";
        } else {
            t = new Date(t);
            return t.getDate() + "/" + (t.getMonth() + 1) + "/" + t.getFullYear();
        }
    };
}]);
