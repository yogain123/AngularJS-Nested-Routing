var app = angular.module("myApp", ['ui.router']);
app.config(function($urlRouterProvider, $stateProvider) {

  console.log("inside config");
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('/home', {
      url: "/home",
      params: {},
      templateUrl: "html/home.html",
      controller: "homeCtrl"
    })
    .state('/', {
      url: "/",
      params: {},
      templateUrl: "html/login.html",
      controller: "loginCtrl"
    });
});
