(function() {

  "use strict";

  var App = angular.module("App.directives",[]);

  App.directive('inputtext', function ($timeout) {
    return {
      restrict:'E',
      replace:true,
      template:'<input type="text"/>',
      scope: {
      	
      },
      link:function (scope, element, attrs, ctrl) {
      	
      }
    }
  });

  App.directive('version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  });


}());