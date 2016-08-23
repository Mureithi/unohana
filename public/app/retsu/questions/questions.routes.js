angular.module('retsu.questions',[]).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('questions', {
    url: '/questions',
    views: {
      '': {
        controller: "questionsCtrl",
        templateUrl: 'app/retsu/questions/questions.main.tpl.html'
      }
    }
  }).
  state('questions.dashboard', {
    url: '/dashboard',
    views: {
      '': {
        template: '<q-dash></q-dash>'
      },
      'questions-total-widget@questions.dashboard': {
        templateUrl: 'app/retsu/questions/questions.widget.total.tpl.html'
      },
      'questions-responses-widget@questions.dashboard': {
        templateUrl: 'app/retsu/questions/questions.widget.responses.tpl.html'
      },
      'questions-recent-widget@questions.dashboard': {
        templateUrl: 'app/retsu/questions/questions.widget.recent.tpl.html'
      },
      'questions-actions-widget@questions.dashboard': {
        templateUrl: 'app/retsu/questions/questions.widget.actions.tpl.html'
      },
      'questions-frequency-widget@questions.dashboard': {
        templateUrl: 'app/retsu/questions/questions.graph.frequency.tpl.html'
      }
    }
  }).
  state('questions.list', {
    url: '/list',
    template: '<q-table st-table="questions"></q-table>'
  }).
  state('questions.add', {
    url: '/add',
    templateUrl: 'app/retsu/questions/questions.add.tpl.html'
  }).
  state('questions.view', {
    url: '/view',
    views: {
      '': {
        templateUrl: 'app/retsu/questions/questions.view.tpl.html'
      },
      'questions-widget-single-responses@questions.view': {
        templateUrl: 'app/retsu/questions/questions.widget.single.responses.tpl.html'
      },
      'questions-widget-single-recent@questions.view': {
        templateUrl: 'app/retsu/questions/questions.widget.single.recent.tpl.html'
      },
      'questions-graph-single-frequency@questions.view': {
        templateUrl: 'app/retsu/questions/questions.graph.single.frequency.tpl.html'
      },
      'questions-graph-single-responses@questions.view': {
        templateUrl: 'app/retsu/questions/questions.graph.single.responses.tpl.html'
      },
      'questions-graphic-distribution@questions.view': {
        templateUrl: 'app/retsu/questions/questions.graphic.distribution.tpl.html'
      },
      'questions-widget-single-actions@questions.view': {
        templateUrl: 'app/retsu/questions/questions.widget.single.actions.tpl.html'
      }
    }

  })
});
