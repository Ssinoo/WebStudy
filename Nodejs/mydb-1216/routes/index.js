var express = require('express');
var moment = require('moment')
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '000916noo',
  database : 'mydb-1216'
});

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

// connection.end();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('experss serve')
});

/**
 * @api {get} /users/:id 根据id获取用户信息
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.get('/users/:id',(req,res)=>{
  const id = req.params.id
  const sql = 'select * from user where isdel = 0 and id =? '
  connection.query(sql,id,(err,result)=>{
    if(err) return console.log(err.message);
    res.send({err_code:0,message:result})
  })
})

//获取user数据库全部数据但是isdel要为0
router.get('/users',(req,res)=>{
  const sql ='select * from user where isdel =0'
  connection.query(sql,(err,results)=>{
    if(err) return console.log(err.message);
    res.send({err_code:0,message:results})
  })
})

/**
 * @api {post} /users/:id 添加用户信息
 * @apiName AddUser
 * @apiGroup User
 *
 * @apiParam {String} teachername 添加学科类型
 * @apiParam {String} username 添加老师名
 * @apiParam {String} sex 添加老师性别
 * @apiParam {number} birthday 添加老师生日
 *
 * @apiSuccess {json} Success-Response:{
       err_code: 0,
       message : '添加成功'
 * }
 * 
 */
router.post('/users',(req,res)=>{
  const body = req.body
  body.itime = moment().format('YYYY-MM-DD, HH:MM:SS')
  const sql = 'insert into user set ?'
  connection.query(sql,body,(err,result)=>{
    if(err) return console.log(err.message);
    //判断影响的条数判断 返回数据
    if(res.affectedRows <1) return res.send({
      err_code: 1,
      message : '添加失败'
    })
    res.send({
      err_code: 0,
      message : '添加成功'
    })
  })
  
})


/**
 * @api {put} /users/:id 根据id修改信息
 * @apiName UpdateUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.put('/users/:id',(req,res)=>{
  //获取到请求消息头的值
  const id  =req.params.id
  //获取请求体的内容
  const body = req.body
  body.itime = moment().format('YYYY-MM-DD, HH:MM:SS')
  // sql的更新语句
  const sql = 'update user set ? where id = ?'
  // 传值，根据 sql的问号 进行传值 以数据的形式进行传值
  connection.query(sql,[body,id],(err,result)=>{
    
    //判断影响的条数判断 返回数据
    // console.log(err.message) ;
    if(res.affectedRows <1) 
    return res.send({
      err_code: 1,
      message : '编辑的用户不存在'
    })
    res.send({
      err_code: 0,
      message : '编辑成功'
    })
  })
  
  // res.end('post')
})


/**
 * @api {delete} /users/:id 根据用户id删除用户信息 (软删除)
 * @apiName DeleteUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.delete('/users/:id',(req,res)=>{
  const id = req.params.id
  const sql  = 'update user set isdel =1 where id = ? '
  connection.query(sql,id,(err,results)=>{
    if(err) return console.log(err.message);
    if(results.affectedRows <1) 
    return res.send({
      err_code: 1,
      message : '删除的用户不存在'
    })
    res.send({
      err_code: 0,
      message : '删除成功'
    })
  })
})

module.exports = router;
