var express = require('express');
var app = express();

app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){

    res.send({
  "name": "express",
  "version": "0.0.1",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Jonathan",
  "license": "ISC"
});
    res.end();
})

app.listen(3000);

