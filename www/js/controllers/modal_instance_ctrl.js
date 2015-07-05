angular.module('gotMusicApp')
.controller('ModalInstanceCtrl', ["$scope", "$modalInstance", "$log", "$modal", "$sce", function ($scope, $modalInstance, $log, $modal, $sce) {
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
