'use strict';

/**
 * @ngdoc function
 * @name potatoFlickrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the potatoFlickrApp
 */
angular.module('Potato.Controllers')
	.controller('MainCtrl', ['$scope', 'FlickrService', function($scope, FlickrService) {
		$scope.errors	= [];
		$scope.items	= [];

		FlickrService.getStream()
			.then(
				function(data) {
					$scope.items = data.data.items;
				},
				function(err) {
					$scope.errors.push(err);
				}
			);

	}]);
