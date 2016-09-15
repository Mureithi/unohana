angular.module('retsu.admin').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('admin', {
    url: '/admin',
    views: {
      '': {
        templateUrl: VIEW._modules('admin/admin.main')
      },
      'admin.header@admin':{
        templateUrl: VIEW._modules('admin/admin.header')
      },
      'admin.sidebar@admin':{
        templateUrl: VIEW._modules('admin/admin.sidebar')
      }
    }
  }).
  state('admin.dashboard', {
    url: '/dashboard',
    views: {
      '': {
        controller: 'adminCtrl',
        templateUrl: VIEW._modules('admin/admin.dashboard')
      }
    }
  })
});
