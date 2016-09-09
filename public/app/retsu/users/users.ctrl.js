angular.module('retsu.users',[]).controller('usersCtrl', ['$scope', 'Requests',
  '$state',
  function(scope, Requests, state) {
    scope.user = {};

    scope.filterOptions = ['Date', 'Tags'];

    function get() {
      var payload = {};
      Requests.get('questions', payload, function(data) {
        scope.questions = data.success.data;
      });
    }

    scope.add = function add() {
      var payload = scope.question;
      Requests.post('questions', payload, function(data) {
        if(data.success){
          state.go('admin.questions.list')
        }
      });
    }

    scope.login = function login() {
      var payload = scope.user;
      Requests.post('auth', payload, function(data) {
        if(data.success){
          scope.user = data.user;
          state.go('admin.questions.dashboard')
        }

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
      state.go('questions.view')
    }
  }
])
