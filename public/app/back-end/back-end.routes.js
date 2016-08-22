angular.module("unohana").config(function($stateProvider, $urlRouterProvider) {
  // urlRouterProvider.otherwise("/");
  $stateProvider.state('back-end', {
    url: '/back-end',
    controller: 'backendCtrl',
    views: {
      '': {
        templateUrl: 'app/back-end/back-end.main.tpl.html',
      },
      'back-end-breadcrumb@back-end': {
        templateUrl: 'app/back-end/back-end.breadcrumb.tpl.html',
      }
    }
  });

});
