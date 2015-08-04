angular.module('feApp')
.directive("scroll",scroll);

function scroll($window) {
  return function(scope, element, attrs) {

    angular.element($window).bind("scroll", function() {


      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn();
      } else {
        $('.back-to-top').fadeOut();
      }




    });
  };
}
