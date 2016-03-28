angular.module("unohana").directive('rmValidate', ['$rootScope', '$timeout',
  function(rootScope,
    timeout) {
    return {
      restrict: 'A',
      require: "^form",
      link: function(scope, element, attrs, form) {
        var message = element.attr('data-message')
        var name = element.attr('name');
        var form_name = form.$name
        var rm_class = "{'has-error':" + form_name + "." + name +
          ".$invalid}";
        element.attr('ng-class', rm_class);
        var inline_error = $.parseHTML("<p></p>");
        $(inline_error).attr('class', 'inline-error');
        $(inline_error).attr('ng-show', form_name + "." + name +
          ".$invalid");
        $(inline_error).text(message);
        element.parent().append(inline_error);
      }
    };
  }
]);
