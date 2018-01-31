app.controller("LoginCtrl", function($scope, $state) {

  console.log("inside Login Controller controller");

  $scope.headerCheck = false;



  $scope.login = function(){
  console.log("inside login function");

  $state.go('/home', {
     reload: false
   });

  };
});
