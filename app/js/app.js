'use strict';


// Declare app level module which depends on filters, and services
var recipesApp = angular.module('recipesApp', [
  'ngRoute',
  'recipesControllers',
  'recipesServices'
]);

recipesApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/recipe-list.html',
                controller: 'RecipeListCtrl'
            });
    }]);



