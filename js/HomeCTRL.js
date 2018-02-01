app.controller("HomeCtrl", function($scope, $state,fakedataFactory) {

  console.log("inside Home Controller controller");
  $scope.fakeData = fakedataFactory.getFakeData();
});
