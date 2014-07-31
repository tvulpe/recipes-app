'use strict';

/* Controllers */

var recipesControllers = angular.module('recipesControllers',[]);

recipesControllers.controller('RecipeListCtrl', ['$scope', 'Recipe',
      function($scope, Recipe) {
        $scope.recipes = Recipe.query();

          $scope.categoryIncludes = [];

          $scope.includeCategory = function(category) {
              var i = $.inArray(category, $scope.categoryIncludes);
              if (i > -1) {
                  $scope.categoryIncludes.splice(i, 1);
              } else {
                  $scope.categoryIncludes.push(category);
              }
          }

          $scope.categoryFilter = function(recipes) {
              if ($scope.categoryIncludes.length > 0) {
                  if ($.inArray(recipes.category, $scope.categoryIncludes) < 0)
                      return;
              }

              return recipes;
          }
      }]);

recipesControllers.controller('RecipeDetailCtrl', ['$scope', '$routeParams', 'Recipe',
    function($scope, $routeParams, Recipe){
        $scope.recipes = Recipe.get({recipeId: $routeParams.recipeId}, function(recipe){
        });
    }
]);