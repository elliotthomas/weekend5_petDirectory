console.log("IN JS");

var myApp = angular.module('myApp', [] );

myApp.controller('petController', ['$scope', '$http', function($scope, $http){
  console.log('NG');

  $scope.getPet = function(){
  console.log('in get pet');
  $http({
    method: "GET",
    url: '/pets',
  }).then (function(response){
    console.log('back from get call:', response);
    $scope.petResults = response.data;
}); //end http GET call

}; //end getAssignment

  $scope.postPet = function(){
  console.log('in postPet');
  var newPet = {
    name: $scope.name,
    animal: $scope.animal,
    age: $scope.age,
    image: $scope.image
  };//end new pet object
  console.log('new pet', newPet);
  //make http call to database to send user inputs
  $http({
    method: 'POST',
    url: '/pets',
    data: newPet
  });
$scope.getPet();
};

$scope.getPet();


}]); //end controller
