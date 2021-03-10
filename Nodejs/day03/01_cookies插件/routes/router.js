const router = require('express').Router()

const fs = require('fs')

router.get('/index.html',(req,res)=>{
  fs.readFile('./views/index.html','utf8',(err,data)=>{
    if(err) return console.log(err);
    console.log(req.cookies);
    res.cookie('c',300,{maxAge:1000*10})
    res.send(data)
  })
})

module.exports = router