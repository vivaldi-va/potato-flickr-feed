/**
 * Created by Vivaldi on 29/07/14.
 */

'use strict';

angular.module('Potato.Services')
	.factory('FlickrService', ['$http', function($http) {

		function _getStream() {
			return $http({
				url: 'http://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK',
				method: 'JSONP'
			});
		}

		return {
			"getStream": _getStream
		};

	}]);