var express = require("express");

var app = express();

var data = {
    "Sounds" : [
    {
        id: "cat",
        sound:"meow"
    },
    {
        id: "bird",
        sound:"meow"
    },
     {
        id: "dog",
        sound:"growl!"
    },
     {
        id: "cow",
        sound:"caw!"
    },
    ]
}

// app.get("/index" , function(req, res) {
//     var html = buildHtml(req);
    
//     res.writeHead(200, {
//         'Content-Type': 'text/html',
//         'Content-Length': html.length,
//         'Expires': new Date().toUTCString()
//     });

//     res.end(html);
    
// });

app.get('*', function(req, res) {
    var fullUrl =  req.originalUrl; //req.protocol + '://' + req.get('host') + req.originalUrl;
    //res.write(fullUrl);
    // res.write(fullUrl.replace("/","").toString());
    // console.log(findId(data,fullUrl.replace("/").toString()));
    //res.write(fullUrl.replace("/",""));
    var id = findId(data,fullUrl.replace("/","").toLowerCase());
    res.write(id);
    res.end();
});

app.listen(8888,function(){
});

// function getsound (key)
// {   
//     key = key.replace('/',"");

//     var text = "";

//     switch(key)
//     {
//         case "cat":
//              text = "meow!";
//              break;
//         case "cow":
//              text = "caw!";
//             break;
//         case "dog":
//              text = "growl!";
//             break;
//         case "bird":
//              text = "chirrup!";
//             break;
//         default:
//              text = "we do not collect the" + key +" voice";
//     };


//     return text;

// }

// function buildHtml(req) {
//   var header = '';
//   var body = '';

//   // concatenate header string
//   // concatenate body string

//   return '<!DOCTYPE html>'
//        + '<html><header>' + header + '</header><body>' + body + '</body></html>';
// };


function findId(data, idToLookFor) {
    var soundArray = data.Sounds;
    var text = "we do not collect the " + idToLookFor +" voice.";
    for (var i = 0; i < soundArray.length; i++) {
        if (soundArray[i].id == idToLookFor) {
            // return(soundArray[i].sound);;
            text = soundArray[i].sound;
            return text;
        }
    }
    return text;
}
