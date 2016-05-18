'use strict';
(function(angular) {
  var app = angular.module('geoApp', ['ng', 'ngRoute']);
  
  app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<h1>{{index.title}}</h1>'
          + '<p>{{index.description}}</p>'
          + '<p><a class="btn btn-primary btn-lg" role="button" ng-href="#/about">Learn more &raquo;</a></p>'
      })
      .when('/about', {
        template: '<h1>{{index.title}}</h1>'
          + '<p>{{index.about}}</p>'
          + '<p><a class="btn btn-primary btn-lg" role="button" ng-href="#/">Go back to Home Page</a></p>'
      });
  });
  
  app.controller('indexController', function() {
    var index = this;
    
    index.title = 'Angular Test';
    index.description = 'This is an angular test.';
    index.about = 'This is the about text for this app.';
    
    index.time = new Date();
    
    index.browserAgent = navigator.userAgent;
  });
})(angular);