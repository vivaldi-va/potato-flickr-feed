'use strict';


angular.module('Potato.Controllers')
	.controller('MainCtrl', ['$scope', '$rootScope', '$location', 'FlickrService', function($scope, $rootScope, $location, FlickrService) {
		$scope.errors		= [];
		$rootScope.items	= [];

		FlickrService.getStream()
			.then(
				function(data) {
					$rootScope.items = data.data.items;
				},
				function(err) {
					$scope.errors.push(err);
				}
			);

		$scope.openItem = function(index) {
			$location.path('/detail/' + index);
		};

	}]);
