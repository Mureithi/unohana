angular.module('retsu.surveys',[]).controller('surveysCtrl', ['$scope', 'Requests',
'$state',
function(scope, Requests, state) {
  scope.survey={};
  scope.sections = [
    {
      description:'Section 1',
      questions:[]
    },
    {
      description:'Section 2',
      questions:[]
    }
  ];
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
        name:'Select One'
      },
      {
        id:3,
        name:'Select Many'
      },
      {
        id:4,
        name:'Text Field'
      },
      {
        id:5,
        name:'Large Text Field'
      },
      {
        id:6,
        name:'DatePicker'
      },
      {
        id:7,
        name:'Checkbox'
      }
    ]
  }

  scope.add = function add() {
    var payload = scope.survey;
    Requests.post('surveys', payload, function(data) {
      if(data.success){
        state.go('admin.surveys.list')
        get()
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
    scope.survey = survey;
    state.go('admin.surveys.build')
  }

  scope.addQuestion = function addQuestion(section){
    var question = {
      description:"",
      option_type:"",
      options:""
    }
    section.questions.push(question)
  }

  scope.addSection = function addSection(sections){
    var section = {
      description:'Section ...',
      questions:[]
    }
    sections.push(section)
  }

  scope.build = function build(){
    var survey = scope.survey;
    survey.sections = scope.sections;
    state.go('admin.surveys.view')
  }

}
])
