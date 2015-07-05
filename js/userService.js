(function() {
'use strict'

var search = function ($http, $log) {
	this.getUsers = function (data) {
		$http.get(data.url)
			.success(function(result) {
				if (result.hasOwnProperty(data.nickname)) {
					$log.info(JSON.stringify(result[data.nickname]));
				}
			});
	};
};

angular.module('MainModule')
	.service('search', ['$http', '$log', search]);
})();