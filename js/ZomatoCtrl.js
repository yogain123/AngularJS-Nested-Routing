app.controller("ZomatoCtrl", function($scope, fakedataFactory) {

  console.log("inside Zomato controller");
  $scope.fakeData = fakedataFactory.getFakeData();

});
