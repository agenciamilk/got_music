angular.module('gotMusicApp')
  .directive('navigationTabs', function() {
    return {
      templateUrl: 'directives/navigation-tabs/navigation-tabs.html',
      controller: 'NavigationCtrl'
    };
  })

  .directive('titleBar', function() {
    return {
      templateUrl: 'directives/title-bar/title-bar-new.html',
    };
  })

  .directive('swiper', ['$timeout', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.css({width: window.innerWidth - ITEM_MARGIN});

        function init() {
          var params = {
            spaceBetween: ITEM_MARGIN / 2
          };

          function adjustWrapperHeight() {
            var currentSlide = $(this.slides[this.activeIndex]);
            var newHeight = $('.content', currentSlide).outerHeight() +
                            $('.title-wrapper', currentSlide).outerHeight();

            $(this.wrapper[0]).height(newHeight);
          }

          params.onInit = function (swiper) {
            adjustWrapperHeight.apply(swiper);

            // TODO: Implement a smarter content load detection
            setInterval(function(){ adjustWrapperHeight.apply(swiper); }, 1000);
          };

          params.onSlideChangeStart = function (swiper) {
            adjustWrapperHeight.apply(swiper);
          };

          $timeout(function(){
            if (attrs.onSlideChangeEnd) {
              params.onSlideChangeEnd = scope[attrs.onSlideChangeEnd];
            }

            new Swiper(element, params);
          });
        }

        if (attrs.swiperInitOn) {
          if (scope[attrs.swiperInitOn]) { // Event already broadcasted but directive was not ready yet
            init();
          } else {
            scope.$on(attrs.swiperInitOn, init);
          }
        }
      }
    };
  }]);
