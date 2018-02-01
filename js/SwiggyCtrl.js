app.controller("SwiggyCtrl", function($scope, fakedataFactory) {

  console.log("inside Swiggy Controller");
  $scope.$parent.sidebarHeaderFooter = true;
  $scope.fakeData = fakedataFactory.getFakeData();

});
