app.controller("Box8Ctrl", function($scope,fakedataFactory) {

  console.log("inside Box8 controller");
  $scope.fakeData = fakedataFactory.getFakeData();

});
