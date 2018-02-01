app.controller("FlipkartCtrl", function($scope,fakedataFactory) {

  console.log("inside Flipkart controller");
  $scope.$parent.sidebarHeaderFooter = true;
  $scope.fakeData = fakedataFactory.getFakeData();

});
