// ARTIST
// Trocar pelo nome do artista
var ARTIST_NAME = 'Far From Alaska';


// APP
// Trocar por 'gotmusic' + {nome do artista}
var URL_SCHEME = 'gotmusicfarfromalaska://';


// Geolocation
var LATITUDE;
var LONGITUDE;


// PUSH NOTIFICATION
// Trocar por App ID do app criado no Game Thrive
var GAMETHRIVE_APP_ID = '0089f09c-ce75-11e4-a0dc-337ced8460f8';

// Trocar pela ID do Projeto do novo App criado no Google Developers Console
var GCM_SENDER_ID = '232610257468';


// MESSAGE
// Trocar por id da planilha de mensagens (respostas) criada no Google Drive
var MESSAGE_FORM_ID = '1H0YFKpplWjN2oDNFqgombC_MhC6VH1zrEvRCBYB6ao8';
var MESSAGE_WORKSHEET_ID;


// FACEBOOK
// Trocar pelo id da página do facebook
// Buscar id pelo usuário: http://findmyfacebookid.com/
var FACEBOOK_PAGE_ID = '349113845174384';

// Trocar por Client ID do App criado no Facebook Developers
var FACEBOOK_CLIENT_ID = '954959894537819';

// Trocar por Client Secret do App criado no Facebook Developers
var FACEBOOK_CLIENT_SECRET = 'fecc2d553b397e1ee952a08a4085a591';


// TWITTER
// Trocar por nome de usuário do artista no Twitter
var TWITTER_USERNAME = 'FarFromAlaska';


// INSTAGRAM
// Trocar por nome de usuário do artista no Instagram
var INSTAGRAM_USERNAME = 'farfromalaska';

// Trocar pelo id do usuário no Instagram
// Buscar id pelo usuário: http://jelled.com/instagram/lookup-user-id
var INSTAGRAM_USER_ID = '313725767';
var INSTAGRAM_SCOPE = 'likes+relationships';

// Trocar pela API Key do novo App criado no Instagram Developers
var INSTAGRAM_API_KEY = 'a98b0124631f4cc2b7724b3c0712d14f';
var INSTAGRAM_REDIRECT_URI = URL_SCHEME + 'instagram/';
var INSTAGRAM_ACCESS_TOKEN;


// DEEZER
// [IMPORTANTE] APENAS UMA DAS OPÇÕES PODE SER TRUE
// Caso deseje uma PLAYLIST no Deezer, colocar 'DEEZER_MODE_PLAYLIST = true;' e 'var DEEZER_MODE_ALBUM = false;'
// Caso deseje uma ALBUM no Deezer, colocar 'DEEZER_MODE_PLAYLIST = false;' e 'var DEEZER_MODE_ALBUM = true;'
var DEEZER_MODE_PLAYLIST = false;
var DEEZER_MODE_ALBUM = true;

// Trocar pela API ID do novo App criado no Deezer Developers
var DEEZER_API_ID = '153981';

// Trocar pelo id da playlist desejada
var DEEZER_PLAYLIST_ID = '1054614051';

// Trocar pelo id do álbum desejado
var DEEZER_ALBUM_ID = '9758022';
var DEEZER_CHANNEL_URL = 'http://vladimir.sh/playground/deezer_light/channel.html';


// YOUTUBE
// [IMPORTANTE] APENAS UMA DAS OPÇÕES PODE SER TRUE
// Caso deseje uma PLAYLIST no Youtube, colocar 'YOUTUBE_MODE_PLAYLIST = true;' e 'var YOUTUBE_MODE_VIDEO = false;'
// Caso deseje um VIDEO no YouTube, colocar 'YOUTUBE_MODE_PLAYLIST = false;' e 'var YOUTUBE_MODE_VIDEO = true;'
var YOUTUBE_MODE_PLAYLIST = false;
var YOUTUBE_MODE_VIDEO = true;

// Trocar pelo id da playlist desejada
var YOUTUBE_PLAYLIST_ID = null;

// Trocar pelo id do video desejado
var YOUTUBE_VIDEO_ID = 'h6ZzhUqeU90';

// Trocar pela API Youtube do novo App criado no Google Developers Console
var YOUTUBE_API_KEY = 'AIzaSyDDSM6JyiBBYbK7Vs0FY10SwZMIhyj2DTY';

// ITUNES
// Trocar pelo id do artista no iTunes
var ITUNES_USER_ID = '591933697';
var ITUNES_AFFILIATE_CODE = '1l3vuS7';

// SONGKICK
// Trocar pelo id do artista no Songkick
var SONGKICK_ARTIST_ID = '6054394';

