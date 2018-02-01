app.controller("DominosCtrl", function($scope, fakedataFactory) {

  console.log("inside Dominos controller");
  $scope.fakeData = fakedataFactory.getFakeData();

});
