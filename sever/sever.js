var express=require("express");
var app=express();
var bodyParser=require("body-parser");
//使用post解析功能
var uE=bodyParser.urlencoded({extended:false});
// 3.引用加密模块
var crypto=require("crypto")
// 4.引用数据库
var mongoose=require("mongoose");
var jwt=require("jsonwebtoken")

// 2.解决跨域
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    
     res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');    
    next();
})
// 7.定义集合 集合不能放到路由内
    var dbCollection=mongoose.model("useInf",{
            useremil:String,
            userpass:String,
            username:String
        })

app.post("/register",uE,function(req,res){
    //1.获取前台数据
    var useremil=req.body.useremil;
    var userpass=req.body.userpass;
    var username=req.body.username;
    console.log(useremil+"------"+userpass+"-------"+username);
    // 4.加密数据
    var md5pwd=crypto.createHash('md5').update(userpass).digest('hex');
    console.log(md5pwd);
    // 6.连接数据库
    mongoose.connect("mongodb://localhost:27017/yoonghu",{useNewUrlParser:true},function(err){
        if(err){
            console.log("数据库链接失败");
        }else{
            console.log("数据库链接成功");
            // 8.设置存入的数据
            var userdemo=new dbCollection({
                useremil,  //键和键值相等的写法
                userpass:md5pwd,
                username
            })
            //9.开始存
            userdemo.save().then((ok)=>{
                res.send({mes:"注册成功",status:200,linkid:1})
            },(err)=>{
                res.send({mes:"注册失败",status:500,linkid:0})
            })
        }
    })
})

//将解析密码模块注入路由
app.post("/login",uE,function(req,res){
    //10.获取前台数据
    var useremil=req.body.useremil;
    var userpass=req.body.userpass;
    console.log(useremil);
    console.log(userpass);

    // 11.加密数据
    var md5pwd=crypto.createHash('md5').update(userpass).digest('hex');
    console.log(md5pwd);
    // 12.查询数据库
    mongoose.connect("mongodb://localhost:27017/yoonghu",{useNewUrlParser:true},function(err){
        if(err){
            console.log("err");
        }else{
            console.log("ok");
            dbCollection.find({useremil:useremil,userpass:md5pwd}).then((ok)=>{
                // 在查询的时候成功可能有两种结果  第一种查出来值了  第二种没有查出来值但是返回一个空数组
                if(ok.length>0){
                    // var obj={
                    //     loginok:true,
                    //     useremil:useremil
                    // }
                    // var mi="xcvwouvjcxnnsffoJFANIHIVOUdnckjdbfvaherhrfn"
                    // var token=jwt.sign(obj,mi);
                    res.send({mes:"登录成功",status:200,linkid:2})
                }else if(ok.length==0){
                    res.send({mes:"登录失败",status:200,linkid:3})
                }
            },(err)=>{
                res.send({mes:"连接超时请稍后再试",status:500,linkid:4})
            })
              
        }
    })
})
app.listen(3000,function() {
    console.log('服务器启动正常')
});