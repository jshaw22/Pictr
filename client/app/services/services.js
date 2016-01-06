angular.module('services', [])

.factory('Pics', function ($http) {
  
    var getAll = function () {
      return $http({
        method: "GET",
        url: "/api/pics"
      }).then(function (resp) {
      return resp.data;
      });
    };
    var addOne = function (pic) {
      return $http({
        method: 'POST',
        url: "/api/pics",
        data: pic //pic object
      })
      .then(function (resp) {
        return resp;
      });
    };

    var upVote = function(pic){}

    return {
      getAll: getAll,
      addOne: addOne
    };

});