 /*function AppCtrl($scop){
 	console.log('hello from controllers');
	
	person1 = {
		name: 'Tim',
		email:'time@gmail',
		number:'999-999'		
	};
	
	
	person2 = { 
		name: 'Bruno',
		email:'Bruno@gmail',
		number:'888-999'		
	};
	
	person3 = { 
		name: 'Jon',
		email:'jon@gmail',
		number:'333-999'		
	};
	var contactLint = [person1, person2, person3];
	$scop = contactLint;
 }*/

var myApp = angular.module('myApp',[]);

myApp.controller('AppCtrl', ['$scope', function($scope) {
  //$scope.test = "Varad";
	//console.log("I am running");
	
	person1 = {
		name: 'Tim',
		email:'time@gmail',
		number:'999-999'		
	};
	
	
	person2 = { 
		name: 'Bruno',
		email:'Bruno@gmail',
		number:'888-999'		
	};
	
	person3 = { 
		name: 'Jon',
		email:'jon@gmail',
		number:'333-999'		
	};
	var contactLint = [person1, person2, person3];
	$scope.contactList = contactLint;
//	console.log($scope.contact);
}]);
