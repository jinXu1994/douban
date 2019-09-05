<template>
    <div>
        <div class="searchT">
            <div class="souTop">
                <span  class="cloose"  @click="funCL()">关闭</span>
                <div class="ipT">
                    <input type="text">
                </div>            
            </div>
        </div>
          
        <div class="searchB">
            <div class="searchZ">
                <ser-z></ser-z>
            </div>
        </div>
        <div class="searchF">
            <div class="seaFt">
                <h1><router-link to="register" style="color: #47ca5d;">注册账号</router-link></h1>
                <span>|</span>
                <h1><router-link to="login" style="color: #47ca5d;">登录豆瓣</router-link></h1>
            </div>
            <div class="seaFt">
                <h1><router-link to="#" style="color: #47ca5d;">使用桌面版</router-link></h1>
                <span>|</span>
                <h1><router-link to="#" style="color: #47ca5d;">使用豆瓣APP</router-link></h1>
            </div>
        </div>
    </div>
      
    
</template>
<script>
import serZ from '../components/serZ'
export default {
    components:{
        serZ
    },
    methods: {
            funCL(){
                this.$router.go(-1)
            }
            
        }   
}
</script>
<style scoped>
    .searchT{
        width: 100%;
        overflow: hidden;
        border-bottom: .01rem solid #e3e3e3;
        padding:.05rem 0;
    }    
    .souTop{
        box-sizing: border-box;
        width: 100%;
        padding: 0 5%;
        /* overflow: hidden; */
        height: .3rem;
        /* line-height: .3rem; */
        display: flex;
        justify-content: space-between;
        /* background: plum; */
    }
    .cloose{       
        width: 0.365rem;
        height: 0.3rem;
        line-height: 0.3rem;
        text-align: center;
        color: #42bd56;
        font-size: 0.14rem;
        display: block;
        float: left;
    }
    .souTop .ipT{
        height: 0.3rem;
        width: 85%;
        border-radius: .05rem;
        /* background: gold; */
    }
    .ipT input{
        width: 100%;
        height: .26rem;
        margin-top:0.02rem;
        border:none;
        float: left;
        outline: none;
        text-indent: 0.05rem;
        border-radius: .05rem;
        background: url(../../static/img/sousou1.png) no-repeat 50%;
        background-size:.16rem .16rem;
        background-color: #f3f3f3;       
    }
    .searchB{
        box-sizing: border-box;
        width: 100%;
        overflow: hidden;
        /* height: 4rem; */       
        /* background: peru; */
    }
    .searchZ{
        width: 100%;
        /* height: 1rem; */
        overflow: hidden;
        box-sizing: border-box;
        padding: 0 5%;
        /* background: rgb(63, 205, 106); */
        padding:0.1rem 0;
        border-bottom: .01rem solid #e3e3e3;
    }
    .searchF{
        width: 100%;
        /* height: 1rem; */
        overflow: hidden;
        /* background: peru; */
    }
    .seaFt{
        width: 100%;
        /* height: .5rem; */
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        border-bottom: .01rem solid #e3e3e3;
        /* background:orchid; */

    }
    .seaFt h1,.seaFt span{
        float: left;
        font-size: .18rem;
        padding: .15rem 0;
    }
    .seaFt h1{
        width: 50%;
        text-align: center;
        /* color: #47ca5d; */
    }
    .seaFt span{
        color: #e3e3e3;
    }
</style>