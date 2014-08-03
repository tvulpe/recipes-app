'use strict';


// Declare app level module which depends on filters, and services
var recipesApp = angular.module('recipesApp', [
  'ngRoute',
  'ngDragDrop',
  'recipesControllers',
  'recipesServices',
  'recipesDirectives'
]);

recipesApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/recipe-list.html',
                controller: 'RecipeListCtrl'
            }).
            when('/recipe-creator', {
                templateUrl: 'partials/recipe-creator.html',
                controller: 'RecipeCreatorCtrl'
            }).
            otherwise({
               redirectTo: '/'
            });
    }]);



