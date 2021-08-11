
// var express = require('express');
// var app = express();

// app.get('/home',(req,res)=>{
//     res.send('hello')
// });

// app.listen(4000)


var express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{
    res.send('get router on things')
});
router.post('/',(req,res)=>{
    res.send('post route on things')
});

module.exports = router;


