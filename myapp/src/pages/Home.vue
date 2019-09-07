<template>
    <div class="home">
        <div class="header">
            <headone></headone>
        </div>
        <div class="home-body">
            <div class="body-top">
                <span>
                    <router-link to="/movie" style="color:#000000">影院热映</router-link>
                </span>
                <span>
                    <router-link to="/home" style="color:#000000">欧美新碟榜</router-link>
                </span>
            </div>
            <div class="body-top">
                <span>
                    <router-link to="/register" style="color:#000000">注册账号</router-link>
                </span>
                <span>
                    <router-link to="/login" style="color:#000000">登录豆瓣</router-link>
                </span>
            </div>
            <div class="homeall">
                <hoin></hoin>
            </div>
        </div>
    </div>   
</template>
<script>
import headone from '../components/headone';
import hoin from '../components/hoin';
export default {
    components:{
        headone,
        hoin
    }
}
</script>
<style scoped>
    .home-body{
        margin-top: .58rem;
        padding: .25rem .25rem 0;        
        /* height: 2rem; */
        overflow: hidden;
        /* background: green; */
    }
    .body-top{
        overflow: hidden;
        /* line-height: 1rem; */
        text-align: center;
        display:flex;
        justify-content:space-between;
        /* background: peachpuff; */
   }
    .body-top span{
        /* display:flex; */
        display: block;
        width: 48%;
        height: .3rem;
        line-height: .3rem;
        font-size: .16rem;
        text-align: center;
        /* margin-left: 3%; */
        /* margin-right: 3%;  */
        
        margin-bottom:0.12rem;
        float: left;
        background: #e3e3e3;
        /* color:#000000; */
    }
</style>