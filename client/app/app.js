angular.module('picApp', ['services', 'pics', 'submit', 'ngRoute'])
.config(function ($routeProvider){
  $routeProvider
  .when('/pics', {
    templateUrl: 'app/pics/pics.html',
    controller: 'PicsController'
  })
  .when('/submit', {
    templateUrl: 'app/submit/submit.html',
    controller: "SubmitController"
  });
})
.controller('MainController', function($scope, $location){

  $scope.backToHome = function(){
    $location.path('/pics');
    $scope.hideUpload = false;

  }
  $scope.clicked = function () {
    $location.path('/submit')
    $scope.hideUpload = true;
  }
})