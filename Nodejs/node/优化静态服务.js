//1 引入http模块
const http = require('http')
const fs = require('fs')
const path = require('path')

//2 创建服务
const server = http.createServer()

// 3 监听请求

server.on('request', (req, res) => {
  readFileStatic(req.url,res)
})

// 4 监听端口号
server.listen(3000, function () {
  console.log('http://127.0.0.1:3000');
})

//定义方法
function readFileStatic(path,mrpath='./views',res){
  fs.readFile(path.join(__dirname,mrpath),'UTF-8',(err,data)=>{
    if(err) return console.log(err.message);
    res.end(data)
  })
}