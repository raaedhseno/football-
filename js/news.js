var app = angular.module("app.news", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/news", {
        templateUrl: "../views/news.html",
        controller: "newsCtrl"
    })
})

app.controller("newsCtrl", function ($scope, SRV) {
    SRV.news().then(function (response) {
        $scope.news = response.data.articles;
        console.log(response.data)
    })
})
