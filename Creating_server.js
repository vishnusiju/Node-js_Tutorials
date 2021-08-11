
// var http = require('http');

// http.createServer((request,response)=>{
//     response.write('<h1>Server created...!</h1>');
//     response.end();
// }).listen(3000);


var express = require('express');
var app = express();


app.get('/',(req,res)=>{
    res.send('hello')
}).listen(2000)
