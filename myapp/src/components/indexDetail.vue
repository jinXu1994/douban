<template>
    <div >
        <!-- <h3>{{shouyeData[0].title}}
            <span>{{shouyeData[0].loc_name}}</span>
        </h3>
        <div class="imgBox">
            <img :src="shouyeData[0].image" alt="">
        </div>
        <div>
            <div>时间</div>
            <div>
                <p></p>
            </div>
        </div> -->
         <h3>wode 
            <span>你的</span>
        </h3>
        <div class="imgBox">
            <img src="../../static/img/01.jpg" alt="">
        </div>
        <div class="xq">
            <div class="time">
                <p class="tp1">时间:</p>  
                <p>wode</p>
            </div>
            <div>
                <p></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    // props:{
    //     shouyeData:{
    //         type:Array,
    //         required:true
    //     }
    // }
}
</script>
<style scoped>
h3{
    margin: .18rem 0;
    color: #494949;
    font-weight: 700;
    font-size: .24rem;
}
h3>span{
    /* display: block; */
    width: 0.24rem;
    height: 0.18rem;
    padding: .01rem .05rem;
    margin-bottom: .03rem;
    line-height: .18rem;
    font-size: .12rem;
    color: #fff;
    background-color: #ff8263;
    border-radius: .02rem;
}
.imgBox{
    width: 100%;
    display: flex;
    justify-content: center;
}
.imgBox img{
    width: 2rem;
}
.xq{
    font-size: 0;
    padding: .1rem 0;

}
.xq p{
    float: left;
    font-size: .16rem;
}
.tp1{
    margin-right: .1rem;
}
</style>