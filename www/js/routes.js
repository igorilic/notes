(function() {
  'use strict';
  angular
    .module('notesApp')
    .config(routes);

  function routes($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('list', {
        url: '/list',
        templateUrl: 'templates/list.html',
        controller: 'ListController',
        controllerAs: 'vm'
      })
      .state('edit', {
        url: '/edit/:noteId',
        templateUrl: 'templates/edit.html',
        controller: 'EditController',
        controllerAs: 'vm'
      })
      .state('add', {
        url: '/add',
        templateUrl: 'templates/edit.html',
        controller: 'AddController',
        controllerAs: 'vm'
      });

      $urlRouterProvider.otherwise('/list');
  }
}());
