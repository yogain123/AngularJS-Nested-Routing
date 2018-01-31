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
    .state('/amazon', {
      url: "/amazon",
      params: {},
      templateUrl: "html/amazon.html",
      controller: "AmazonCtrl"
    })
    .state('/flipkart', {
      url: "/flipkart",
      params: {},
      templateUrl: "html/flipkart.html",
      controller: "FlipkartCtrl"
    })
    .state('/swiggy', {
      url: "/swiggy",
      params: {},
      templateUrl: "html/swiggy.html",
      controller: "SwiggyCtrl"
    })
    .state('/zomato', {
      url: "/zomato",
      params: {},
      templateUrl: "html/zomato.html",
      controller: "ZomatoCtrl"
    })
    .state('/dominos', {
      url: "/dominos",
      params: {},
      templateUrl: "html/dominos.html",
      controller: "DominosCtrl"
    })
    .state('/box8', {
      url: "/box8",
      params: {},
      templateUrl: "html/box8.html",
      controller: "Box8Ctrl"
    });
});
