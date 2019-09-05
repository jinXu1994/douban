<template>
    <div class="hear_bar">
        <h1 class="tl">
            <router-link to="/home" class="logo_A">豆瓣</router-link> 
        </h1>
        <ul class="nav">
            <li>
                <router-link to="/movie" style="color:rgb(35, 132, 232)">电影</router-link>           
            </li>
            <li>
                <router-link to="/book" style="color:rgb(159, 120, 96)">图书</router-link>
            </li>
            <li>
                <router-link to="/radio" style="color:rgb(228, 168, 19)">广播</router-link>
            </li>
            <li>
                <router-link to="/group" style="color:rgb(42, 184, 204)">小组</router-link>
            </li>
        </ul>
        <span>
            <router-link to="/search" class="talion"></router-link>
        </span>
    </div>
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
   .hear_bar{
        /* position: fixed; */
        left: 0;
        right: 0;
        top: 0;
        z-index: 2;
        display: flex;
        align-items: center;
        height: 0.58rem;
        padding-left: 0.18rem;
        padding-right: 0.18rem;
        background: #fff;
        /* background: palegreen; */
        border-bottom: .01rem solid #f3f3f3;
        /* display: flex; */

   }
   .hear_bar .tl{
        flex: 1;
        width: .58rem;
        height:.32rem;
        margin-right: .18rem;
        font-size: 0;
        line-height: .32rem;
        /* background: rgb(190, 152, 251); */
       
   }
    .tl .logo_A{
        display: block;
        width: .56rem;
        height:.26rem;
        margin-top: .02rem;
        background: url(../../static/img/logo.png) no-repeat;
        background-size: cover;
    }
      
    .nav li{
       flex: 1;       
        float: left;
        font-size: .16rem;
        margin-right: .12rem;
    }
   /* .nav a{
       
   } */
    .talion{
        display: block;
       /* flex: 1; */

        float: right;
        height: .22rem;
        width: .28rem;
        background: url(../../static/img/sousou.png) no-repeat;
        background-size: cover;
        margin-top:0.05rem;
   }
</style>