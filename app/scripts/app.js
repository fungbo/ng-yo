'use strict';

/**
 * @ngdoc overview
 * @name ngYoApp
 * @description
 * # ngYoApp
 *
 * Main module of the application.
 */
angular
  .module('ngYoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/pagination', {
        templateUrl: 'views/pagination.html',
        controller: 'PaginationCtrl',
      })
      .when('/modal', {
        templateUrl: 'views/modal.html'
      })
      .when('/dropdown', {
        templateUrl: 'views/dropdown.html'
      })
      .when('/btn-group', {
        templateUrl: 'views/btn-group.html'
      })
      .when('/btn-dropdown', {
        templateUrl: 'views/btn-dropdown.html'
      })
      .when('/input-group', {
        templateUrl: 'views/input-group.html'
      })
      .when('/nav', {
        templateUrl: 'views/nav.html'
      })
      .when('/nav-bar', {
        templateUrl: 'views/nav-bar.html'
      })
      .when('/breadcrumb', {
        templateUrl: 'views/breadcrumb.html'
      })
      .when('/label', {
        templateUrl: 'views/label.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
