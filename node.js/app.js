//1:加载相关模块
const http=require("http");
const express=require("express");
const qs=require("querystring");
const mysql=require("mysql");
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"sohu",
    port:3306,
    connetionLimit:25
});
var app=express();
var server=http.createServer(app);
server.listen(8081);
//4:一定加载中间件
app.use(express.static("public"));

//4:处理请求 post /reg.do
//功能模块一:用户注册
app.post("/reg.do",(req,res)=>{
    req.on("data",(data)=>{
        var str=data.toString();
        var obj=qs.parse(str);
        var uname=obj.uname;
        var upwd=password(obj.upwd);
        var hp=obj.homepage;
        //console.log("主页"+hp);
        pool.getConnection((err,conn)=>{
            var sql="INSERT INTO sohu_user VALUES(null,?,?,?)";
            conn.query(sql,[uname,upwd,hp],(err,result)=>{
                if(err)throw err;
                //console.log(result);
                if(result.affectedRows>0){
                    res.json({code:1,msg:"注册成功"});
                }else{
                    res.json({code:-1,msg:"注册失败"});
                }
                conn.release();
            });
        });
    });
});
//功能模块二:验证用户名是否已存在
//1:获得用户get /existuname
app.get("/existsuname",(req,res)=>{
    //2:获取用户参数用户名 uname
    var u=req.query.uname;
    pool.getConnection((err,conn)=>{
        //3:创建SQL查询该用户名是否已存在
        //SELECT * FROM jd_user WHERE uname=?
        var sql="SELECT * FROM sohu_user WHERE uname=?";
        conn.query(sql,[u],(err,result)=>{
        //    4:依据结果{
        //    code:1,msg:"欢迎使用" code:-1,msg:"该用户名已被占用
            if(result.length<1){
                res.json({code:1,msg:"欢迎使用"});
            }else{
                res.json({code:-1,msg:"该用户名已被占用"});
            }
            conn.release();
        });
    });
});

//用户登录
app.post("/login.do",(req,res)=>{
   req.on("data",(data)=>{
       var str=data.toString();
       var obj=qs.parse(str);
       console.log(obj);
       var u=obj.uname;
       var p=password(obj.upwd);
       pool.getConnection((err,conn)=>{
           var sql="SELECT * FROM sohu_user WHERE uname=? AND upwd=?";
           conn.query(sql,[u,p],(err,result)=>{
              if(err)throw err;
              //console.log(result);
               if(result.length<1){
                   res.json({code:-1,msg:"用户名或密码有误"});
               }else{
                   res.json({code:1,msg:"登录成功",uid:result[0].uid});
               }
           });
           conn.release();
       });
   });
});

app.post("/comment.do",(req,res)=>{
    req.on("data",(data)=>{
        var str=data.toString();
        var obj=qs.parse(str);
        var content=obj.content;
        var title=obj.title;
        var time= obj.cTime;
        var img=obj.cImg;
        //console.log("主页"+hp);
        pool.getConnection((err,conn)=>{
            var sql="INSERT INTO sohu_comment VALUES(null,?,?,?,now())";
            conn.query(sql,[title,img,content],(err,result)=>{
                if(err)throw err;
                //console.log(result);
                if(result.affectedRows>0){
                    res.json({code:1,msg:"发表成功"});
                }else{
                    res.json({code:-1,msg:"发表失败"});
                }
                conn.release();
            });
        });
    });
});



