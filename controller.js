var app = angular.module("userProfiles");

app.controller("MainController", function($scope, service){
	$scope.users = service.getUsers();
	
})