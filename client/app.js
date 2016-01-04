//app.js
angular.module('picApp', [])

.controller('PictureController', function($scope, $location){

  $scope.data = {};

  var initializeAll = function() {
    Pics.getAll()
    .then(function (pics){
      $scope.data.pics = pics;
    })
    .catch(function (error){
      console.log("There was an error fetching all" + error)
    });
  }
  initializeAll();

  $scope.categories = ["Landscape", "Architecture", "Animals and Pets", "People", "Funny"];

  // takes you to the submit page. If time, refactor to take advantage
  // of backend served pages  
  $scope.submitPage = function(){
  	$location.url('/submit.html')
  }

  $scope.submitContent = function () {
  	alert("Submitted");
  	console.log($scope.pictures.title)
  	$scope.pictures.push(
  		{
  			title: $scope.title,
  			url: $scope.url,
        description: $scope.description,
  			category: $scope.category,
  			votes: 0
  		})
  }
}).factory("Pics", function($http){
  var getAll = function () {
    return $http({
      method: "GET",
      url: 'api/links'
    })
    .then(function (resp){ 
      return res.data
    });
  }

  var addOne = function (pic){
    return $http({
      method: 'POST', 
      url: 'api/links',
      data: pic
    });
  }
})