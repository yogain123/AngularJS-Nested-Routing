app.controller("AmazonCtrl", function($scope, $state,fakedataFactory) {

  console.log("inside Amazon Controller");
  $scope.fakeData = fakedataFactory.getFakeData();
});
