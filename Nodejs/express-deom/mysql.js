//引入mysql
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '000916noo',
  database: 'mydb-1216'
});

//开启连接
connection.connect();

//执行sql语句


//查询
 const sql = 'SELECT * from user where sex = ?'
connection.query(sql,'男', function (error, results) {
  if (error) throw error;
  console.log('查询结果为: ', results);
});

/* 
  添加数据
const body ={
  teachername: 'English',
  username : '唐七',
  sex : '女',
  birthday :'18',
  specialities: '大学英语',
  phone : '44910'
}
const sql = 'insert into user set ?'
connection.query(sql,body,function(error,results){
  if(error) throw error
  console.log(results);
}) */


/*   // 修改数据
const body ={
  teachername: 'English',
  username : '唐七',
  sex : '女',
  birthday :'19',
  specialities: '大学英语',
  phone : '44910'
}
const sql = 'update user set ? where phone = ?'
connection.query(sql,[body,body.phone],function(error,results){
  if(error) throw error
  console.log(results);
}) */

/* //删除
const sql = 'delete from user where phone = ?'
connection.query(sql, 'null', function (error, results) {
  if (error) throw error;
  console.log('查询结果为: ', results);
}); */

/* //软删除
const sql = 'update user set isdel =1 where id=? '
connection.query(sql, 1, function (error, results) {
  if (error) throw error;
  console.log('查询结果为: ', results);
}); */

// 关闭连接
connection.end();