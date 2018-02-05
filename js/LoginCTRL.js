app.controller("LoginCtrl", function($scope, $state) {

  console.log("inside Login Controller controller");
  $scope.$parent.sidebarHeaderFooter = false;

  $scope.submitted = false;


  $scope.login = function() {

    console.log("inside login function");
    console.log($scope.username + " " + $scope.password);
    if ($scope.username == undefined || $scope.password == undefined) {
      $scope.submitted = true;
    } else if ($scope.username == "shadowfax" && $scope.password == "12345") {
      $scope.$parent.sidebarHeaderFooter = true;
      console.log("sidebarAndHeader " + $scope.sidebarAndHeader);
      $state.go('/main.home', {
        reload: false
      });
    } else {
      console.log("invaid Credentials");
      $('#modal').modal({
        backdrop: 'static'
      });
      $('#modal').modal({
        keyboard: false
      });
      $('#modal').modal('show');
      return;
    }

  };
});
