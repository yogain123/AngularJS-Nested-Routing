var app = angular.module("myApp", ['ui.router']);
app.config(function($urlRouterProvider, $stateProvider) {

  console.log("inside config");
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('/', {
      url: "/",
      templateUrl: "html/login.html",
      controller: "LoginCtrl"
    })
    .state('/home', {
      url: "/home",
      templateUrl: "html/home.html",
      controller: "HomeCtrl"
    })
    .state('/amazon', {
      url: "/amazon",
      templateUrl: "html/amazon.html",
      controller: "AmazonCtrl"
    })
    .state('/flipkart', {
      url: "/flipkart",
      templateUrl: "html/flipkart.html",
      controller: "FlipkartCtrl"
    })
    .state('/swiggy', {
      url: "/swiggy",
      templateUrl: "html/swiggy.html",
      controller: "SwiggyCtrl"
    })
    .state('/zomato', {
      url: "/zomato",
      templateUrl: "html/zomato.html",
      controller: "ZomatoCtrl"
    })
    .state('/dominos', {
      url: "/dominos",
      templateUrl: "html/dominos.html",
      controller: "DominosCtrl"
    })
    .state('/box8', {
      url: "/box8",
      templateUrl: "html/box8.html",
      controller: "Box8Ctrl"
    });
});
