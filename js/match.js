var app = angular.module("app.match", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/match", {
        templateUrl: "../views/match.html",
        controller: "matchCtrl"
    })
})
app.controller("matchCtrl", function ($scope, SRV) {
    SRV.match().then(function (response) {
        $scope.teams = response.data;
        console.log(response.data)
    }, function (error) {
        console.log(error.status)
    })
})
