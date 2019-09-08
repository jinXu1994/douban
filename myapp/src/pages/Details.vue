<template>
    <div>
        <div class="header">
            <headone></headone>
        </div>
        <div class="Dbody">
            <div class="headT"></div>
            <div class="detail">
                <!-- <index-detail :shouyeData="detailData"></index-detail> -->
                <index-detail></index-detail>

            </div>
          
        </div>
        
    </div>
</template>
<script>
import headone from '../components/headone';
import indexDetail from '../components/IndexDetail'


export default {
    components:{
        headone,
        indexDetail

    },
    data(){
        return {
            detailData:[]
        }
    },
    created() {
       console.log(this.$route.params.id) 
        this.axios({
            url:"/hoin",
            method:"get"
        }).then((data)=>{
            // console.log(data.data.shouye)
            this.detailData=data.data.shouye.filter((v,i)=>{
                 if(v.id==this.$route.params.id){
                    return v
                }
            })
           
        })
    }
}
</script>
<style scoped>
    .Dbody{
        width:100%;
        overflow: hidden;
        box-sizing: border-box;
        padding: 0 5%;
        margin-top: .58rem; 
    }
    .headT{
        height: 1rem;
        background: palegreen;
    }
    
</style>