angular.module('retsu.questions',[]).controller('questionsCtrl', ['$scope', 'Requests',
  '$state',
  function(scope, Requests, state) {
    console.log('Yo');
    scope.responses = []
    scope.question = {};
    scope.questions = [];
    scope.currentQuestion = {}

    scope.filterOptions = ['Date', 'Tags'];
    get();

    function get() {
      var payload = {};
      Requests.get('questions', payload, function(data) {
        scope.questions = data.success.data;
      });
    }

    scope.add = function add() {
      var payload = scope.question;
      Requests.post('questions', payload, function(data) {
        scope.question = data.success.data;
      });
    }
    scope.edit = function edit() {
      var payload = scope.question;
      Requests.put('questions/' + payload.id, payload, function(data) {
        scope.question = data.success.data;
      });
    }

    scope.view = function view(question) {
      scope.currentQuestion = question;
      state.go('admin.questions.view')
    }
  }
])
