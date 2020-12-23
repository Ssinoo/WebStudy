//1.引入 express
const express = require('express')

//2.创建路由对象
const router  = express.Router()
//3.监听请求

router.get('/',(req,res)=>{
  res.send('express server')
})

router.post('/api/post',(req,res)=>{
  console.log(req.body);
  res.send('post')
})

module.exports = router