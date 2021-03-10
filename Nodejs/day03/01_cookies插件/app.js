/* 
  cookie-parser:

*/
const express = require('express')
const cookieParser = require('cookie-parser')
const router = require('./routes/router')

const app = express()

//3，挂载到服务上，要在router前
app.use(cookieParser())
app.use(router)

app.listen(8080,()=>{
  console.log('8080^_^');
})