app.controller("loginCtrl", function($scope, $state) {

  console.log("inside Login Controller controller");



  $scope.login = function(){
  console.log("inside login function");

  $state.go('/home', {
     reload: false
   });

  };
});
