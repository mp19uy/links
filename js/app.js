var app = angular.module('links', []);

app.controller("MainCtrl", ['$scope','$http', function($scope, $http)
	{    
		$http.get('data/linksdb.json').success(function(data){
			$scope.categs = data;
		});
	}
]);