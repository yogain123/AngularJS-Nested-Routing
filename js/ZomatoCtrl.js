app.controller("ZomatoCtrl", function($scope, $state,fakedataFactory) {

  console.log("inside Zomato controller");
  $scope.fakeData = fakedataFactory.getFakeData();

});
