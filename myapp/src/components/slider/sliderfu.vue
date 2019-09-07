<template>
    <div class="con">
        <div class="msfu">
            <!-- <sliderzi v-for="(v,i) in sfuprops" :key="i" :zititle="v.title" :imgurla="v.images.medium"></sliderzi> -->
            <sliderzi></sliderzi>
        </div>
        <!-- <div class="movInt">
                <div class="intHe">
                    <span>影院热映</span>
                    <a href="#" style="color:#42bd56">更多</a>
                </div>
                <div class="intBo">
                    <ul>
                        <sliderfu :sfuprops="arr"></sliderfu>
                    </ul>
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
                </div> -->
            <!-- </div> -->
    </div>

</template>
<script>
import sliderzi from"./sliderzi"
export default {
    components:{
        sliderzi 
    }
    // props:{
    //     sfuprops:{
    //         type:Array,
    //         required:true
    //     }
    // }
}
</script>
<style scoped>
    .con{
        width: 100%;
    }
    div{
        display: flex;
        background: skyblue;
        overflow: auto;
    }
    /* .movInt{
        padding-top: .1rem;
    }
    .intHe{
        height: .26rem;
        line-height: .26rerm;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:0 .1rem;
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
    .intBo{
        width: 100%;
        overflow: hidden;
    }
    .intBo ul{
        padding:0.08rem 0;
        overflow: hidden;
        background: palevioletred;

    } */
</style>