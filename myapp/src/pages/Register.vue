<template>
    <div id="app"> 
        <div class="register-view">
            <h1 class="title">欢迎加入豆瓣</h1>
            <div class="bottom1">
                <div class="middle">   
                    <input type="text" class="email" placeholder="邮箱" v-model="useremil">
                </div>   
                
                 <div class="middle middle_I" v-if="bool" @click="fun()">            
                    <input type="password" class="tolen" placeholder="Token" v-model="userpass">               
                    <span class="hidden" ></span>            
                </div>
                <div class="middle middle_E" v-else @click="fun()">               
                    <input type="text" class="tolen" placeholder="Token" v-model="userpass">
                    <span class="show" ></span>          
                </div>
               
                <div class="middle userN">   
                    <input type="text" class="username" placeholder="用户名" v-model="username">
                </div>     
                
                <div class="dengL" @click="zhuce()">注册</div>
                <p>点击[注册]表示你已阅读并同意用户协议</p>
                <div class="footer1">
                    <a href="#">下载豆瓣APP</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
     data() {
            return {
                bool:true,
                useremil:"",
                userpass:"",
                username:""
            }
        },
        methods: {
            fun(){
                this.bool=!this.bool
            },
            zhuce(){
                var param=new URLSearchParams();
                param.append("useremil",this.useremil);
                param.append("userpass",this.userpass);
                param.append("username",this.username);
                this.axios({
                    url:"http://localhost:3000/register",
                    method:"post",
                    data:param  
                }).then((ok)=>{
                    console.log(ok)
                    if(ok.data.linkid==1){
                        alert("注册成功");
                        this.$router.push("/login");
                    }else{
                        alert("注册失败请稍后再试");
                    }
                })               
            }
        }
}
</script>
<style scoped>
    .register-view>h1{
        margin: 10% 0 9%;
        font-size: .4rem;
        font-weight: 300;
        color: #42bd56;
        text-align: center;
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
        height: 0.25rem;
        display: inline-block;
        border:none;
        position: absolute;
        left:0.05rem;
        outline: none;
        font-size: 0.14rem;
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
    .userN{
        margin-bottom: 0.06rem;
    }
    .middle_E,.middle_I,.userN{
        border-top:none;
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
        font-size: .12rem;
        text-align: center;
        color:#aaaaaa;
    }
    .footer1{
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