// Trocar pela API Key do novo App criado no Songkick Developers
var SONGKICK_API_KEY = 'LKwWsc81lEc7oDAG';

// DEMAND
// Trocar por id do form de mensagens criada no Google Drive para pedir shows
var DEMAND_FORM_URL = 'https://docs.google.com/forms/d/1HUawFD9klS6nfW64-O-4bkwWsdyxAF98JgqwedZrATc/formResponse';

// Trocar pelo id do <input> do email
var DEMAND_EMAIL_INPUT_ID = 'entry_1296407525';

// Trocar pelo id do <input> de cidade
var DEMAND_CITY_INPUT_ID = 'entry_1893028624';

// Trocar pelo id do <input> de latitude
var DEMAND_LATITUDE_INPUT_ID = 'entry_1425906170';

// Trocar pelo id do <input> de longitude
var DEMAND_LONGITUDE_INPUT_ID = 'entry_11332549';
var DEMAND_EMPTY_EMAIL_MESSAGE = 'Preencha o campo com seu email';
var DEMAND_EMAIL_FORMAT_MESSAGE = 'Email inválido';
var DEMAND_EMPTY_CITY_MESSAGE = 'Selecione uma cidade';

// LIVESTREAM
// Trocar pelo id do usuário no YouTube
// Como encontrar o id do usuário: https://support.google.com/youtube/answer/3250431?hl=pt
var LIVESTREAM_USER_ID = 'MZt1OqN1YuCMU0nBVMt8tw';
var LIVESTREAM_LIVE_STRING = 'AO VIVO';
var LIVESTREAM_COMPLETED_STRING = 'Arquivo';
var LIVESTREAM_PENDING_STRING = 'Aguarde';
var LIVESTREAM_EMPTY_STRING = 'Ainda não há streaming agendado';

// SWIPE
var SWIPE_SPEED = 0.8;
var SWIPE_MARGIN = 0.1;
var DELTA_SWIPE = 10; // Pixels per millisecond
var DELTA_RESIZE = 6; // Pixels per millisecond

// GLOBALS
var MODAL_TIMEOUT = 2000;
var MINUTES = 60 * 1000;
var DAYS = 24 * 60 * MINUTES;
var DEMAND_MINIMUM_INTERVAL = 1 * DAYS;     // Number of Days
var INTERNET_CHECK_INTERVAL = 1 * MINUTES; // Number of Minutes
var ITEM_MARGIN = 2 * 5;
var INITIAL_RESIZE_TIMEOUT = 3000;

var IOS;
var ANDROID;
var VERSION;
var WIDTH;
var HEIGHT;


// Handle Open From Url

var handleOpenURL = function(url) {
    setTimeout(function() {

        var data = url.split('://')[1];
        var source = data.split('/')[0];
        var params = data.split('/')[1];

        /*
        alert('Data: ' + data);
        alert('Source: ' + source);
        alert('Params: ' + params);
        */

        // Login to Instagram and Like Photo
        if (source === 'instagram') {
            INSTAGRAM_ACCESS_TOKEN = params.split('access_token=')[1];
            window.localStorage.setItem("INSTAGRAM_ACCESS_TOKEN", INSTAGRAM_ACCESS_TOKEN);

            var post_params = 'access_token=' + INSTAGRAM_ACCESS_TOKEN;
            var method = window.localStorage.getItem('INSTAGRAM_METHOD');


            if (method === 'LIKE') {
                var photo_id = window.localStorage.getItem('INSTAGRAM_PHOTO_ID');

                $.post('https://api.instagram.com/v1/media/' + photo_id + '/likes', {access_token: INSTAGRAM_ACCESS_TOKEN}, function (data, status) {
                    if (data.meta.code === 200) {
                        //alert('LIKE SUCCESS');
                        window.location.hash = '#/news';
                    } else {
                        //alert('LIKE ERROR');
                    }
                });
            } else if (method === 'FOLLOW') {
                $.post('https://api.instagram.com/v1/users/' + INSTAGRAM_USER_ID + '/relationship', {access_token: INSTAGRAM_ACCESS_TOKEN, action: 'follow'}, function (data,status) {

                    if (data.meta.code === 200) {
                        window.location.hash = '#/news';
                    } else {

                    }
                });
            }



        }

    }, 0);
};


var gotMusicApp = angular.module('gotMusicApp', ['ngRoute', 'ui.bootstrap']);

