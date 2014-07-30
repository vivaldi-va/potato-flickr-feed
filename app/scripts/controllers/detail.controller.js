'use strict';

/**
 * @ngdoc function
 * @name potatoFlickrApp.controller:DetailCtrl
 * @description
 * # detail controller
 */
angular.module('Potato.Controllers')
	.controller('DetailCtrl', ['$scope', '$rootScope', '$routeParams', '$location', '$filter', function($scope, $rootScope, $routeParams, $location, $filter) {


		// redirect to / if the items aren't loaded into scope
		if($rootScope.items) {
			$scope.item = $rootScope.items[$routeParams.id];
		} else {
			$location.path('/');
		}

		$scope.tags = $scope.item.tags.split(' ');

		// filter description to remove image from beginning
		$scope.item.description = $filter('detailDesc')($scope.item.description);

		$scope.back = function() {
			$location.path('/');
		};
	}]);

