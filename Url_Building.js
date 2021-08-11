// var express = require('express');
// var app = express();

// app.get('/:id',(req,res)=>{
//     res.send('helllo' + req.params.id);
// });

// app.listen(4000);



var express = require('express');
var app = express();

app.get('/:id/:name',(req,res)=>{
    res.send('helllo: ' + req.params.id + ' and name: ' + req.params.name);
});

app.listen(4000);



