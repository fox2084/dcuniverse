
// Angular js
var app = angular.module("myapp", ['ngMessages']);
app.controller("signin-signup", function($scope, $window) {
	// if login success, it will forward index.html 
	$scope.login = function(index) {
		if(index.SignInForm.$valid) {
			$window.location.href = '/index.html';
		}
	}

	$scope.register = function(index) {
		if(index.signUpForm.$valid) {
			$window.location.href = '/index.html';
		}
	}
});
