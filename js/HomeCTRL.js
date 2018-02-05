app.controller("HomeCtrl", function($scope,fakedataFactory) {

  console.log("inside Home Controller controller");
  $scope.fakeData = fakedataFactory.getFakeData();
});
