angular.module('AnkFilters',['ngFilter']);

angular.module('AnkFilters').controller('ankFilterCtrl',[
	'$scope',
	function($scope){
		$scope.text = "this is an ellipses filter";
}]);