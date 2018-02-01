app.controller("AmazonCtrl", function($scope, fakedataFactory) {

  console.log("inside Amazon Controller");
  $scope.fakeData = fakedataFactory.getFakeData();
});
