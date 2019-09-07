<template>
    <div>
        <div class="movInt">
                <div class="intHe">
                    <span>影院热映</span>
                    <a href="#" style="color:#42bd56">更多</a>
                </div>
                <div class="intBo">
                    <ul>
                            <!-- <sliderzi></sliderzi> -->
                    </ul>
                </div>
            </div>
    </div>
</template>
<script>
import sliderzi from"./sliderzi"
export default {
    // components:{
    //     sliderzi 
    // }
    
}
</script>
<style scoped>
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

    }
</style>