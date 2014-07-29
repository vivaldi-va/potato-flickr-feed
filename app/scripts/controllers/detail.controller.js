'use strict';

/**
 * @ngdoc function
 * @name potatoFlickrApp.controller:DetailCtrl
 * @description
 * # detail controllers
 */
angular.module('Potato.Controllers')
	.controller('DetailCtrl', ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams) {
		$scope.item = $rootScope.items[$routeParams.id];
	}]);

