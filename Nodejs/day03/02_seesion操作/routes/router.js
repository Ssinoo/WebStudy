const router = require('express').Router()

const fs = require('fs')

router.get('/index.html',(req,res)=>{
  fs.readFile('./views/index.html','utf8',(err,data)=>{
    if(err) return console.log(err);
    
    console.log(req.session);
    res.send(data)
  })
})
router.get('/login.html',(req,res)=>{
  fs.readFile('./views/login.html','utf8',(err,data)=>{
    if(err) return console.log(err);
    req.session.nickname='noo'

    res.send(data)
  })
})

module.exports = router