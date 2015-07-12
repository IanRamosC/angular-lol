(function() {
'use strict'

angular.module('angularLOL.controller', [])
	.controller('getData', getData);

function getData($scope, search, $log) {
	var _apiKey = "b44b7a8c-e561-4545-a518-1d47eb608673";
	$scope.regions = [
		{ name: 'Brazil', abbrev:'br' },
		{ name: 'Europe Nordic & East', abbrev: 'eune' },
		{ name: 'Europe West', abbrev: 'euw' },
		{ name: 'Korea', abbrev: 'kr' },
		{ name: 'Latin America North', abbrev: 'lan' },
		{ name: 'Latin America South', abbrev: 'las' },
		{ name: 'North America', abbrev: 'na' },
		{ name: 'Oceania', abbrev: 'oce' },
		{ name: 'Russia', abbrev: 'ru' },
		{ name: 'Turkey', abbrev: 'tr' }
	];
	$scope.user = {
		locale: "br",
		nickname: ""
	};
	$scope.btnCall = function (user) {
		var _data = {};
		_data.url = "https://" + $scope.user.locale + ".api.pvp.net/api/lol/" + $scope.user.locale + "/v1.4/summoner/by-name/" + $scope.user.nickname + "?api_key=" + _apiKey;
		_data.nickname = $scope.user.nickname;
		search.getUsers(_data);
	};
};
})();
