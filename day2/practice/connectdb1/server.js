var mongoose = require('mongoose');
var config = require('./config/db');

mongoose.connect(config.dataURI);

mongoose.connection.on('connected',function(){
    console.log('db connection now!');
})

mongoose.connection.on('error',function(err){
    console.log(err);
})

