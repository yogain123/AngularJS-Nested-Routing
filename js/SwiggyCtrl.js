app.controller("SwiggyCtrl", function($scope, fakedataFactory) {

  console.log("inside Swiggy Controller");
  $scope.fakeData = fakedataFactory.getFakeData();

});
