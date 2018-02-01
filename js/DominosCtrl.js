app.controller("DominosCtrl", function($scope, fakedataFactory) {

  console.log("inside Dominos controller");
  $scope.$parent.sidebarHeaderFooter = true;
  $scope.fakeData = fakedataFactory.getFakeData();

});
