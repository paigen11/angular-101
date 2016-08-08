var helloApp = angular.module('helloApp', []);
helloApp.controller('helloController', function($scope){

	$scope.name;

	$scope.$watch('name4', function(newValue, oldValue){
		$scope.name4Length = newValue.length;
	})

});