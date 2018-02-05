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
    .state('/main', {
      url: "/main",
      templateUrl: "html/main.html",
      controller: "HomeCtrl"
    })
    .state('/main.home', {
      url: "/home",
      templateUrl: "html/home.html",
      controller: "HomeCtrl"
    })
    .state('/main.amazon', {
      url: "/amazon",
      templateUrl: "html/amazon.html",
      controller: "AmazonCtrl"
    })
    .state('/main.flipkart', {
      url: "/flipkart",
      templateUrl: "html/flipkart.html",
      controller: "FlipkartCtrl"
    })
    .state('/main.swiggy', {
      url: "/swiggy",
      templateUrl: "html/swiggy.html",
      controller: "SwiggyCtrl"
    })
    .state('/main.zomato', {
      url: "/zomato",
      templateUrl: "html/zomato.html",
      controller: "ZomatoCtrl"
    })
    .state('/main.dominos', {
      url: "/dominos",
      templateUrl: "html/dominos.html",
      controller: "DominosCtrl"
    })
    .state('/main.box8', {
      url: "/box8",
      templateUrl: "html/box8.html",
      controller: "Box8Ctrl"
    });
});
