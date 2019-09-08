<template>
   <div>
        <div>
            <h1 class="movH">分类浏览</h1>
        </div>
        
        <div class="fen">
            <div class="fen-con" v-for="(v,i) in allps" :key="i">
                <h1 class="fenH">
                    <a :href="v.href">{{v.tit}}</a>
                    <span v-show="v.tit"></span>
                </h1>
                <h1 class="fenz">
                    <a :href="v.href1" >{{v.tit1}}</a>
                    <span v-show="v.tit1"></span>
                </h1>
            </div>
            <!-- {{allps}} -->           
        </div>
        <div class="downApp">
            <div class="downApp-top">
               <img src="../../static/img/douban-app-logo.png" alt=""> 
               <strong>豆瓣</strong>
            </div>
            <!-- <router-link to="https://www.douban.com/doubanapp/frodo?">去App Store 免费下载 iOS 客户端</router-link> -->
            <a href="https://www.douban.com/doubanapp/frodo?">去App Store 免费下载 iOS 客户端</a>
        </div>
    </div>

</template>
<script>
export default {
    props:{
        allps:{
            type:Array,
            required:true
        }
    },
}
</script>
<style scoped>
    
    .movH{
        display: block;
        float: left;
        font-size: .16rem;
        width: .8rem;
        height: .2rem;
        line-height: .2rem;
        text-align: center;
        padding: .15rem 0;
    }
    .fen{
        float: left;
        width: 100%;
        overflow: hidden;
        box-sizing: border-box;
        /* padding: 0 5%; */
        /* height: 3rem; */
        /* background: orange; */
        border:.01rem solid #f3f3f3;
        border-bottom: none;
        margin-bottom: .2rem;

    }
    .fen-con{
        display: flex;
        border-bottom:.01rem solid #f3f3f3;
    }
    .fenH{
        border-right:.01rem solid #f3f3f3;
    }
    .fen-con h1{
        width: 50%;
        display: block;
        padding: .05rem 0;
    }
    .fen-con a{
        display: block;
        float:left;
        font-size: .16rem;
        padding-left: .1rem;
        color: #42bd56;
    }
    
    .fen-con span{
        display: block;
        float:right;
        /* font-size: .16rem; */
        width: .10rem;
        height: .10rem;
        transform: rotate(45deg);
        margin-right: .12rem;
        margin-top: .06rem;
        border-top:.02rem solid #f3f3f3;
        border-right:.02rem solid #f3f3f3;
            /* transform: rotate(45deg); */

    }
    .downApp{
        width: 100%;
        float: left;
        /* background: blue; */
        font-size: 0;
        text-align: center;
        margin-top: .5rem;
        margin-bottom: .3rem;
    }
    .downApp-top{
        display: flex;
        justify-content:center;
        margin-bottom: .15rem;
    }
    .downApp img{
        /* display: block; */
        width: .24rem;
        height: .24rem;
        margin-right: .12rem;
    }
    .downApp-top strong{
        font-size: .12rem;
        font-weight: normal;
        line-height: .24rem;
    }
    .downApp a{
        color:#42bd56;
        float: left;
        font-size: .12rem;
        text-align: center;
        width: 100%;
    }
</style>