var App = angular.module('MainModule', []);

App.controller('MainCtrl', MainCtrl);

function MainCtrl($scope) {
	$scope.text = "Texto de teste";
	$scope.response = function () {
		alert("test");
	};
};