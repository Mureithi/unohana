/**
 * @ngdoc config
 * @name mainRouteConfig
 * @memberof ClientApp
 * @param $stateProvider {service}
 * @param $urlRouterProvider {service}
 */
 angular.module("unohana").config(function($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise("/login");
 });