gotMusicApp.config(['$routeProvider', function($routeProvider) {
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

gotMusicApp.run(function($rootScope) {
    $rootScope.trackView = function (view) {
        // TODO: Save trackView in a local variable while analytics not available
        if (window.analytics) {
            window.analytics.trackView(view);
        }
    };
});

gotMusicApp.directive('navigationTabs', function() {
    return {
        templateUrl: 'directives/navigation-tabs/navigation-tabs.html',
        controller: 'NavigationCtrl'

  };
});

gotMusicApp.directive('titleBar', function() {
    return {
        templateUrl: 'directives/title-bar/title-bar-new.html',
        //controller: 'NavigationCtrl'
  };
});

gotMusicApp.directive('swiper', ['$timeout', function($timeout) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      function init() {
        var params = {};

        function adjustWrapperHeight() {
          var nextSlide = $(this.slides[this.activeIndex]);
          var newHeight = $('.content', nextSlide).outerHeight() +
                          $('.title-wrapper', nextSlide).outerHeight();

          $(this.wrapper[0]).height(newHeight);
        }

        params.onInit = function (swiper) {
          adjustWrapperHeight.apply(swiper);
        };

        params.onSlideChangeStart = function (swiper) {
          adjustWrapperHeight.apply(swiper);
        };

        $timeout(function(){
          element.css({width: window.innerWidth - ITEM_MARGIN});

          if (attrs.onSlideChangeEnd) {
            params.onSlideChangeEnd = scope[attrs.onSlideChangeEnd];
          }

          new Swiper(element, params);
        });
      }

      if (attrs.swiperAutoinit) { init(); }
      if (attrs.swiperInitOn) { scope.$on(attrs.swiperInitOn, init); }
    }
  };
}]);

gotMusicApp.service("videoService", function() {
    this.video_id = '';
    this.video_url = '';
});

gotMusicApp.service("swipeService", ["$log", "$timeout", function($log, $timeout) {
    this.createSwipe = function(elem, obj, scope) {

        var self = this;
        var swipe = new Hammer(document.getElementById(elem), {direction: Hammer.DIRECTION_HORIZONTAL});

        obj.left = 0;
        obj.left_start = 0;
        obj.current_item = 0;
        obj.swipping = false;

        swipe.on("pan", function(e) {
            if (obj.swipping && (e.velocityX > 0.1 || e.velocityX < -0.1)) {

                // Limit Left
                if (e.deltaX + obj.left_start > window.innerWidth * SWIPE_MARGIN) {
                    obj.left = window.innerWidth * SWIPE_MARGIN;
                } else if (e.deltaX + obj.left_start < - window.innerWidth * (obj.items.length - (1.0 - SWIPE_MARGIN))) {
                    obj.left = - window.innerWidth * (obj.items.length - (1.0 - SWIPE_MARGIN));
                } else {
                    obj.left = e.deltaX + obj.left_start;
                }

                scope.$apply();
            }
        });

        swipe.on("panstart", function(e) {
            //alert('PAN START');
            if (e.direction === Hammer.DIRECTION_LEFT || e.direction === Hammer.DIRECTION_RIGHT) {
                obj.swipping = true;
            }
            obj.left_start = $("#" + elem).offset().left;
        });

        swipe.on("panend", function(e) {
            if (obj.swipping) {
                if ((e.deltaX / e.deltaTime) < -SWIPE_SPEED && e.direction == 2 && obj.current_item < obj.items.length - 1) {
                    obj.directionChange = "right";
                    obj.current_item += 1;
                } else if ((e.deltaX / e.deltaTime) > SWIPE_SPEED && e.direction == 1 && obj.current_item > 0) {
                    obj.directionChange = "left";
                    obj.current_item -= 1;
                } else if (e.deltaX / $("#" + elem).width() > 0.5 && obj.current_item > 0) {
                    obj.directionChange = "left";
                    obj.current_item -= 1;
                } else if(e.deltaX > 0) {
                    obj.directionChange = "left";
                } else if (e.deltaX / $("#" + elem).width() < -0.5 && obj.current_item < obj.items.length - 1) {
                    obj.directionChange = "right";
                    obj.current_item += 1;
                } else if (e.deltaX < 0) {
                    obj.directionChange = "right";
                } else {
                    return false;
                }

                self.move(obj, elem);
                scope.$apply();
            }

            obj.swipping = false;
        });
    };

    this.move = function(obj, elem) {
        var self = this;

        if(obj.left > - (obj.current_item * window.innerWidth) && obj.directionChange === "left") {
            obj.left -= obj.left + obj.current_item * window.innerWidth >= DELTA_SWIPE ? DELTA_SWIPE : obj.left + obj.current_item * window.innerWidth;
            $timeout(function() {
                self.move(obj, elem);
            }, 1);
        } else if(obj.left < - (obj.current_item * window.innerWidth) && obj.directionChange === "left") {
            obj.left += DELTA_SWIPE;
            $timeout(function() {
                self.move(obj, elem);
            }, 1);
        } else if (obj.left < - (obj.current_item * window.innerWidth) && obj.directionChange === "right") {
            obj.left += DELTA_SWIPE;
            $timeout(function() {
                self.move(obj, elem);
            }, 1);
        } else if (obj.left > - (obj.current_item * window.innerWidth) && obj.directionChange === "right") {
            obj.left -= obj.left + obj.current_item * window.innerWidth >= DELTA_SWIPE ? DELTA_SWIPE : obj.left + obj.current_item * window.innerWidth;
            $timeout(function() {
                self.move(obj, elem);
            }, 1);
        } else if (obj.left === - (obj.current_item * window.innerWidth)) {
            var elem_children = $($($('#' + elem).children()[obj.current_item]).children()[0]).children();

            for (var i = 0; i < elem_children.length; i++) {
                var child = elem_children[i];
                if ($(child).hasClass('content')) {
                    var current_item_height = $($(child).children()[0]).height() + (2 * 15);
                    if (elem == 'instagram') {
                        current_item_height += $($(child).children()[1]).height();
                    }
                    self.resize(obj, current_item_height);
                }
            }
        }
    };

    this.resize = function(obj, current_item_height) {
        var self = this;

        if (obj.item_height == null) {
            obj.item_height = current_item_height;
        }

        if (obj.height == null) {
            obj.height = current_item_height + (2 * 15);
            if(obj.get_call2action != null) {
                obj.height += 30;
            }

        }


        if (obj.item_height > current_item_height) {

            var delta = obj.item_height - current_item_height >= DELTA_RESIZE ? DELTA_RESIZE : obj.item_height - current_item_height;

            obj.item_height -= delta;
            obj.height -= delta;
            $timeout(function() {
                self.resize(obj, current_item_height)
            }, 1);

        } else if (obj.item_height < current_item_height) {

            var delta = current_item_height - obj.item_height >= DELTA_RESIZE ? DELTA_RESIZE : current_item_height - obj.item_height ;

            obj.item_height += delta;
            obj.height += delta;

            obj.item_height += 5;
            obj.height += 5;
            $timeout(function() {
                self.resize(obj, current_item_height)
            }, 1);

        } else if (obj.item_height === current_item_height) {
            //obj.text_height = current_item_height - 5;

            /*
            $timeout(function() {
                self.resize(obj, current_item_height)
            }, 1);
            */
        }
    };
}]);


