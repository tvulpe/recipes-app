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

recipesControllers.controller('RecipeCreatorCtrl', ['$scope', 'Ingredients', 'IngredientsCpy',
    function($scope, Ingredients, IngredientsCpy) {
        $scope.ingredients = Ingredients.query2();
        $scope.source = IngredientsCpy.query3();
        $scope.sourceEmpty = function() {
            return $scope.source.length == 0;
        }
        $scope.modelEmpty = function() {
            return $scope.name.length == 0;
        }
    }]);