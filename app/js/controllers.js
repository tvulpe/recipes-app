'use strict';

/* Controllers */

var recipesControllers = angular.module('recipesControllers',[]);

  recipesControllers.controller('RecipeListCtrl', ['$scope', '$http',
      function($scope, $http) {
        $http.get('recipes/recipes.json').success(function(data){
            $scope.recipes = data;
        });
      }]);
