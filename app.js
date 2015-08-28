var app = angular.module('crisisApp', ['ngResource', 'firebase']);
app.controller('MainCtrl', ['$scope', '$http', '$firebaseArray', function ($scope, $http, $firebaseArray) {
	var ref = new Firebase("https://crisis.firebaseio.com");
	$scope.messages = $firebaseArray(ref);
  $scope.sendMessage = function(e){
  	if ((e.keyCode === 13) && $scope.msg) {
	  	$scope.messages.$add({from: "Obama", body: $scope.msg});
	  	$scope.msg = "";
	  }
 	}
}]);

// Eventually toggle between Obama and Putin

// app.controller('FirebaseCtrl', ['$scope', '$firebaseArray', 
// }]);