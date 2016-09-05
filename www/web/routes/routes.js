'use strict';
(function () {
  angular.module('colorGame').config([
    "$stateProvider",
    "$urlRouterProvider",
    function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('menu', {
          url: '/menu',
          views: {
            "": {
              controller : 'colorGame.features.menuController',
              templateUrl: 'web/features/menu/menu-tpl.html'
            }
          },
          resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load([
                'commonServices',
                'colorGame.features.menuController'
              ]);
            }]
          }
        })
        .state('home', {
          url: '/home',
          params : {levelObj : null},
          views: {
            "": {
              controller : 'colorGame.features.homeController',
              templateUrl: 'web/features/home/home-tpl.html'
            }
          },
          resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load([
                'commonServices',
                'colorGame.features.homeController'
              ]);
            }]
          }
        })
        .state('settings', {
          url: '/settings',
          views: {
            "": {
              controller : 'colorGame.features.settingsController',
              templateUrl: 'web/features/settings/settings-tpl.html'
            }
          },
          resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load([
                'colorGame.features.settingsController'
              ]);
            }]
          }
        });
      $urlRouterProvider.when('','/menu');
      //$locationProvider.html5Mode(true);
      //$urlRouterProvider.otherwise('/home');
    }
  ]);
})();
