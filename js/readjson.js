function getJsonData($scope, $http)
{
  $http({method: 'GET', url: 'data/linksdb.json'}).success(function(data){
    $scope.categs = data; // response data 
  });
}