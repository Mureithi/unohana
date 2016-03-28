angular.module("unohana").directive('pushMenu', ['$rootScope', '$timeout',
  function(rootScope,
    timeout) {
    return {
      restrict: 'A',
      link: function(scope, element) {
        init();
        var main = $('#main');
        $('.menu-btn').click(function() {
          toggle();
        })

        function init() {
          element.addClass('menu');
          hide();
        }

        function show() {
          element.removeClass('menu-hidden');
          $('#main').addClass('pushed');
          $('#main').css({
            'left': 200
          });

          $('#main').append('<div class="overlay"></div>')
          var overlay = $('#main.pushed .overlay');
          overlay.click(function() {
            hide();
          })
        }

        function hide() {
          element.addClass('menu-hidden');
          $('#main').css({
            'left': 0
          });
          $('#main').removeClass('pushed');
          $('.overlay').remove();
        }

        function toggle() {
          if (element.hasClass('menu-hidden')) {
            show();
          } else {
            hide();
          }
        }
        rootScope.$watch('parent', function() {
          hide();
        })
      }
    };
  }
]);
