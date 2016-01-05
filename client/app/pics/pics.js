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

  /* LIKE controller logic*/

  $scope.heart = 'glyphicon glyphicon-heart-empty'

  $scope.toggleLike = function () {
    if($scope.heart === 'glyphicon glyphicon-heart-empty'){
      $scope.heart = 'glyphicon glyphicon-heart';
    } else {
      $scope.heart = 'glyphicon glyphicon-heart-empty'
    }
  }


  $scope.getAll = function(){
    Pics.getAll().then(function(res){
      $scope.pics = res;
      console.log(res);
    })
  }
$scope.getAll();
})

