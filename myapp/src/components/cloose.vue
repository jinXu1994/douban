<template>
    <span @click="funCL()">关闭</span>
</template>
<script>
export default {
    methods: {
            funCL(){
                this.$router.go(-1)
            }
    }
}
</script>
<style scoped>
    span{       
        width: 0.365rem;
        height: 0.27rem;
        line-height: 0.27rem;
        text-align: center;
        color: #42bd56;
        font-size: 0.14rem;
        display: block;
        /* float: left; */
    }
</style>