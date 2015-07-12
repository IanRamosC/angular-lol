(function() {
'use strict'

angular.module('angularLOL.service', [])
	.service('search', search);

function search ($http, $log) {
	this.getUsers = function (data) {
		var _nickname = data.nickname.toLowerCase().replace(/ /g, '');

		$http.get(data.url)
		.success(function(result) {
			if (result.hasOwnProperty(_nickname)) {
				$log.info(JSON.stringify(result[_nickname]));
			}
		})
		.error(function(data, status, headers, config){
			$log.info(status);
		});
	};
};
})();