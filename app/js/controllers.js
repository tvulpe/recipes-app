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

recipesControllers.controller('RecipeCreatorCtrl', ['$scope', 'Ingredients',
    function($scope, Ingredients) {
        $scope.ingredients = Ingredients.query2();
    }]);

recipesControllers.controller('RecipeCreatorCtrl', ['$scope', '$timeout', 'Ingredients',
    function($scope, $timeout, Ingredients) {
        $scope.ingredients = Ingredients.query2();

        $scope.list1 = [];

        // Limit items to be dropped in list1
        $scope.optionsList1 = {
            accept: function(dragEl) {
                if ($scope.list1.length >= 2) {
                    return false;
                } else {
                    return true;
                }
            }
        };
    }]);