'use strict';

/* Controllers */

var recipesControllers = angular.module('recipesControllers',[]);

  recipesControllers.controller('RecipeListCtrl', ['$scope', 'Recipe',
      function($scope, Recipe) {
        $scope.recipes = Recipe.query();
      }]);
