var gotMusicApp = angular.module('gotMusicApp', ['ngRoute', 'ui.bootstrap']);

gotMusicApp.run(function($rootScope) {
    $rootScope.trackView = function (view) {
        // TODO: Save trackView in a local variable while analytics not available
        if (window.analytics) {
            window.analytics.trackView(view);
        }
    };
});

gotMusicApp.service("videoService", function() {
  this.video_id = '';
  this.video_url = '';
});

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

        // Google Analytics
        window.analytics.startTrackerWithId('UA-71794890-2');

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
}

function gamethrive_register(platform, key, state) {
    $.post('https://gamethrive.com/api/v1/players', {app_id: GAMETHRIVE_APP_ID, device_type: (IOS ? 0 : (ANDROID ? 1 : 5)), identifier: key, tags: {"state" : state}}, function (data, status) {
        if (data.success) {
            window.localStorage.setItem('PUSH_NOTIFICATION_REGISTERED', true);
            window.localStorage.setItem('PUSH_NOTIFICATION_REGID', key);
        } else {
            window.localStorage.setItem('PUSH_NOTIFICATION_REGISTERED', false);
        }
    });
}

function showForegroundNotification() {
    var msg = 'Nova mensagem de ' + ARTIST_NAME;
    $('#notification-text').text(msg);
    $('#notification').animate({top: '0px'}, 1000);
}

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

// Handle Open From Url
function handleOpenURL (url) {
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
