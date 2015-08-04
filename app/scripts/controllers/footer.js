'use strict';

/**
 * @ngdoc function
 * @name feApp.controller:FooterCtrl
 * @description
 * # MainCtrl
 * Controller of the feApp
 */
angular.module('feApp')
  .controller('footerCtrl',footerCtrl );


  function footerCtrl($scope){

    $scope.back = function (e) {

      e.preventDefault();
			$('html, body').animate({scrollTop : 0},200);
			return false;


    }

  }
