//pug is a templating engine for express.
// features include-- filters, includes,inheritance,interpolation etc..
// we need to install it,
    // npm i --save pug
   

    var express = require('express');
    var app = express();
    
    app.get('/first_views', function(req, res){
       res.render('first_views', {
          name: "TutorialsPoint", 
          url:"http://www.tutorialspoint.com"
       });
    });
    
    app.listen(3000);