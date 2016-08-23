angular.module("unohana").config(function($stateProvider, $urlRouterProvider) {
  // urlRouterProvider.otherwise("/");
  $stateProvider.state('admin', {
    url: '/admin',
    views: {
      '': {
        controller: 'adminCtrl',
        templateUrl: 'app/admin/admin.main.tpl.html',
      },
      'admin.breadcrumb@admin': {
        templateUrl: 'app/admin/admin.breadcrumb.tpl.html',
      }
    }
  })
  .state('admin.dashboard', {
    url: '/dashboard',
    views: {
      '': {
        controller: 'dashboardCtrl',
        templateUrl: 'app/admin/admin.dashboard.tpl.html',
      }
    }
  });
});
