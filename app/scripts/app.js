'use strict';

/**
 * @ngdoc overview
 * @name potatoFlickrApp
 * @description
 * # potatoFlickrApp
 *
 * Main module of the application.
 */

// initialize app modules
angular.module('Potato.Config', []);
angular.module('Potato.Services', []);
angular.module('Potato.Controllers', []);
angular.module('Potato.Filters', []);
angular.module('Potato.Directives', []);

angular
	.module('Potato', [
		'ngRoute',
		'ngSanitize',
		'Potato.Config',
		'Potato.Services',
		'Potato.Controllers',
		'Potato.Filters',
		'Potato.Directives'
	]);

