// // write to file
// var fs = require('fs');

// fs.writeFile('text.txt','Write to text file',(err)=>{
//     if(err){
//         console.log('added')
//     }
// });


// // append file

// var fs = require('fs');

// fs.appendFile('text.txt',' add more file',(err)=>{
//     if(err){
//         console.log('error')
//     }
// })


// //Read file
// var fs = require('fs');

// fs.readFile('text.txt','utf-8',(e,data)=>{
//     console.log(data);
// })


// // Delete file

// var fs = require('fs');

// fs.unlink('text.txt',(err)=>{
//     if(err){
//         console.log('error')
//     }
// })


// File system with server.

var http = require('http');
var fs = require('fs');

http.createServer((req,res)=>{
    fs.readFile('text.txt',(err,data)=>{
        res.write(data);
        res.end();
    });
}).listen(4000)


