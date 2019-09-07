<template>
    <div>
        <div class="movInt">
            <div class="intHe">
                <span>{{txtM}}</span>
                <a href="#" style="color:#42bd56">更多</a>
            </div>
            <div class="intBo">                 
                    <div class="con">
                        <div class="msfu">
                            <sliderzi v-for="(v,i) in movieType" :key="i" :zititle="v.title" :imgurla="v.images.medium"></sliderzi>
                         
                        </div>
                    </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import sliderzi from"./sliderzi"
export default {
    components:{
        sliderzi 
    },
     props:{
        txtM:{
            type:String,
            required:true
        },
        sfuprops:{
            type:Array,
            required:true
        }
    },
    computed: {
        movieType(){
            var newMovie=[]
            switch(this.txtM){
                case"影院热映":newMovie=this.sfuprops.filter((v,i)=>{
                    if(i<9){
                        return v
                    }
                });break
                case"免费在线观影":newMovie=this.sfuprops.filter((v,i)=>{
                    if(i>=9&&i<17){
                        return v
                    }
                });break
                case"新片速递":newMovie=this.sfuprops.filter((v,i)=>{
                    if(i>=17&&i<25){
                        return v
                    }
                });break                    
                case"豆瓣纸书":newMovie=this.sfuprops.filter((v,i)=>{
                    if(i<5){
                        return v
                    }
                });break
            
                case"最受关注图书 | 虚构类":newMovie=this.sfuprops.filter((v,i)=>{
                    if(i>=5&&i<11){
                        return v
                    }
                });break
                case"最受关注图书 | 非虚构类":newMovie=this.sfuprops.filter((v,i)=>{
                    if(i>=9&&i<17){
                        return v
                    }
                });break
                default:newMovie=[];break;
            }
                return newMovie

        }
    }

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
    .con{
        /* box-sizing: border-box; */
        padding:0.08rem 0;
        width: 100%;
        /* overflow: hidden; */
        /* background: palevioletred; */
    }
    .msfu{
        display: flex;
        /* background: skyblue; */
        overflow: auto;
    }
</style>