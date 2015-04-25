var gotMusicApp = angular.module("gotMusicApp", ["ngRoute", "ui.bootstrap"]);


gotMusicApp.directive('navigationTabs', function() {
    return {
        templateUrl: 'directives/navigation-tabs/navigation-tabs.html',
        controller: 'NavigationCtrl'

  };
});

gotMusicApp.directive('titleBar', function() {
    return {
        templateUrl: 'directives/title-bar/title-bar.html',
        //controller: 'NavigationCtrl'

  };
});



gotMusicApp.controller("NavigationCtrl", ["$scope", "$log", "$location", function($scope, $log, $location) {
    $scope.goToNews = function() {
        $location.path("/news");
    };

    $scope.goToMusic = function() {
        $location.path("/music");
    };

    $scope.goToShows = function() {
        $location.path("/shows");
    };
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
    window.analytics.trackView('Home Screen');


}]);

// News Screen Controller
gotMusicApp.controller("NewsCtrl", ["$scope", "$log", "$http", "$location", "$interval", "$timeout", "$document", "swipeService", function($scope, $log, $http, $location, $interval, $timeout, $document, swipeService) {

    // Analytics
    window.analytics.trackView('News Screen');

    // MODULES
    $scope.twitter = {};
    $scope.instagram = {};


    // Get From Local Storage
    $scope.twitter.items = JSON.parse(window.localStorage.getItem("TWITTER_FEED"));
    $scope.instagram.items = JSON.parse(window.localStorage.getItem("INSTAGRAM_FEED"));


    // Create Swipe Controllers
    swipeService.createSwipe("twitter", $scope.twitter, $scope);
    swipeService.createSwipe("instagram", $scope.instagram, $scope);


    // Set Element Width
    $scope.twitter.setWidth = function() {
        $(".twitter-item").width(window.innerWidth - 30);

    };

    $scope.instagram.setWidth = function() {
        $(".instagram-item").width(window.innerWidth - 30);
    };

    // Twitter API

    AWS.config.accessKeyId = AWS_ACCESS_KEY_ID;
    AWS.config.secretAccessKey = AWS_ACCESS_KEY_SECRET;
    AWS.config.region = AWS_REGION;
    AWS.config.dynamoDbCrc32 = false;

    var table = new AWS.DynamoDB({params: {TableName: 'TwitterFeed'}});

    table.scan({
      TableName : 'TwitterFeed',
      Limit : 20
    }, function(err, data) {
        if (err) {
            $log(err);
            return;
        } else if (data) {
            $scope.twitter.items = data.Items;
            window.localStorage.setItem("TWITTER_FEED", JSON.stringify($scope.twitter.items));
        }
    });

    $scope.twitter.getTimeLapse = function(t) {
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




    // Instagram API

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


    $http.get("https://api.instagram.com/v1/users/217647811/media/recent?client_id=" + INSTAGRAM_API_KEY)
        .success(function(e) {
            $scope.instagram.items = e.data;
            window.localStorage.setItem("INSTAGRAM_FEED", JSON.stringify($scope.instagram.items));
        })
        .error(function() {
            $log.info("error");
        });

}]);

gotMusicApp.service("videoService", function() {
    this.video_id = '';
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
            if (obj.swipping) {

                // Limit Left
                if (e.deltaX + obj.left_start > window.innerWidth * SWIPE_MARGIN) {
                    obj.left = window.innerWidth * SWIPE_MARGIN;
                } else if (e.deltaX + obj.left_start < - window.innerWidth * (obj.items.length - (1.0 - SWIPE_MARGIN))) {
                    $log.info("xxx");
                    obj.left = - window.innerWidth * (obj.items.length - (1.0 - SWIPE_MARGIN));
                } else {
                    obj.left = e.deltaX + obj.left_start;
                }

                scope.$apply();
            }
        });

        swipe.on("panstart", function(e) {
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
            obj.height = current_item_height + (2 * 15);;
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
            $log.info(current_item_height);
            $log.info($('.tweet-text').height());
            $log.info(current_item_height - $('.tweet-text').height());
        }
    };
}]);

