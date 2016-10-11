var PATH = {
  _modules:'app/retsu/',
  _globals:'app/yon/'
}

var VIEW ={
  _modules:function(path){
    return PATH._modules+path+'.tpl.html'
  },
  _globals:function(path){
    return PATH._globals+path+'.tpl.html'
  }
}

angular.module("unohana", [
  'ui.router',
  'restangular',
  'smart-table',
  'textAngular',
  'angularMoment',
  'ui.bootstrap',
  'highcharts-ng',
  'slick',
  'mgo-angular-wizard',
  'permission',
  'LocalStorageModule',
  'angularValidator',
  'btford.socket-io',
  'angular-loading-bar',
  'retsu.questions',
  'retsu.users',
  'retsu.admin',
  'retsu.surveys'
]);


/**
 * @ngdoc run
 * @name Main
 * @requires $http
 * @requires $rootScope
 * @memberof ClientApp
 */
angular.module("unohana").run(['$http', '$rootScope', '$state', function($http,
  rootScope,
  state) {
  rootScope.date = new Date();
  rootScope.title = 'KE.scrow';
  rootScope.messages = [];
  rootScope.menu = [];
  rootScope.errors = [];
  rootScope.state = state;
}]);

angular.module("unohana").controller('appCtrl', ['$location', function(
  $location) {
    console.log('Hello');
}]);
