angular.module('retsu.surveys',[]).controller('surveysCtrl', ['$scope', 'Requests',
  '$state',
  function(scope, Requests, state) {
    scope.responses = []
    scope.survey = {};
    scope.surveys = [];

    scope.filterOptions = ['Date', 'Tags'];
    get();
    get_options();

    function get() {
      var payload = {};
      Requests.get('surveys', payload, function(data) {
        scope.surveys = data;
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
      var payload = scope.survey;
      Requests.post('surveys', payload, function(data) {
        if(data.success){
          state.go('admin.surveys.list')
        }
      });
    }
    scope.edit = function edit() {
      var payload = scope.survey;
      Requests.put('surveys/' + payload.id, payload, function(data) {
        if(data.success){
          state.go('admin.surveys.list')
        }
      });
    }

    scope.view = function view(survey) {
      console.log(survey)
      scope.currentQuestion = survey;
      state.go('admin.surveys.view')
    }
  }
])
