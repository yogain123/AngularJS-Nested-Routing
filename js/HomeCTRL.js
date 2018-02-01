app.controller("HomeCtrl", function($scope,fakedataFactory) {

  console.log("inside Home Controller controller");
  $scope.$parent.sidebarHeaderFooter = true;
  $scope.fakeData = fakedataFactory.getFakeData();
});
