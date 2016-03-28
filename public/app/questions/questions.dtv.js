angular.module('unohana').directive('qTable', function() {
  return {
    controller: 'questionsCtrl',
    // transclude: true,

    templateUrl: 'app/questions/questions.table.tpl.html',
    link: function(scope, element) {
      // Add Attributes

      element.find('table').addClass(
        'table table-bordered table-condensed')
      element.find('input').addClass('form-control')
    }
  };
});

angular.module('unohana').directive('qDash', function() {
  return {
    controller: 'questionsCtrl',
    // transclude: true,

    templateUrl: 'app/questions/questions.dash.tpl.html',
    link: function(scope, element) {
      // Add Attributes


    }
  };
});
