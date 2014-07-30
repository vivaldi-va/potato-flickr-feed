/**
 * Created by Vivaldi on 30/07/14.
 */


angular.module('Potato.Filters')
	.filter('detailDesc', function() {
		return function(string) {

			return string.replace(/<p>.+<\/p>(.+)/, '$1');

		}
	});