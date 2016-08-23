angular.module("unohana", [
  'ui.router',
  'restangular',
  'smart-table',
  'chart.js',
  'textAngular',
  'angularMoment',
  'ui.bootstrap',
  'highcharts-ng',
  'slick',
  'mgo-angular-wizard',
  'permission',
  'LocalStorageModule',
  'angularValidator',
  'btford.socket-io',
  'angular-loading-bar',
  'retsu.questions',
  'retsu.users'
]);


/**
 * @ngdoc run
 * @name Main
 * @requires $http
 * @requires $rootScope
 * @memberof ClientApp
 */
angular.module("unohana").run(['$http', '$rootScope', '$state', function($http,
  rootScope,
  state) {
  rootScope.date = new Date();
  rootScope.title = 'KE.scrow';
  rootScope.messages = [];
  rootScope.menu = [];
  rootScope.errors = [];
  rootScope.state = state;
}]);

angular.module("unohana").controller('appCtrl', ['$location', function(
  $location) {
    console.log('Hello');
}]);

/**
 * @ngdoc directive
 * @name isActiveNav
 * @param $location
 * @memberof ClientApp
 */
angular.module("unohana").directive('isActiveNav', ['$location', function(
  $location) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      scope.location = $location;
      scope.$watch('location.path()', function(currentPath) {
        if ('#' + currentPath == element[0].hash) {
          element.parent().addClass('active');
        } else {
          element.parent().removeClass('active');
        }
      });
    }
  };
}]);

/**
 * @ngdoc directive
 * @name isActiveLink
 * @param $location
 * @memberof ClientApp
 */
angular.module("unohana").directive('isActiveLink', ['$location', function(
  $location) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      scope.location = $location;
      scope.$watch('location.path()', function(currentPath) {
        if ('#' + currentPath == element[0].hash) {
          element.addClass('active');
        } else {
          element.removeClass('active');
        }
      });
    }
  };
}]);

/**
 * @ngdoc config
 * @name mainRouteConfig
 * @memberof ClientApp
 * @param $stateProvider {service}
 * @param $urlRouterProvider {service}
 */
 angular.module("unohana").config(function($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise("/login");
 });

angular.module('retsu.admin',[]).controller('adminCtrl', ['$scope', 'Requests',
  '$state',
  function(scope, Requests, state) {
    console.log('Yo')
  }
])

