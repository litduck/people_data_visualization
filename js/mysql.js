const express = require('express');
//2. 创建应用对象
const app = express();

var mysql  = require('mysql');  //导入mysql包
var connection = mysql.createConnection({    
	host     : 'localhost',      
	user     : 'root',             
	password : '123456',      
	port: '3306',
	database: 'people_data'
});
  
connection.connect();

app.get('/server', (req, res)=>{
    //设置响应头  设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
	 //设置响应
	 console.log(req.query.sql)
	selectSQL= req.query.sql;
       //var selectSQL = "select password from user where account='"+req.query.account+"'";
        connection.query(selectSQL,function (err, result) {
            if(err){
				console.log('[login ERROR] - ',err.message);
				return;
            }
            //console.log(result);
            console.log("OK");
    		// console.log(result);
    		res.send(result);
		});
});

//4. 监听端口启动服务
app.listen(80, ()=>{
    console.log("服务已经启动, 80 端口监听中....");
});
