app.controller("SwiggyCtrl", function($scope, $state,fakedataFactory) {

  console.log("inside Swiggy Controller");
  $scope.fakeData = fakedataFactory.getFakeData();
  
});
