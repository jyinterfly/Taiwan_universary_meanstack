var http = require('http');
var rp = require('request-promise');
var request = require('request');
var Q = require('q');
  

class tmd {
    constructor()
    {
        this.key = "e41d06faa02e7e96f6631c26039ee62a";
        this.url = "https://api.themoviedb.org/3/";
    }

    getmoviedetail(query,page){
        var deferred = Q.defer();
        var url = this.url + "search/movie?api_key=" + this.key +"&query=" + query + "&page=" + page;
        deferred.resolve(rp(url));
        return deferred.promise;
    }

    getdetail(data){
        var result = {};

        data = JSON.parse(data);

          
        return result;
    }
}

module.exports = tmd;