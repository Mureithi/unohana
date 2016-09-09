angular.module('retsu.users').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('users', {
    url: '/users',
    views: {
      '': {
        templateUrl: 'app/questions/questions.main.tpl.html'
      }
    }

  }).
  state('login', {
    url: '/login',
    views: {
      '': {
        controller: 'usersCtrl',
        templateUrl: 'app/retsu/users/users.login.tpl.html'
      }
    }
  })
});
