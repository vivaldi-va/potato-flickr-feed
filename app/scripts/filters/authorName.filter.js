/**
 * Created by Vivaldi on 29/07/14.
 */

'use strict';
angular.module('Potato.Filters')
	.filter('authorName', function() {
		return function(authorString) {
			return authorString.replace(/.+ \((.+)\)/, "$1");
		};
	});