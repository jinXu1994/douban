<template>
    <div class="movie">
        <div class="header">
            <headone></headone>
        </div>
        <div class="movB">
            <div class="movInt">
                <div class="intHe">
                    <span>影院热映</span>
                    <a href="#" style="color:#42bd56">更多</a>
                </div>
                <div class="intBo">
                    <ul></ul>
                </div>
            </div>
            <div class="movInt">
                <div class="intHe">
                    <span>免费电影在线观影</span>
                    <a href="#" style="color:#42bd56">更多</a>
                </div>
                <div class="intBo">
                    <ul></ul>
                </div>
            </div>
            <div class="movInt">
                <div class="intHe">
                    <span>新片速递</span>
                    <a href="#" style="color:#42bd56">更多</a>
                </div>
                <div class="intBo">
                    <ul></ul>
                </div>
            </div>
            <div class="movInt">
                <div class="intHe">
                    <span>发现好电影</span>
                    <a href="#" style="color:#42bd56">更多</a>
                </div>
                <div class="intBo">
                    <ul></ul>
                </div>
            </div>
             <div class="movM">

            </div>
            <div class="movF">
                <div>
                    <h1 class="movH">分类浏览</h1>
                </div>
                
                <div class="fen">
                    <div class="fen-con">
                        <h1 class="fenH">
                            <p>经典</p>
                            <span></span>
                        </h1>
                        <h1>
                            <p>冷门佳片</p>
                            <span></span>
                        </h1>
                    </div>
                    <div class="fen-con">
                        <h1 class="fenH">
                            <p>豆瓣高分</p>
                            <span></span>
                        </h1>
                        <h1>
                            <p>动作</p>
                            <span></span>
                        </h1>
                    </div>
                    <div class="fen-con">
                        <h1 class="fenH">
                            <p>喜剧</p>
                            <span></span>
                        </h1>
                        <h1>
                            <p>爱情</p>
                            <span></span>
                        </h1>
                    </div>
                    <div class="fen-con">
                        <h1 class="fenH">
                            <p>悬疑</p>
                            <span></span>
                        </h1>
                        <h1>
                            <p>恐怖</p>
                            <span></span>
                        </h1>
                    </div>
                    <div class="fen-con">
                        <h1 class="fenH">
                            <p>科幻</p>
                            <span></span>
                        </h1>
                        <h1>
                            <p>治愈</p>
                            <span></span>
                        </h1>
                    </div>
                    <div class="fen-con">
                        <h1 class="fenH">
                            <p>文艺</p>
                            <span></span>
                        </h1>
                        <h1>
                            <p>成长</p>
                            <span></span>
                        </h1>
                    </div>
                    <div class="fen-con">
                        <h1 class="fenH">
                            <p>动画</p>
                            <span></span>
                        </h1>
                        <h1>
                            <p>华语</p>
                            <span></span>
                        </h1>
                    </div>
                    <div class="fen-con">
                        <h1 class="fenH">
                            <p>欧美</p>
                            <span></span>
                        </h1>
                        <h1>
                            <p>韩国</p>
                            <span></span>
                        </h1>
                    </div>
                    <div class="fen-con">
                        <h1 class="fenH">
                            <p>日本</p>
                            <span></span>
                        </h1>
                        <h1>
                            <p></p>
                            
                        </h1>
                    </div>
                </div>
            </div>
        </div>
       
        
    </div>
</template>
<script>
import headone from '../components/headone';
import sliderfu from '../components/slider/sliderfu'
export default {
    components:{
        headone,
        sliderfu 
    }
}
</script>
<style scoped>
    .movB{
         width: 100%;
        /* height: 3rem; */
        overflow: hidden;
        box-sizing: border-box;
        padding: 0 5%;
        /* background: rgb(63, 205, 106); */
    }
    .movInt{
        padding-top: .1rem;
    }
    .intHe{
        height: .26rem;
        line-height: .26rerm;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:0 .1rem;
        /* background: rgb(63, 205, 106); */

    }
    .intHe span{
        font-size: .16rem;
        font-weight: 100;
        float: left;
    }
    .intHe a{
        font-size: .16rem;
        font-weight: 100;
        float: right;
    }
    .intBo ul{
        padding:0.08rem 0;
        background: palevioletred;

    }
    .movM{
        height: .5rem;
        background: greenyellow;
    }
    .movF{
        height: 1rem;
        /* background: paleturquoise; */
    }
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
    .fen-con p{
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
        margin-top: .02rem;
        border-top:.02rem solid #f3f3f3;
        border-right:.02rem solid #f3f3f3;
            /* transform: rotate(45deg); */

    }
</style>