gotMusicApp.controller('NavigationCtrl', ['$scope', '$log', '$location', function($scope, $log, $location) {
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

gotMusicApp.controller("NotificationCtrl", ["$scope", "$log", "$location", function($scope, $log, $location) {
    $scope.goToNews = function() {
        $scope.close();
        $location.path("/news");
    };

    $scope.close = function() {
        $('#notification').animate({top: '-100px'}, 1000);
    };
}]);



// Home Screen Controller
gotMusicApp.controller("HomeCtrl", ["$scope", "$log", "$location", function($scope, $log, $location) {

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

gotMusicApp.controller('InternetModalInstanceCtrl', ["$scope", "$modalInstance", "$log", "$modal", "$sce", function ($scope, $modalInstance, $log, $modal, $sce) {
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);


// News Screen Controller
gotMusicApp.controller('NewsCtrl', ['$scope', '$log', '$http', '$location', '$interval', '$timeout', '$document', 'swipeService', 'videoService', '$modal', function($scope, $log, $http, $location, $interval, $timeout, $document, swipeService, videoService, $modal) {


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

    $scope.message.set_initial_height = function() {
        var elem_children = $($($('#message').children()[0]).children()[0]).children();
        for (var i = 0; i < elem_children.length; i++) {
            var child = elem_children[i];
            if ($(child).hasClass('content')) {
                var current_item_height = $($(child).children()[0]).height() + (2 * 15);
                swipeService.resize($scope.message, current_item_height);
            }
        }
    };

    $scope.facebook.set_initial_height = function() {
        var elem_children = $($($('#facebook').children()[0]).children()[0]).children();
        for (var i = 0; i < elem_children.length; i++) {
            var child = elem_children[i];
            if ($(child).hasClass('content')) {
                var current_item_height = $($(child).children()[0]).height() + (2 * 15);
                swipeService.resize($scope.facebook, current_item_height);
            }
        }
    };

    $scope.instagram.set_initial_height = function() {
        var elem_children = $($($('#instagram').children()[0]).children()[0]).children();
        for (var i = 0; i < elem_children.length; i++) {
            var child = elem_children[i];
            if ($(child).hasClass('content')) {
                var current_item_height = $($(child).children()[0]).height() + $($(child).children()[1]).height() + (2 * 15);
                swipeService.resize($scope.instagram, current_item_height);
            }
        }
    };

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

                    try {
                        var item = {
                            timestamp: entry.gsx$timestamp.$t,
                            message: entry.gsx$message.$t,
                            call2action: entry.gsx$call2action.$t,
                            button_title: entry.gsx$buttontitle.$t,
                            app_link: entry.gsx$linkinterno.$t
                        };
                    } catch (exception) {
                        alert('Malformed spreadsheet');
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
                            $scope.facebook.set_initial_height();
                            $timeout(function() {
                                $scope.facebook.set_initial_height();
                                window.localStorage.setItem('FACEBOOK_FEED', JSON.stringify($scope.facebook.items)); // TODO: Take advantage of this data
                                $scope.$broadcast('newsFacebookLoad');
                            }, INITIAL_RESIZE_TIMEOUT);
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

            $timeout(function() {
                $scope.instagram.set_initial_height();
                $timeout(function() {
                    $scope.instagram.set_initial_height();
                }, INITIAL_RESIZE_TIMEOUT);
            }, INITIAL_RESIZE_TIMEOUT);

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



gotMusicApp.controller('VideoCtrl', ['$scope', '$log', '$http', '$sce', '$timeout', '$location', 'videoService', function($scope, $log, $http, $sce, $timeout, $location, videoService) {

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

// Music Screen Controller
gotMusicApp.controller('MusicCtrl', ['$scope', '$log', '$http', '$sce', '$timeout', '$location', 'videoService', 'swipeService', '$modal', '$interval', function($scope, $log, $http, $sce, $timeout, $location, videoService, swipeService, $modal, $interval) {

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

    // Get From Local Storage
    $scope.youtube.items = JSON.parse(window.localStorage.getItem("YOUTUBE_FEED")) || [];
    $scope.itunes.items = JSON.parse(window.localStorage.getItem("ITUNES_FEED")) || [];

    $('#loading-wrapper').hide();

    // Set Element Width
    $scope.deezer.set_width = function() {
        $(".deezer-item").width(window.innerWidth - ITEM_MARGIN);
    };

    $scope.youtube.set_width = function() {
        $(".youtube-item").width(window.innerWidth - ITEM_MARGIN);
    };

    $scope.itunes.set_width = function() {
        $(".itunes-item").width(window.innerWidth - ITEM_MARGIN);
        if ((window.innerWidth - ITEM_MARGIN) < 360) {
            $('.buy-album').css('position', 'static');
            $('.buy-album').css('margin-top', '20px');
        }
    };

    // Create Swipe Controllers
    if (YOUTUBE_MODE_PLAYLIST) {
        swipeService.createSwipe("youtube", $scope.youtube, $scope);
    }
    swipeService.createSwipe("itunes", $scope.itunes, $scope);

    // Deezer Pause Track on Swipe
    // var deezerSwipe = new Hammer(document.getElementById("deezer"));
    // deezerSwipe.on("panstart", function(e) {
    //     $scope.deezer.pause();
    // });

    $('#deezer-carousel').css({height: 175, width: window.innerWidth - ITEM_MARGIN});
    var deezerCarousel = new Swiper('#deezer-carousel');

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
            }, INITIAL_RESIZE_TIMEOUT);
        });

        $scope.deezer.embed = true;
    } else {
        $scope.deezer.items = JSON.parse(window.localStorage.getItem("DEEZER_FEED")) || [];
        $('#deezer-iframe').remove();
        $scope.deezer.embed = false;

        $timeout(function() {
            $scope.deezer.initialize();
            deezerCarousel.init();
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

    deezerCarousel.on('onSlideChangeEnd', function (swiper) {
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
    });

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
                window.localStorage.setItem('YOUTUBE_FEED', JSON.stringify($scope.youtube.items));
            })
            .error(function(e) {
                $log.info(e);
            });
    }
    // YOUTUBE VIDEO
    else if (YOUTUBE_MODE_VIDEO) {
        $http.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + YOUTUBE_VIDEO_ID + '&key=' + YOUTUBE_API_KEY)
            .success(function(e) {
                $scope.youtube.items = e.items;
                window.localStorage.setItem('YOUTUBE_FEED', JSON.stringify($scope.youtube.items));
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



    $scope.formatDate = function(t) {
        t = new Date(t);
        return t.getDate() + "/" + (t.getMonth() + 1) + "/" + t.getFullYear();
    };

    // ITUNES API

    $http.get('https://itunes.apple.com/lookup?&country=br&entity=album&id=' + ITUNES_USER_ID)
        .success(function(e) {
            $scope.itunes.items = e.results.slice(1, e.results.length);
            window.localStorage.setItem("ITUNES_FEED", JSON.stringify($scope.itunes.items));
        }).error(function() {
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


gotMusicApp.controller('ModalInstanceCtrl', ["$scope", "$modalInstance", "$log", "$modal", "$sce", function ($scope, $modalInstance, $log, $modal, $sce) {

    $scope.email;
    $scope.city;

    $scope.latitude = window.localStorage.getItem("LATITUDE");;
    $scope.longitude = window.localStorage.getItem("LONGITUDE");

    var geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng($scope.latitude, $scope.longitude);

    geocoder.geocode({'latLng': latlng}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                for (var i = 0; i < results[0].address_components.length; i++) {
                    if (results[0].address_components[i].types.indexOf("locality") != -1) {
                        $scope.city = results[0].address_components[i].long_name;
                        $scope.$apply();
                    }
                }
            } else {
                //alert('No results found');
            }
        } else {
            //alert('Geocoder failed due to: ' + status);
        }
    });

    // Connect with Google Forms
    $scope.form_url = $sce.trustAsResourceUrl(DEMAND_FORM_URL);
    $scope.email_input = DEMAND_EMAIL_INPUT_ID;
    $scope.city_input = DEMAND_CITY_INPUT_ID;
    $scope.latitude_input = DEMAND_LATITUDE_INPUT_ID;
    $scope.longitude_input = DEMAND_LONGITUDE_INPUT_ID;

    $scope.email_input_name = DEMAND_EMAIL_INPUT_ID.replace('_', '.');
    $scope.city_input_name = DEMAND_CITY_INPUT_ID.replace('_', '.');
    $scope.latitude_input_name = DEMAND_LATITUDE_INPUT_ID.replace('_', '.');
    $scope.longitude_input_name = DEMAND_LONGITUDE_INPUT_ID.replace('_', '.');

    $scope.$watch('email', function() {
        var email_field  = document.getElementById(DEMAND_EMAIL_INPUT_ID);
        if (email_field != null) {
            email_field.setCustomValidity("");
        }
    });

    $scope.$watch('city', function() {
        var city_field  = document.getElementById(DEMAND_CITY_INPUT_ID);
        if (city_field != null) {
            city_field.setCustomValidity("");
        }
    });


    $scope.validate = function() {

        var email_field  = document.getElementById(DEMAND_EMAIL_INPUT_ID);
        var city_field  = document.getElementById(DEMAND_CITY_INPUT_ID);

        if (email_field.value === "") {
            email_field.setCustomValidity(DEMAND_EMPTY_EMAIL_MESSAGE);
        } else if (email_field.validity.typeMismatch) {
            email_field.setCustomValidity(DEMAND_EMAIL_FORMAT_MESSAGE);
        } else {
            email_field.setCustomValidity("");
        }

        if (city_field.value === "") {
            city_field.setCustomValidity(DEMAND_EMPTY_CITY_MESSAGE);
        } else {
            city_field.setCustomValidity("");
        }

    };

    // Success API
    $scope.openSuccessModal = function() {
        window.localStorage.setItem("DEMAND_LAST_DEMAND", new Date().getTime());
        window.localStorage.setItem("DEMAND_DEMANDED", true);
        window.analytics.trackEvent('Demand', 'Click', 'Click Pedir Show', 1);
        $modalInstance.close(true);
    };


    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

}]);


// Shows Screen Controller
gotMusicApp.controller('ShowsCtrl', ['$scope', '$log', '$http', '$location', '$timeout', 'swipeService', '$modal', '$sce', 'videoService', '$interval', function($scope, $log, $http, $location, $timeout, swipeService, $modal, $sce, videoService, $interval) {

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

    if (!checkConnection()) {
        $scope.openInternetModal();
        $interval.cancel($scope.internet_check);
    }

    $scope.start_internet_check = function() {
        $scope.internet_check = $interval(function() {
            if (!checkConnection()) {
                $scope.openInternetModal();
                $interval.cancel($scope.internet_check);
            }
        }, INTERNET_CHECK_INTERVAL);
    };


    $scope.start_internet_check();

    // Analytics
    $scope.trackView('Shows Screen');

    // MODULES
    $scope.demand = {};
    $scope.songkick = {};
    $scope.livestream = {};


    // Get From Local Storage
    $scope.songkick.items = JSON.parse(window.localStorage.getItem("SONGKICK_FEED")) || [];
    $scope.demand.demanded = Boolean(window.localStorage.getItem("DEMAND_DEMANDED")) || false;
    $scope.demand.last_demand = window.localStorage.getItem("DEMAND_LAST_DEMAND") || [];

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

    // Set Element Width
    $scope.songkick.set_width = function() {
        $(".songkick-item").width(window.innerWidth - ITEM_MARGIN);
    };

    $scope.demand.set_width = function() {
        $(".demand-item").width(window.innerWidth - ITEM_MARGIN);
    };

    $scope.livestream.set_width = function() {
        $(".livestream-item").width(window.innerWidth - ITEM_MARGIN);
    };

    // Create Swipe Controllers
    swipeService.createSwipe("songkick", $scope.songkick, $scope);



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

    $scope.artist_name = ARTIST_NAME;

    // Songkick API
    $http.get("http://api.songkick.com/api/3.0/artists/" + SONGKICK_ARTIST_ID + "/calendar.json?apikey=" + SONGKICK_API_KEY)
        .success(function(e) {
            $scope.songkick.items = [];
            for (var i = 0; i < e.resultsPage.results.event.length; i += 2) {
                //$log.info(i);
                var l = e.resultsPage.results.event[i];
                var r = e.resultsPage.results.event[i + 1];

                var event = {"left": l, "right": r};
                $scope.songkick.items.push(event);
            }
            window.localStorage.setItem("SONGKICK_FEED", JSON.stringify($scope.songkick.items));
        }).error(function() {
        });

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
                //alert('ERROR');
                //alert(JSON.stringify(e));
            });

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
}]);


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {

        document.addEventListener("backbutton", function(e) {
            if (!(window.location.hash === '#/home')) {
                window.history.back();
            } else {
                e.preventDefault();
                navigator.app.exitApp()
            }
        }, false);

        IOS = (device.platform == 'iOS');
        ANDROID = (device.platform == 'android' || device.platform == 'Android');

        VERSION = device.version;

//        alert('READY');
//        alert('WIDTH: ' + window.innerWidth);

        SWIPE_SPEED = window.innerWidth / 1000;


        SWIPE_MARGIN = 0.1;
        DELTA_SWIPE = window.innerWidth / 50; // Pixels per millisecond
        DELTA_RESIZE = window.innerWidth / 20; // Pixels per millisecond

        //alert('SWIPE SPEED: ' + SWIPE_SPEED);
        //alert('DELTA RESIZE: ' + DELTA_RESIZE);

        // Google Analytics
        window.analytics.startTrackerWithId('UA-61028835-1');


        // Geolocation
        navigator.geolocation.getCurrentPosition(onGeolocationSuccess, onGeolocationError);


        // Register for Push Notification
        var pushNotification = window.plugins.pushNotification;


        window.plugins.GameThrive.init(GAMETHRIVE_APP_ID,
                                       {googleProjectNumber: GCM_SENDER_ID},
                                       function(e) {
                                            didReceiveRemoteNotificationCallBack(e);
                                        });


        if (device.platform == 'android' || device.platform == 'Android') {

            pushNotification.register(
                app.successHandler,
                app.errorHandler, {
                    "senderID": GCM_SENDER_ID,
                    "ecb":"onNotificationGCM"
                });
        } else {
            pushNotification.register(
                tokenHandler,
                errorHandler, {
                    "badge":"true",
                    "sound":"true",
                    "alert":"true",
                    "ecb":"onNotificationAPN"
                });

        }


        window.location.hash = '#/home';

    },
    successHandler: function(result) {
        console.log('result = ' + result);
    },
    errorHandler: function(error) {
        console.log('error = ' + error);
    },

};

app.initialize();



function didReceiveRemoteNotificationCallBack(jsonData) {
    //alert("Notification received:\n" + JSON.stringify(jsonData));
    //console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
    if (jsonData.isActive) {
        showForegroundNotification();
    } else {
        window.location.hash = '#/news';
    }
}

// Geolocation
function onGeolocationSuccess (e) {

    LATITUDE = e.coords.latitude;
    LONGITUDE = e.coords.longitude;
    window.localStorage.setItem("LATITUDE", LATITUDE);
    window.localStorage.setItem("LONGITUDE", LONGITUDE);
}

function onGeolocationError (e) {
    $log.error("FAILED TO GET LOCATION");
}

function registerPushId(platform, key) {
    // Register in Gamethrive

    //alert('Registering...');

    var geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(window.localStorage.getItem('LATITUDE'), window.localStorage.getItem('LONGITUDE'));

    var state;

    geocoder.geocode({'latLng': latlng}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                for (var i = 0; i < results[0].address_components.length; i++) {
                    if (results[0].address_components[i].types.indexOf("administrative_area_level_1") != -1) {
                        state = results[0].address_components[i].short_name;
                        //alert('State: ' + state);
                        gamethrive_register(platform, key, state);
                        break;
                    }
                }
            } else {
                //alert('No results found');
                gamethrive_register(platform, key, '');
            }
        } else {
            //alert('Geocoder failed due to: ' + status);
            gamethrive_register(platform, key, '');
        }
    });
};

function gamethrive_register(platform, key, state) {
    $.post('https://gamethrive.com/api/v1/players', {app_id: GAMETHRIVE_APP_ID, device_type: (IOS ? 0 : (ANDROID ? 1 : 5)), identifier: key, tags: {"state" : state}}, function (data, status) {
        if (data.success) {
            window.localStorage.setItem('PUSH_NOTIFICATION_REGISTERED', true);
            window.localStorage.setItem('PUSH_NOTIFICATION_REGID', key);
        } else {
            window.localStorage.setItem('PUSH_NOTIFICATION_REGISTERED', false);
        }
    });
};

function showForegroundNotification() {
    var msg = 'Nova mensagem de ' + ARTIST_NAME;
    $('#notification-text').text(msg);
    $('#notification').animate({top: '0px'}, 1000);
};

// Receive Push Notification
// iOS
function onNotificationAPN (event) {

    /*
    if (event.foreground) {
        showForegroundNotification();
    } else {
        window.location.hash = '#/news';
    }

    if (event.alert) {
        navigator.notification.alert(event.alert);
    }

    if (event.sound) {
        var snd = new Media(event.sound);
        snd.play();
    }

    if (event.badge) {
        pushNotification.setApplicationIconBadgeNumber(successHandler, errorHandler, event.badge);
    }
    */
}

function successHandler (result) {
    //alert('result = ' + result);
}

function errorHandler (error) {
    //alert('error = ' + error);
}

function tokenHandler (result) {
    // Your iOS push server needs to know the token before it can push to this device
    // here is where you might want to send it the token for later use.
    registerPushId('IOS', result);
}


// Android
function onNotificationGCM(e) {
    //$("#app-status-ul").append('<li>EVENT -> RECEIVED:' + e.event + '</li>');

    switch(e.event) {
    case 'registered':
        if ( e.regid.length > 0 ) {
            registerPushId('ANDROID', e.regid);
        }
        break;

    case 'message':
        // if this flag is set, this notification happened while we were in the foreground.
        // you might want to play a sound to get the user's attention, throw up a dialog, etc.
        if ( e.foreground ) {
           // $("#app-status-ul").append('<li>--INLINE NOTIFICATION--' + '</li>');

            //showForegroundNotification();

            /*
            setTimeout(function() {
                $('#notification').animate({top: '-100px'}, 1000);
            }, 3000);
            */

            // if the notification contains a soundname, play it.
            /*
            var my_media = new Media("/android_asset/www/"+e.soundname);
            my_media.play();
            */
        } else {  // otherwise we were launched because the user touched a notification in the notification tray.
            if ( e.coldstart ) {
                //$("#app-status-ul").append('<li>--COLDSTART NOTIFICATION--' + '</li>');
                //window.location.hash = '#/news';
            } else {
                //$("#app-status-ul").append('<li>--BACKGROUND NOTIFICATION--' + '</li>');
                //window.location.hash = '#/news';
            }
        }

        //$("#app-status-ul").append('<li>MESSAGE -> MSG: ' + e.payload.message + '</li>');
        //$("#app-status-ul").append('<li>MESSAGE -> MSGCNT: ' + e.payload.msgcnt + '</li>');
    break;

    case 'error':
        //$("#app-status-ul").append('<li>ERROR -> MSG:' + e.msg + '</li>');
            //alert('NOTIFICATION ERROR');
    break;

    default:
            //alert('NOTIFICATION DEFAULT');
        //$("#app-status-ul").append('<li>EVENT -> Unknown, an event was received and we do not know what it is</li>');
    break;
  }
}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    return networkState != Connection.NONE;
}
