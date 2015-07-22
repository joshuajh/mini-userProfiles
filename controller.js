angular.module("userProfiles").controller("MainController", function($scope, service){
	$scope.users = service.getUsers();
	
});
