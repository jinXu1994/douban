<template>
    <div>
        <div class="slizi">
            <div class="imgD">
                <img class="imgI" :src="imgurla"> 
            </div>
                  
            <span class="dS">{{zit}}</span>
            <div class="zidiv">            
                <span class="ziP">暂无影评</span>
            </div>
            
        </div>
    </div>
    
</template>
<script>
export default {
    props:{
        zititle:{
            style:String,
            required:true
        },
        imgurla:{
            style:String,
            required:true
        }
    },
    computed: {
        zit(){
            if(this.zititle.length>6){
                return this.zititle.substring(0,6)+"..."

            }else{
                return this.zititle
            }
        }
    }
}
</script>
<style scoped>
    .slizi{
        width: .8rem;
        height: 1.45rem;
        overflow: hidden;
        margin-right: .15rem;
        float: left;
        font-size: 0;
        /* line-height: 0; */
    }
    /* .imgD{
        line-height: 0;
    } */
    .imgI{
        width: 100%;
        height:1.185rem;
        /* font-size: 0;..... */
        float: left;
    }
    .dS, .ziP{
        display: block;
        width: 100%;
        float: left;
        text-align: center;
        font-size:.10rem;
    }
    .zidiv{
        width: 100%;
        overflow: hidden;
    }
    .ziP{
        font-size: .08rem;
        color: #aaaaaa;
    }

</style>