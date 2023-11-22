const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/user/:id',(req,res)=>{
    const p = req.params;
    console.log(p);
    const q = req.query;
    console.log(q);

    res.json({name:"김대규"});
})

app.get('/sound/:name',(req,res) =>{
    const p = req.params;
    console.log(p);
    switch(p.name){
        case 'cat':
            res.json({'sound':'냐옹'});
            break;
        case 'dog':
            res.json({'sound':'멍멍'});
            break;
        case 'duck':
            res.json({'sound':'꽥'});
            break;
        case 'elephant':
            res.json({'sound':'뿌우'});
            break;
        default:
            res.json({'sound':'알수없음'});
            break;
    }
})

app.get('/',(req,res) =>{
    res.send("node.js -> express");
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})