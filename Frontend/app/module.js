let app = angular.module("techxquad", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "home.html",
      controller : "AppController"
    })
    .when("/about", {
      templateUrl: "about.html"
    })
    .when("/services", {
      templateUrl: "service.html"
    })
    .when("/services/web-development", {
      templateUrl:"web-dev.html"
    })
    .when("/services/app-development",{
      templateUrl:"app-dev.html"
    })
    .when("/services/digital-marketing",{
      templateUrl:"digi-marketing.html"
    })
    .when("/services/graphics-designing",{
      templateUrl:"graphics-designing.html"
    })
    .when("/blog", {
      templateUrl:"blog.html"
    })
    .when("/contact", {
      templateUrl:"contact.html"
    })
    .when("/career", {
      templateUrl:"career.html"
    })
    .when("/quote",{
      templateUrl:"quote.html",
      controller : "AppController"
    })
});