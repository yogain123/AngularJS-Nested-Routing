app.controller("Box8Ctrl", function($scope,fakedataFactory) {

  console.log("inside Box8 controller");
  $scope.$parent.sidebarHeaderFooter = true;
  $scope.fakeData = fakedataFactory.getFakeData();

});
