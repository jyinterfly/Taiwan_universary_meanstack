var express = require('express');
var app = express();
var tmd = require('./apis/tmd');
var querystring = require('querystring'); 
    app.disable('view cache');

    app.get("*",function(req,res){ 
        var movies = new tmd().getmoviedetail(req.query.q,req.query.page); 
         movies.then(function(data){
         res.setHeader('Content-Type', 'application/json');
         res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:4200');
         res.setHeader('Access-Control-Allow-Methods', 'GET,Http, POST, OPTIONS, PUT, PATCH, DELETE')
         res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
         res.send(JSON.parse(data));
         res.end();    // Website you wish to allow to connect
})}
)
app.listen(3000);


 

