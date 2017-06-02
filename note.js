angular.module("app").service("SRV", function ($http, $sce) {
    this.getData = function () {
        var url = "https://apifootball.com/api/?action=get_standings&league_id=62&APIkey=3e35e2275a444aadc65d0f6a2b6a6d2f20e95ea701d0c416629f36155787b040";
        var trust = $sce.trustAsResourceUrl(url)
        return $http.jsonp(trust)
        // 3e35e2275a444aadc65d0f6a2b6a6d2f20e95ea701d0c416629f36155787b040//
    }

    this.match = function () {
        var url = "https://apifootball.com/api/?action=get_events&from=2017-5-01&to=2017-5-30&league_id=62&APIkey=3e35e2275a444aadc65d0f6a2b6a6d2f20e95ea701d0c416629f36155787b040";
        var trust = $sce.trustAsResourceUrl(url)
        return $http.jsonp(trust)
    }
    this.news = function () {
        var url = "https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=15e9eb9b9516458c9a5d46967fc8c7a1"
        var trust = $sce.trustAsResourceUrl(url)
        return $http.json(trust)
    }
})
