app.controller("DominosCtrl", function($scope, $state, fakedataFactory) {

  console.log("inside Dominos controller");
  $scope.fakeData = fakedataFactory.getFakeData();

});
