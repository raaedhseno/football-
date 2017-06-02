var app = angular.module("app.position", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/position", {
        templateUrl: "../views/position.html",
        controller: "positionCtrl"
    })
})
app.controller("positionCtrl", function ($scope, SRV) {
    SRV.getData().then(function (response) {
        $scope.teams = response.data;
        $scope.teams.sort(function (a, b) {
            if (Number(a.overall_league_position) > Number(b.overall_league_position)) {
                return 1
            }
            if (Number(a.overall_league_position) < Number(b.overall_league_position)) {
                return -1
            }

        })
        console.log(response.data)
    }, function (error) {
        console.log(error.status)
    })
})
