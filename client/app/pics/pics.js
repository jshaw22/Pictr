angular.module('pics', [])
.controller('PicsController', function ($scope, Pics){
  // var initializeAll = function() {
  //   Pics.getAll()
  //   .then(function (pics){
  //     $scope.data.pics = pics;
  //   })
  //   .catch(function (error){
  //     console.log("There was an error fetching all" + error)
  //   });
  // }
  // initializeAll();
  $scope.categories = ['All', 'Architecture', 'Animals & Pets', 'Landscape', 'Funny', 'People', 'Pictures of Wayne']

  $scope.getAll = function(){
    Pics.getAll().then(function(res){
      $scope.pics = res;
      console.log(res);
    })
  }
$scope.getAll();
})
