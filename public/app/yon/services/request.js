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
