angular.module('retsu.surveys').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('admin.surveys', {
    url: '/surveys',
    views: {
      '': {
        controller: "surveysCtrl",
        templateUrl: VIEW._modules('surveys/surveys.main')
      }
    }
  }).
  state('admin.surveys.dashboard', {
    url: '/dashboard',
    views: {
      '': {
        template: '<s-dash></s-dash>'
      },
      'surveys-total-widget@admin.surveys.dashboard': {
        templateUrl: VIEW._modules('surveys/surveys.widget.total')
      },
      'surveys-actions-widget@admin.surveys.dashboard': {
        templateUrl: VIEW._modules('surveys/surveys.widget.actions')
      },
    }
  }).
  state('admin.surveys.list', {
    url: '/list',
    template: '<s-table st-table="surveys"></s-table>'
  }).
  state('admin.surveys.add', {
    url: '/add',
    templateUrl: VIEW._modules('surveys/surveys.add')
  }).
  state('admin.surveys.build', {
    url: '/build',
    templateUrl: VIEW._modules('surveys/surveys.build')
  }).
  state('admin.surveys.view', {
    url: '/view',
    templateUrl: VIEW._modules('surveys/surveys.view')
  }).
  state('admin.surveys.start', {
    url: '/start',
    templateUrl: VIEW._modules('surveys/surveys.start')
  })
});
