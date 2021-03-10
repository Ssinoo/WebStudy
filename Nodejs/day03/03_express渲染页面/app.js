/* 
  express-art-template
  npm i express-art-template
  npm i art-template
  
  配置：配置在服务的引擎上
  
  会在res上面添加一个方法： render（）；
    

*/
const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const router = require('./routes/router')

const app = express()

// 1.配置：配置在服务的引擎上
app.engine('html',require('express-art-template'))

//{对session空间的配置}
app.use(session({
  secret:'ssinoo',
  saveUninitialized:'false',
  resave:'true',
}))

app.use(cookieParser())
app.use(router)

app.listen(8080,()=>{
  console.log('8080^_^');
})