'use strict';

/**
 * @ngdoc overview
 * @name feApp
 * @description
 * # feApp
 *
 * Main module of the application.
 */
angular
  .module('feApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/app/main');

    $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'views/app.html',
      controller:'MainCtrl',
      resolve: {
      }
    })
    .state('app.main', {
      url: '/main',
      templateUrl: 'views/main.html',
      controllerAs: 'main'
    })
    .state('app.about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    });


  });
