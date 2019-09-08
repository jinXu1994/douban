<template>
    <div @click="Detail()">
        <div class="wite"  style="text-align: center;" v-if="arr.length<=0">
            <img  src="../../static/img/loading_green.gif" >
        </div>
        
        <div class="homeIn">
            <div class="homeIn-con" v-for="(v,i) in arr" :key="i">
            <!-- <div class="homeIn-con"> -->
                <div class="homeL">
                    <h1>{{v.title}}</h1>
                    <!-- <h1>第三个人骗你是法 </h1> -->

                    <p>{{v.tags}}</p>
                    <!-- <p>上到楼时间管理，发过来毛驴詹妮弗反斗联盟分隔擦个人地方 </p> -->

                </div>
                <!-- <div class="homeR"> -->
                    <img :src="v.image"/>
                    <!-- <img src="../../static/img/01.jpg"/> -->

                    
                <!-- </div> -->
                <div class="homeB">
                    <span class="spZ">{{v.category_name}}</span>
                    <!-- <span class="spZ">电泳</span> -->

                    <span class="spY">{{v.subcategory_name}}</span>
                    <!-- <span class="spY">多个现场看到对方大人</span> -->

                </div>
            </div>
        </div>
    </div>
    
    
</template>
<script>
export default {
    data() {
        return{
            arr:[]
        };
    },
    created() {
        setTimeout(()=>{
            this.axios({
                        methods:'get',
                        url:'/hoin'
                    }).then((data)=>{
                        console.log(data.data.shouye);
                        console.log(data.data.shouye.id);

                        this.arr=data.data.shouye;
                    })
        },3000)        
    },
    filters:{
        titFilter(val){
            return val.substring(0,20)
        },
        conFilter(val){
            return val.substring(0,30)
        }
    },
    props:{
        data:{
            type:Object
        }
    },
    methods: {
        Detail(){
            this.$router.push({name:"Detail",params:{id:this.data.id}})
            console.log(this.arr.id)
        }
    }
}
</script>
<style scoped>
    .wite{
        width: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;  
    }

    .homeIn-con{
        width: 100%;
        overflow: hidden;
        border-bottom: 0.01rem solid #e3e3e3;
        padding: .2rem 0 .1rem;
    }
    .homeL{      
       width: 1.8rem;
       /* height:1.2rem; */
       overflow: hidden;
       float: left;
       /* background: palevioletred; */
   }
    .homeL>h1{
        display: block;
        width: 1.8rem;
        /* line-height: .20rem; */
        font-size: .16rem;
        color:#000000;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
        margin-bottom: .08rem;
    }
    .homeL>p{
        width: 1.8rem;
        font-size: .12rem;
        color:#aaaaaa;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
        margin-bottom: .12rem;

    }    
    .homeL>span{
        display: block;
        font-size: .12rem;
        color:#aaaaaa;
    }
    

     img{
        display: block;
        float:right;
        width: .7rem;
        height:0.8rem;       
    }
    .homeR span{
        display: block;
        height:0.2rem;
        font-size: .12rem;
        color:#aaaaaa;
    }
    .homeB{
        float: left;
        width: 100%;
        height:0.2rem;       
        font-size: .12rem;
        color:#aaaaaa;
    }
    .spZ{
        display: block;
        float: left;
    }
    .spY{
        display: block;
        float: right;
    }
</style>