angular.module('retsu.surveys').directive('sTable', function() {
  return {
    controller: 'surveysCtrl',
    // transclude: true,

    templateUrl: VIEW._modules('surveys/surveys.table'),
    link: function(scope, element) {
      // Add Attributes

      element.find('table').addClass(
        'table table-bordered table-condensed')
      element.find('input').addClass('form-control')
    }
  };
});

angular.module('retsu.surveys').directive('sDash', function() {
  return {
    controller: 'surveysCtrl',
    // transclude: true,

    templateUrl: VIEW._modules('surveys/surveys.dash'),
    link: function(scope, element) {
      // Add Attributes


    }
  };
});
