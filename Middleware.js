// middleware functions are functions that have access to the
// request and response, and next middleware function in the 
// application request-response cycle.


// var express = require('express');
// var app = express();

// app.use('/things', (req,res,next)=>{
//     console.log('a request: ' + Date.now());
//     next();
// })

// app.get('/things',(req,res)=>{
//     res.send('helloo: ')
// });

// app.listen(3000);




// // order of middleware calls,

// var express = require('express');
// var app = express();

// // First middleware before response is sent
// app.use((req,res,next)=>{
//     console.log('start');
//     next();
// });

// // Route handler
// app.get('/',(req,res,next)=>{
//     console.log('middle');
//     next();
// });

// app.use('/',(req,res)=>{
//     console.log('end')
// });

// app.listen(3000);