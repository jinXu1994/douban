<template>
    <div class="serZu">
        <div class="searZu-con" v-for="(v,i) in arr" :key="i">
            <h1>
                <!-- <a :href="v.href" :style="v.color">{{v.tit}}</a> -->
                <router-link :to="v.href" :style="v.color">{{v.tit}}</router-link>
            </h1>
            <span>{{v.text}}</span>
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
        // setTimeout(()=>{
            this.axios({
                        methods:'get',
                        url:'/sousou'
                    }).then((data)=>{
                        console.log(data.data.sousou);
                        this.arr=data.data.sousou;
                    })
        // },3000)
         
    }
}
</script>
<style scoped>
    .serZu{
        width: 100%;
        /* height: 3rem; */
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        flex-wrap:wrap;
        /* background: brown; */
    }
    .searZu-con{
        width: 30%;
        height:.5rem;
        padding: .1rem 0;
        /* background: brown; */
    }
    h1{
        width: 100%;
        height: .35rem;
        line-height: .35rem;
        text-align: center;
        font-size: .28rem;

    }
    span{
        display: block;
        width: 100%;
        height: .15rem;
        text-align: center;
        font-size: .14rem;
        color: #999999;
    }
</style>