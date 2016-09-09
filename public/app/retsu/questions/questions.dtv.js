angular.module('retsu.questions').directive('qTable', function() {
  return {
    // transclude: true,

    templateUrl: VIEW._modules('questions/questions.table'),
    link: function(scope, element) {
      // Add Attributes

      element.find('table').addClass(
        'table table-bordered table-condensed')
      element.find('input').addClass('form-control')
    }
  };
});

angular.module('retsu.questions').directive('qDash', function() {
  return {
    // transclude: true,

    templateUrl: VIEW._modules('questions/questions.dash'),
    link: function(scope, element) {
      // Add Attributes


    }
  };
});