angular.module("retsu.admin",[]).config(function($stateProvider, $urlRouterProvider) {
  // urlRouterProvider.otherwise("/");
});

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
        scope.question = data.success.data;
      });
    }

    scope.login = function login() {
      var payload = scope.user;
      Requests.post('auth', payload, function(data) {
        console.log(data)
        if(data.success){
          scope.user = data.user;
          state.go('admin.dashboard')
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

angular.module('retsu.users').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('users', {
    url: '/users',
    views: {
      '': {
        templateUrl: 'app/questions/questions.main.tpl.html'
      }
    }

  }).
  state('login', {
    url: '/login',
    views: {
      '': {
        controller: 'usersCtrl',
        templateUrl: 'app/retsu/users/users.login.tpl.html'
      }
    }
  })
});

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


angular.module('retsu.questions',[]).directive('qTable', function() {
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

angular.module('retsu.questions').directive('qDash', function() {
  return {
    controller: 'questionsCtrl',
    // transclude: true,

    templateUrl: 'app/questions/questions.dash.tpl.html',
    link: function(scope, element) {
      // Add Attributes


    }
  };
});


angular.module('retsu.questions',[]).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('questions', {
    url: '/questions',
    views: {
      '': {
        controller: "questionsCtrl",
        templateUrl: 'app/retsu/questions/questions.main.tpl.html'
      }
    }
  }).
  state('questions.dashboard', {
    url: '/dashboard',
    views: {
      '': {
        template: '<q-dash></q-dash>'
      },
      'questions-total-widget@questions.dashboard': {
        templateUrl: 'app/retsu/questions/questions.widget.total.tpl.html'
      },
      'questions-responses-widget@questions.dashboard': {
        templateUrl: 'app/retsu/questions/questions.widget.responses.tpl.html'
      },
      'questions-recent-widget@questions.dashboard': {
        templateUrl: 'app/retsu/questions/questions.widget.recent.tpl.html'
      },
      'questions-actions-widget@questions.dashboard': {
        templateUrl: 'app/retsu/questions/questions.widget.actions.tpl.html'
      },
      'questions-frequency-widget@questions.dashboard': {
        templateUrl: 'app/retsu/questions/questions.graph.frequency.tpl.html'
      }
    }
  }).
  state('questions.list', {
    url: '/list',
    template: '<q-table st-table="questions"></q-table>'
  }).
  state('questions.add', {
    url: '/add',
    templateUrl: 'app/retsu/questions/questions.add.tpl.html'
  }).
  state('questions.view', {
    url: '/view',
    views: {
      '': {
        templateUrl: 'app/retsu/questions/questions.view.tpl.html'
      },
      'questions-widget-single-responses@questions.view': {
        templateUrl: 'app/retsu/questions/questions.widget.single.responses.tpl.html'
      },
      'questions-widget-single-recent@questions.view': {
        templateUrl: 'app/retsu/questions/questions.widget.single.recent.tpl.html'
      },
      'questions-graph-single-frequency@questions.view': {
        templateUrl: 'app/retsu/questions/questions.graph.single.frequency.tpl.html'
      },
      'questions-graph-single-responses@questions.view': {
        templateUrl: 'app/retsu/questions/questions.graph.single.responses.tpl.html'
      },
      'questions-graphic-distribution@questions.view': {
        templateUrl: 'app/retsu/questions/questions.graphic.distribution.tpl.html'
      },
      'questions-widget-single-actions@questions.view': {
        templateUrl: 'app/retsu/questions/questions.widget.single.actions.tpl.html'
      }
    }

  })
});

angular.module('unohana').factory('ArrayHelper', function() {

  var ArrayHelper = {};

  ArrayHelper.clean = function clean(data) {
    var defaults = [
      'createdAt', 'updatedAt', 'created_at', 'updated_at'
    ];

    angular.forEach(data, function(value, key) {
      angular.forEach(value, function(v, k) {
        value.prop(k);
      })
    });
    return data;
  }

  return ArrayHelper;
});

angular.module("unohana").factory('errorInterceptor', ['$q', '$log',
  '$rootScope', '$timeout',
  '$injector',
  function(q, log, rootScope, timeout, injector) {
    rootScope.error = null;
    return {
      // optional method
      'requestError': function(rejection) {
        // do something on error
        if (canRecover(rejection)) {
          return responseOrNewPromise
        }
        return $q.reject(rejection);
      },
      // optional method
      'response': function(response) {
        if (response.data.success) {
          var success = {
            "icon": "ion-check",
            "type": "success",
            "code": response.status,
            "msg": response.statusText,
            "message": response.data.success.message
          };
          rootScope.success = success;
          console.log(rootScope.success);
          rootScope.showSuccess = true;
          timeout(function() {
            rootScope.showSuccess = false;
          }, 2000);
        }
        return response;
      },


      // optional method
      'responseError': function(response) {
        console.log(response);
        if (response.data) {
          var error = {
            "icon": "ion-android-alert",
            "type": "danger",
            "code": response.status,
            "msg": response.statusText,
            "message": response.data.error.message
          };
          rootScope.error = error;
          rootScope.showError = true;
          timeout(function() {
            rootScope.showError = false;
          }, 3000);

          // do something on error
          var stateService = injector.get('$state');
          if (response.status == 401) {
            timeout(function() {
              stateService.go('login');
            }, 3000)
          }
        }
        return q.reject(response);
      }
    }
  }
]);

angular.module("unohana").config(['$httpProvider', function(httpProvider) {
  httpProvider.interceptors.push('errorInterceptor');
}]);

angular.module('unohana').factory('Requests', ['$http', '$rootScope', function(
  http, rootScope) {
  var Requests = {};
  Requests.data = [];
  Requests.post_data = []
  var base_url = "api/";
  var url = null;

  /**
   * Post Data
   * @param  {[type]} resource [description]
   * @param  {[type]} object   [description]
   * @return {[type]}          [description]
   */
  Requests.post = function post(resource, object, callBack) {
    var request_url = '';
    if (object.top_level) {
      request_url = resource;
    } else {
      request_url = base_url + resource;
    }
    var req = {
      method: 'POST',
      url: request_url,
      data: object
    };

    /**
     * Check if Post Data exists
     * @param  {[type]} object [description]
     * @return {[type]}        [description]
     */

    if (object) {
      http(req)
        .success(function(data) {
          //this is the key
          callBack(data);
        })
        .error(function(data, response) {
          console.log(response + " " + data);
        });;
    }
  }

  /**
   * @description Put Data
   * @param resource
   * @param object
   * @param callBack
   */
  Requests.put = function put(resource, object, callBack) {

    var req = {
      method: 'PUT',
      url: base_url + resource,
      data: object
    };

    /**
     * Check if Post Data exists
     * @param  {[type]} object [description]
     * @return {[type]}        [description]
     */
    if (object) {
      http(req)
        .success(function(data) {
          //this is the key
          callBack(data);
        })
        .error(function(data, response) {
          console.log(response + " " + data);
        });;
    }
  }

  Requests.destroy = function destroy(resource, object, callBack) {

    var req = {
      method: 'DELETE',
      url: base_url + resource,
      data: object
    };

    /**
     * Check if Post Data exists
     * @param  {[type]} object [description]
     * @return {[type]}        [description]
     */
    if (object) {
      http(req)
        .success(function(data) {
          //this is the key
          callBack(data);
        })
        .error(function(data, response) {
          console.log(response + " " + data);
        });;
    }
  }


  /**
   * [get description]
   * @return {[type]} [description]
   */
  Requests.get = function get(resource, object, callBack) {
    var req;
    var request_url = '';
    if (object.top_level) {
      request_url = resource;
      delete(object.top_level);
    } else {
      request_url = base_url + resource;
    }
    req = {
      method: 'GET',
      url: request_url,
      headers: {
        'Content-Type': 'application/json'
      },
      params: object
    };

    http(req)
      .success(function(data) {
        //this is the key
        callBack(data);
      })
      .error(function(data, response) {
        console.log(response + " " + data);
      });;
  }
  return Requests;
}])
