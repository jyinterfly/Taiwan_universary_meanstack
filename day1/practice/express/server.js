var express = require('express');

var app = express();

var http = require('http');

app.get('/bye',function(req,res){
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.write(fullUrl);
    console.log(fullUrl);
    res.write('hi');
    res.end();
});

app.listen(3000);