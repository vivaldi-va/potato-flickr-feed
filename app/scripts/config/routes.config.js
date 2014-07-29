/**
 * Created by Vivaldi on 29/07/14.
 */

'use strict';

angular.module('Potato.Config')
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.partial.html',
				controller: 'MainCtrl'
			})
			.when('/detail/:id', {
				templateUrl: 'views/detail.partial.html',
				controller: 'DetailCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});