angular.module('retsu.questions').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('admin.questions', {
    url: '/questions',
    views: {
      '': {
        controller: "questionsCtrl",
        templateUrl: VIEW._modules('questions/questions.main')
      }
    }
  }).
  state('admin.questions.dashboard', {
    url: '/dashboard',
    views: {
      '': {
        template: '<q-dash></q-dash>'
      },
      'questions-total-widget@admin.questions.dashboard': {
        templateUrl: VIEW._modules('questions/questions.widget.total')
      },
      'questions-responses-widget@admin.questions.dashboard': {
        templateUrl: VIEW._modules('questions/questions.widget.responses')
      },
      'questions-recent-widget@admin.questions.dashboard': {
        templateUrl: VIEW._modules('questions/questions.widget.recent')
      },
      'questions-actions-widget@admin.questions.dashboard': {
        templateUrl: VIEW._modules('questions/questions.widget.actions')
      },
      'questions-frequency-widget@admin.questions.dashboard': {
        templateUrl: VIEW._modules('questions/questions.graph.frequency')
      }
    }
  }).
  state('admin.questions.list', {
    url: '/list',
    template: '<q-table st-table="questions"></q-table>'
  }).
  state('admin.questions.add', {
    url: '/add',
    views:{
      '':{
        templateUrl: VIEW._modules('questions/questions.add')
      },
      'questions-total-widget@admin.questions.add': {
        templateUrl: VIEW._modules('questions/questions.widget.total')
      },
    }

  }).
  state('admin.questions.view', {
    url: '/view',
    views: {
      '': {
        templateUrl: VIEW._modules('questions/questions.view')
      },
      'questions-widget-single-responses@admin.questions.view': {
        templateUrl: VIEW._modules('questions/questions.widget.single.responses')
      },
      'questions-widget-single-recent@admin.questions.view': {
        templateUrl: VIEW._modules('questions/questions.widget.single.recent')
      },
      'questions-graph-single-frequency@admin.questions.view': {
        templateUrl: VIEW._modules('questions/questions.graph.single.frequency')
      },
      'questions-graph-single-responses@admin.questions.view': {
        templateUrl: VIEW._modules('questions/questions.graph.single.responses')
      },
      'questions-graphic-distribution@admin.questions.view': {
        templateUrl: VIEW._modules('questions/questions.graphic.distribution')
      },
      'questions-widget-single-actions@admin.questions.view': {
        templateUrl: VIEW._modules('questions/questions.widget.single.actions')
      }
    }
  })
});
