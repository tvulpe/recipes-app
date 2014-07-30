'use strict';

/* Services */

var recipesServices = angular.module('recipesServices', ['ngResource']);

recipesServices.factory('Recipe', ['resource',
    function($resource) {
        return $resource('recipes/:recipeId.json', {}, {
            query: {method: 'GET', params: {recipeId: 'recipes'}, isArray: true}
        });
    }]);