<template>
    <div class="movie">
        <div class="header">
            <headone></headone>
        </div>
        <div class="movB">
            <div>
                <sliderzong :sfuprops="arr" txtM="最受关注图书 | 虚构类"></sliderzong>
                <sliderzong :sfuprops="arr" txtM="最受关注图书 | 非虚构类"></sliderzong>
            </div>
            
            <div class="movM">
                <slidfoot :foot="goodM"></slidfoot>
            </div>
            <div class="movF">
                <allfooter :allps="booksF"></allfooter>
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
            booksF:[]
        };
    },
    created() {
        this.axios({
            methods: "get",
            url:"/book"
        }).then((data)=>{
            console.log(data.data.books);
            this.arr=data.data.books;
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
            url:"/booksF"
        }).then((booksF)=>{
            console.log(booksF.data.booksF);
            this.booksF=booksF.data.bookF;
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