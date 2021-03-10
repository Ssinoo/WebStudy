var express = require('express')
var app = express()

app.use(express.static(__dirname+'/static'))
app.get('/',(req,res)=>{
  res.send('hello world11')
})

app.get('*',(req,res)=>{
  res.sendFile(__dirname+'/views/1.html')
})
app.listen(3000)