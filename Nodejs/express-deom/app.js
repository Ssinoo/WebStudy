// 1.引入 express 
const express = require('express')
// const cal = require('./cal')
// 2.创建服务
const app = express()
// 3.监听请求
app.get('/',(req,res) =>{
  console.log('1');
  // console.log(cal.add(1,2));
  res.send('express server')
})

app.post
// 4.监听端口

app.listen(3000,function(){
  console.log('http://127.0.0.1:3000');
})
