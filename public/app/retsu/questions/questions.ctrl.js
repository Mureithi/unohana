angular.module('retsu.questions',[]).controller('questionsCtrl', ['$scope', 'Requests',
  '$state',
  function(scope, Requests, state) {
    scope.responses = []
    scope.question = {};
    scope.questions = [];
    scope.currentQuestion = {"xwcwcwc":"cwcw"};

    scope.filterOptions = ['Date', 'Tags'];
    get();
    get_options();

    function get() {
      var payload = {};
      Requests.get('questions', payload, function(data) {
        scope.questions = data;
      });
    }

    function get_options(){
      scope.options =[
        {
          id:1,
          name:'Radio'
        },
        {
          id:2,
          name:'Select'
        },
        {
          id:3,
          name:'Text Field'
        },
        {
          id:4,
          name:'Large Text Field'
        },
        {
          id:5,
          name:'DatePicker'
        }
      ]
    }

    scope.add = function add() {
      var payload = scope.question;
      Requests.post('questions', payload, function(data) {
        if(data.success){
          state.go('admin.questions.list')
        }
      });
    }
    scope.edit = function edit() {
      var payload = scope.question;
      Requests.put('questions/' + payload.id, payload, function(data) {
        if(data.success){
          state.go('admin.questions.list')
        }
      });
    }

    scope.view = function view(question) {
      console.log(question)
      scope.currentQuestion = question;
      state.go('admin.questions.view')
    }
  }
])
