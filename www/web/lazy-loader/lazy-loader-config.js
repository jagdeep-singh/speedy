'use strict';
(function () {
  angular.module('colorGame').config([
    "$ocLazyLoadProvider",
    function ($ocLazyLoadProvider) {
      $ocLazyLoadProvider.config({
        debug : false,
        event : false,
        modules : [
          // Controller
          {
            name: 'colorGame.features.homeController',
            files: ['web/features/home/home-controller.js']
          },
          {
            name: 'colorGame.features.settingsController',
            files: ['web/features/settings/settings-controller.js']
          },
          {
            name: 'colorGame.features.menuController',
            files: ['web/features/menu/menu-controller.js']
          },
          // Directive
          {
            name: 'box',
            files: ['web/directives/box.js']
          },
          //  Service
          {
            name : 'commonServices',
            files : ['web/services/common-services.js']
          }
        ]
      });
    }
  ]);
})();
