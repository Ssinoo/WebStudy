/* 
  cookie-parser:

*/
const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const router = require('./routes/router')

const app = express()

//3，挂载到服务上，要在router前
app.use(cookieParser())

//{对session空间的配置}
app.use(session({
  secret:'ssinoo',
  saveUninitialized:'false',
  resave:'true'
}))
app.use(router)

app.listen(8080,()=>{
  console.log('8080^_^');
})