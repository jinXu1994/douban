<template>
    <div>
        <div class="movInt">
                <div class="intHe">
                    <span>影院热映</span>
                    <a href="#" style="color:#42bd56">更多</a>
                </div>
                <div class="intBo">
                    <ul>
                        <a v-for="(v,i) in foot" :key="i" :href="v.href" :style="{'color':v.color}" v-if="!v.line">
                            {{ v.title }}
                        </a> 
                        <br v-else> 
                    </ul>
                </div>
            </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            style:{},
            br:false
        }
    },
    props:{
        foot:{
            type:Array,
        }
    }
    
}
</script>
<style scoped>
    .movInt{
        padding-top: .1rem;
        overflow: hidden;
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
    }
    .intBo ul{
        /* padding:0.08rem 0;
        overflow: hidden;
        background: palevioletred; */
        overflow: auto;
        padding:0.08rem 0;       
        width: 100%;
        font-size: 0;
        white-space: nowrap;

    }
    ul>a{
       display: inline-block;
        overflow: hidden;
        border: .01rem solid rgb(255, 172, 45);
        border-radius: .04rem;
        height: 0.2rem;
        line-height: 0.2rem;
        text-align: center;
        letter-spacing: .01rem;
        margin-bottom: 0.08rem;
        margin-right: 0.16rem;
        padding: 0 .2rem;
        font-size: .16rem;
    }
</style>