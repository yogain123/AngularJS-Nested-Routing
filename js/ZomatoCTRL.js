app.controller("ZomatoCtrl", function($scope, fakedataFactory) {

  console.log("inside Zomato controller");
//  $scope.$parent.sidebarHeaderFooter = true;
  $scope.fakeData = fakedataFactory.getFakeData();

});
