var app = angular.module('crisisApp', ['ngResource', 'firebase']);
app.controller('MainCtrl', ['$scope', '$http', '$firebaseArray', function ($scope, $http, $firebaseArray) {
	var ref = new Firebase("https://crisis.firebaseio.com");
	var globalRef = ref.child("globalChat");
	$scope.messages = $firebaseArray(globalRef);
  $scope.sendMessage = function(e){
  	if ((e.keyCode === 13) && $scope.msg) {
	  	$scope.messages.$add({from: "Duck", body: $scope.msg});
	  	$scope.msg = "";
	  }
 	}
}]);

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
// Eventually toggle between Obama and Putin

// app.controller('FirebaseCtrl', ['$scope', '$firebaseArray', 
// }]);