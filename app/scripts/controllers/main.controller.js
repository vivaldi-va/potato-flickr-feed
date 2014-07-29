'use strict';


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
