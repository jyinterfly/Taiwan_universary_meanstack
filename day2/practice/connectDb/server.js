var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:6yhn^YHN@ds147421.mlab.com:47421/meanstack282')

var catSchema = new mongoose.Schema({
    name:String,
    age:Number,
    temper:String
})

var cat = mongoose.model('Cat',catSchema);

var Kitty = new cat({
    name:'kit',
    age:3,
    temper:'mild'
});

Kitty.save(function(err,cat){
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log(cat)
    }
});

console.log("123");

