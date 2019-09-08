<template>
    <div class="movie">
        <div class="header">
            <headone></headone>
        </div>
        <div class="movB">
            <div>
                <sliderzong :sfuprops="arr" txtM="影院热映"></sliderzong>
                <sliderzong :sfuprops="arr" txtM="免费在线观影"></sliderzong>
                <sliderzong :sfuprops="arr" txtM="新片速递"></sliderzong>
            </div>
            
            <div class="movM">
                <slidfoot :foot="goodM"></slidfoot>
            </div>
            <div class="movF">
                <allfooter :allps="movieF"></allfooter>
                <!-- {{movieF}} -->
            </div>
        </div>      
    </div>
</template>
<script>
import headone from '../components/headone';
import sliderzong from '../components/slider/sliderzong';
import slidfoot from '../components/slider/slidfoot';
import allfooter from '../components/allfooter';
export default {
    components:{
        headone,
        sliderzong,
        slidfoot,
        allfooter
    },
    data(){
        return{
            arr:[],
            goodM:[],
            movieF:[]
        };
    },
    created() {
        this.axios({
            methods: "get",
            url:"/movie"
        }).then((data)=>{
            console.log(data.data.movie);
            this.arr=data.data.movie;
        }),
        this.axios({
            methods:"get",
            url:"/goodM"
        }).then((dataM)=>{
            console.log(dataM.data.goodM);
            this.goodM=dataM.data.goodM;
        }),
        this.axios({
            methods:"get",
            url:"/movieF"
        }).then((movieF)=>{
            console.log(movieF.data.movieF);
            this.movieF=movieF.data.movieF;
        })
    },
    computed:{
        
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
        margin-top: .58rem;        
        /* background: rgb(63, 205, 106); */
    }
    .movM{
        overflow: hidden;  
        /* background: greenyellow; */
    }
    .movF{
        overflow: hidden;
      
    }
</style>