angular.module('unohana').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('users', {
    url: '/users',
    views: {
      '': {
        controller: "usersCtrl",
        templateUrl: 'app/questions/questions.main.tpl.html'
      }
    }

  }).
  state('login', {
    url: '/login',
    views: {
      '': {
        controller: "usersCtrl",
        templateUrl: 'app/users/users.login.tpl.html'
      }
    }
  })
});