gotMusicApp.controller("VideoCtrl", ["$scope", "$log", "$http", "$sce", "$timeout", "$location", "videoService", function($scope, $log, $http, $sce, $timeout, $location, videoService) {

    $scope.video_url = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + videoService.video_id + "/?showinfo=0&modestbranding=1&&autoplay=1&fs=0");

    $scope.updateDimensions = function() {
        $scope.width = window.innerWidth;
        $scope.height = window.innerHeight - 50;
    };

    $scope.quitPlayer = function() {
        $location.path("/music");
    };


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
gotMusicApp.controller("MusicCtrl", ["$scope", "$log", "$http", "$sce", "$timeout", "$location", "videoService", "swipeService", function($scope, $log, $http, $sce, $timeout, $location, videoService, swipeService) {

    // Analytics
    window.analytics.trackView('Music Screen');

    // MODULES
    $scope.deezer = {};
    $scope.youtube = {};
    $scope.itunes = {};


    // Get From Local Storage
    $scope.deezer.items = JSON.parse(window.localStorage.getItem("DEEZER_FEED"));
    $scope.youtube.items = JSON.parse(window.localStorage.getItem("YOUTUBE_FEED"));
    $scope.itunes.items = JSON.parse(window.localStorage.getItem("ITUNES_FEED"));

    // Set Element Width
    $scope.deezer.setWidth = function() {
        $(".deezer-item").width(window.innerWidth - 30);
    };

    $scope.youtube.setWidth = function() {
        $(".youtube-item").width(window.innerWidth - 30);
    };

    $scope.itunes.setWidth = function() {
        $(".itunes-item").width(window.innerWidth - 30);
    };


    // Create Swipe Controllers
    swipeService.createSwipe("deezer", $scope.deezer, $scope);
    swipeService.createSwipe("youtube", $scope.youtube, $scope);
    swipeService.createSwipe("itunes", $scope.itunes, $scope);



    // Deezer Pause Track on Swipe
    var deezerSwipe = new Hammer(document.getElementById("deezer"));
    deezerSwipe.on("panstart", function(e) {
        window.analytics.trackEvent('Deezer', 'Swipe', 'Pause: ' + $scope.deezer.items[$scope.deezer.current_track].title , 1);
        $scope.deezer.pause();
    });


    // Deezer API

    $scope.deezer.play = function() {

        if (DZ.player.getCurrentTrack() == null) {
            $scope.deezer.play_track_id();
        } else if (DZ.player.getCurrentTrack().id == $scope.deezer.items[$scope.deezer.current_item].id) {
            window.analytics.trackEvent('Deezer', 'Click', 'Play: ' + $scope.deezer.items[$scope.deezer.current_item].title , 1);
            DZ.player.play();
        } else {
            $scope.deezer.play_track_id();
        }
        $scope.deezer.playing = true;
    };

    $scope.deezer.pause = function() {
        window.analytics.trackEvent('Deezer', 'Click', 'Pause: ' + $scope.deezer.items[$scope.deezer.current_track].title , 1);
        $scope.deezer.playing = false;
        DZ.player.pause();
    };

    $scope.deezer.play_track_id = function() {
        window.analytics.trackEvent('Deezer', 'Click', 'Play: ' + $scope.deezer.items[$scope.deezer.current_track].title , 1);
        DZ.player.playTracks([$scope.deezer.items[$scope.deezer.current_track].id], 0, function(response){

        });
    };

    $scope.deezer.previous = function() {
        DZ.player.previous();
    };

    $scope.deezer.next = function() {
        DZ.player.next();
    };


    $scope.$watch('deezer.current_track', function(newVal, oldVal) {
        $scope.deezer.time_current = 0.0;
    });


    var APP_ID = '151651';
    var CHANNEL_URL = 'http://vladimir.sh/playground/deezer_light/channel.html';

    $scope.deezer.setup = function() {          
        //$scope.deezer.play_track_id();
        DZ.Event.subscribe('player_position', function(e){
            $scope.deezer.time_current = e[0];
            if (e[1]) $scope.deezer.time_total = +e[1];
            $scope.$apply();
        });
    };

    DZ.init({
        appId: APP_ID,
        channelUrl: CHANNEL_URL,
        player: {
            onload: $scope.deezer.setup
        }
    });



    $http.get("http://api.deezer.com/playlist/" + DEEZER_PLAYLIST_ID)
        .success(function(e) {
            $scope.deezer.items = e.tracks.data;
            window.localStorage.setItem("DEEZER_FEED", JSON.stringify($scope.deezer.items));
        })
        .error(function() {
            $log.info("error");
        });



    // YOUTUBE API

    $scope.youtube.playlist_index = 0;

    $scope.$watch('youtube.playlist_index', function(newIndex, oldIndex) {
       // $scope.youtube.set_video();
    });



    $http.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=" + YOUTUBE_PLAYLIST_ID + "&key=" + YOUTUBE_API_KEY)
    .success(function(e) {
        $scope.youtube.items = e.items;
        window.localStorage.setItem("YOUTUBE_FEED", JSON.stringify($scope.youtube.items));

    })
    .error(function(e) {
        $log.info(e);
    });

    $scope.youtube.get_video_url = function(id) {
        return $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + id + "/?showinfo=0&modestbranding=1");
    };

    $scope.youtube.playVideo = function(id) {
        videoService.video_id = id;
        $location.path("/video");
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

    $timeout(function() {
        $(".deezer-item").width($(".music").width() - 30);
        $(".youtube-item").width($(".music").width() - 30);
        $(".itunes-item").width($(".music").width() - 30);
    }, 2000);


    // ITUNES API

    $http.get("https://itunes.apple.com/lookup?id=" + ITUNES_USER_ID + "&entity=album")
        .success(function(e) {
            $scope.itunes.items = e.results.slice(1, e.results.length);
            window.localStorage.setItem("ITUNES_FEED", JSON.stringify($scope.itunes.items));
        }).error(function() {

        });

    $scope.itunes.getAlbum = function(album) {
        window.analytics.trackEvent('iTunes', 'Click', 'Buy Album: ' + album, 1);
    };

}]);


gotMusicApp.controller('SuccessCtrl', ["$scope", "$modalInstance", "$log", "$timeout", function ($scope, $modalInstance, $log, $timeout) {
    $timeout(function() {
        $modalInstance.close();

    }, MODAL_TIMEOUT);
}]);

gotMusicApp.controller('ErrorCtrl', ["$scope", "$modalInstance", "$log", "$timeout", function ($scope, $modalInstance, $log, $timeout) {
    $scope.close = function() {
        $modalInstance.close();
    };

    $timeout(function() {
        $modalInstance.close();    
    }, 3 * MODAL_TIMEOUT);

}]);



gotMusicApp.controller('ModalInstanceCtrl', ["$scope", "$modalInstance", "$log", "$modal", function ($scope, $modalInstance, $log, $modal) {

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
    $scope.form_url = DEMAND_FORM_URL;
    $scope.email_input = DEMAND_EMAIL_INPUT_ID;
    $scope.city_input = DEMAND_CITY_INPUT_ID;
    $scope.latitude_input = DEMAND_LATITUDE_INPUT_ID;
    $scope.longitude_input = DEMAND_LONGITUDE_INPUT_ID;

    window.success = function() {
        window.analytics.trackEvent('Demand', 'Click', 'Confirmar Pedir Show', 1);
        $scope.openSuccessModal();
        window.localStorage.setItem("DEMAND_LAST_DEMAND", new Date().getTime());
        window.localStorage.setItem("DEMAND_DEMANDED", true);
        $modalInstance.close(true);
    };


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
        var modalInstance = $modal.open({
            templateUrl: 'templates/success.html',
            controller: 'SuccessCtrl',
            size: "sm",
        });
    };


    $scope.cancel = function () {
        window.analytics.trackEvent('Demand', 'Click', 'Cancelar Pedir Show', 1);
        $modalInstance.dismiss('cancel');
    };

}]);


// Shows Screen Controller
gotMusicApp.controller("ShowsCtrl", ["$scope", "$log", "$http", "$location", "$timeout", "swipeService", "$modal", function($scope, $log, $http, $location, $timeout, swipeService, $modal) {

    // Analytics
    window.analytics.trackView('Shows Screen');

    // MODULES
    $scope.demand = {};
    $scope.songkick = {};


    // Get From Local Storage
    $scope.songkick.items = JSON.parse(window.localStorage.getItem("SONGKICK_FEED"));
    $scope.demand.demanded = window.localStorage.getItem("DEMAND_DEMANDED");
    $scope.demand.last_demand = window.localStorage.getItem("DEMAND_LAST_DEMAND");


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
    $scope.songkick.setWidth = function() {
        $(".songkick-item").width(window.innerWidth - 30);
    };

    $scope.demand.setWidth = function() {
        $(".demand-item").width(window.innerWidth - 30);
    };

    // Create Swipe Controllers
    swipeService.createSwipe("songkick", $scope.songkick, $scope);


    // DEMAND
    $scope.openModal = function() {
        window.analytics.trackEvent('Demand', 'Click', 'Pedir Show', 1);
        var modalInstance = $modal.open({
            templateUrl: 'templates/modal.html',
            controller: 'ModalInstanceCtrl',
            size: "sm"
        });

        modalInstance.result.then(function(e) {
            $scope.demand.demanded = window.localStorage.getItem("DEMAND_DEMANDED");
            $scope.demand.last_demand = window.localStorage.getItem("DEMAND_LAST_DEMAND");
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

    $scope.songkick.seeMore = function(show) {
        window.analytics.trackEvent('Songkick', 'Click', 'Saber mais sobre show: ' + show , 1);
    };

    $scope.songkick.formatDate = function(t) {
        t = new Date(t);

        alert(t);
        alert(t.getDate(););

        return t.getDate() + "/" + (t.getMonth() + 1);
    };

}]);

