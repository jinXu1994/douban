<template>
    <div class="logiinDou">
        <div class="top1">
            <span  class="cloose"  @click="funCL()">关闭</span>
            <span class="loginIn">登录豆瓣</span>
        </div>
        <div class="bottom1">
            <div class="middle">   
                <input type="text" class="email" placeholder="邮箱" v-model="useremil">
            </div>   
            <div class="middle middle_I" v-if="bool" @click="fun1()">            
                <input type="password" class="tolen" placeholder="Token" v-model="userpass">               
                <span class="hidden" ></span>            
            </div>
            <div class="middle middle_E" v-else @click="fun()">               
                <input type="text" class="tolen" placeholder="Token" v-model="userpass">
                <span class="show" ></span>          
            </div>
                
            
            <div class="dengL" @click="login()">登录</div>
            <p>使用其他方式登录&找回密码</p>
            <div class="footer1">
                <a href="#/register">注册豆瓣账号</a>
                <a href="#">下载豆瓣APP</a>
            </div>
        </div>
       
    </div>
    
</template>
<script>
import cloose from '../components/cloose';
export default {
        data() {
            return {
                bool:true,
                useremil:"",
                userpass:""
            }
        },
        methods: {
            funCL(){
                this.$router.go(-1)
            },
            login(){
                // var param=new URLSearchParams();
                // param.append("useremil",this.useremil);
                // param.append("userpass",this.userpass);
                // this.axios({
                //     url:"http://localhost:3000/login",
                //     method:"post",
                //     data:param                 
                // }).then((ok)=>{
                //     console.log(ok)
                //     console.log(ok.data.linkid)
                //     if(ok.data.linkid==2){
                //         alert("登录成功");
                        this.$router.push("/home");
                //     }else{
                //         alert("登录失败请稍后再试");
                //     }
                // })
            },
            fun1(){
                this.bool=!this.bool
            }
        }
}
</script>
<style scoped>
    
    
    .top1{
        display: block;
        width: 100%;
        overflow: hidden;
        /* background: pink; */
        border-bottom:1px solid #eeeeee; 
    }
    .cloose{       
        width: 0.365rem;
        height: 0.27rem;
        line-height: 0.27rem;
        text-align: center;
        color: #42bd56;
        font-size: 0.14rem;
        display: block;
        float: left;
    }

    .loginIn{
        width: 2.47rem;
        height:0.27rem;
        line-height: 0.27rem;
        display: block;
        float: left;
        font-size: 0.16rem;
        font-weight: 700;
        color: #000000 ;
        text-align: center;
        /* border-bottom:1px solid #eeeeee;  */
    }
    .bottom1{
        display: block;
        width: 2.47rem;
        /* height:1.55rem; */
        overflow: hidden;
        margin:0 auto;
        padding-top: 0.26rem;
        /* background-color: blueviolet; */
    }
    .middle{
        position: relative;
        font-size: 0rem;
        height:0.26rem;
        border:0.01rem solid #ccc;
        border-radius: 0.03rem .03rem 0 0;
        background-color:white;
    }
    .middle>input{
        width: 2.38rem;
        height: 0.26rem;
        display: inline-block;
        border:none;
        position: absolute;
        left:0.05rem;
        outline: none;
        font-size: 0.14rem;
    }
    .middle_I,.middle_E{
        margin-bottom: 0.06rem;
        border-top:none;
    }
    .middle>span{
        display: block;
        width: 0.13rem;
        height:0.26rem;
        line-height: 0.26rem;
        position: absolute;
        right:0.05rem;
        top:0;
        /* background: url(../../static/img/hidden.png) no-repeat 50%; */
        background-size: 0.13rem;       
    }
    .middle .hidden{
         background: url(../../static/img/see-hidden.png) no-repeat 50%;
         background-size: 0.13rem; 
    }
    .middle .show{
         background: url(../../static/img/see-show.png) no-repeat 50%;
         background-size: 0.13rem; 
    }

    .dengL{
        height:0.25rem;
        line-height: 0.25rem;
        font-size: .16rem;
        text-align: center;
        color: white;
        background: #17aa52;
        border-radius: 0.05rem;
        margin-bottom: 0.06rem;
    }
    .bottom1 p{
        display: block;
        /* width: ; */
        height: 0.2rem;
        line-height: 0.2rem;
        font-size: .14rem;
        text-align: center;
        color:#aaaaaa;
    }
    .footer1{
        width: 2.61rem;
        height: 0.45rem;
        line-height: 0.45rem;
        font-size: .14rem;
        text-align: center;
        /* color: #42bd56; */

        /* background: #aaaaaa; */
    }
    .footer1 a{
        color: #42bd56;
        
        margin-right: .14rem;
    }
</style>