var app = angular.module("myApp", ['ui.router']);
app.config(function($urlRouterProvider, $stateProvider) {

  console.log("inside config");
  $urlRouterProvider.otherwise('/');
  $stateProvider
   .state('/', {
    url: "/",
    params: {},
    templateUrl: "html/login.html",
    controller: "LoginCtrl"
  })
    .state('/home', {
      url: "/home",
      params: {},
      templateUrl: "html/home.html",
      controller: "HomeCtrl"
    })
    .state('/about', {
      url: "/about",
      params: {},
      templateUrl: "html/about.html",
      controller: "AboutCtrl"
    })
    .state('/client', {
      url: "/client",
      params: {},
      templateUrl: "html/client.html",
      controller: "ClientCtrl"
    })
    .state('/contact', {
      url: "/contact",
      params: {},
      templateUrl: "html/contact.html",
      controller: "ContactCtrl"
    })
    .state('/dashboard', {
      url: "/dashboard",
      params: {},
      templateUrl: "html/dashboard.html",
      controller: "DashboardCtrl"
    });
});
