app.controller("FlipkartCtrl", function($scope,fakedataFactory) {

  console.log("inside Flipkart controller");
  $scope.fakeData = fakedataFactory.getFakeData();

});
