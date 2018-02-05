app.controller("AmazonCtrl", function($scope, fakedataFactory) {

  console.log("inside Amazon Controller");
//  $scope.$parent.sidebarHeaderFooter = true;
  $scope.fakeData = fakedataFactory.getFakeData();
});
