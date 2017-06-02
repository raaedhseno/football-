var app = angular.module("app", ["ngRoute", "app.position", "app.news", "app.match"]);
app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
})
app.controller("Ctrl", function ($scope, SRV) {


})
