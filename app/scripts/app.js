'use strict';

/**
 * @ngdoc overview
 * @name potatoFlickrApp
 * @description
 * # potatoFlickrApp
 *
 * Main module of the application.
 */

angular.module('Potato.Config', []);
angular.module('Potato.Services', []);
angular.module('Potato.Controllers', []);
angular.module('Potato.Filters', []);

angular
	.module('Potato', [
		'ngAnimate',
		'ngResource',
		'ngRoute',
		'Potato.Config',
		'Potato.Services',
		'Potato.Controllers',
		'Potato.Filters'
	]);

