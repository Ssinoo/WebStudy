//引入模块
const fs = require('fs')

fs.readFile('./1.txt','UTF-8',(err,data)=>{
  if(err) return console.log(err.message);
  console.log(data);
})
