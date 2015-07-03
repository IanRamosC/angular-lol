(function() {

	angular
		.module('MainModule')
		.controller('MainCtrl', MainCtrl);

	function MainCtrl ($scope) {
		$scope.btnName = "Pesquisar";
		$scope.btnCall = function () {
			alert("alert");
		}
	}

})();
