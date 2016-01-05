
angular.module('submit', [])

.controller('SubmitController', function ($scope, $location, Pics) {
	$scope.clicked = function(title, description, url, category){
		$scope.hideUpload = false;
		Pics.addOne({
			title: title,
			description: description, 
			url: url,
			category: category
		})
		.then(function(){
			$location.path('/pics')
		})
	}
})