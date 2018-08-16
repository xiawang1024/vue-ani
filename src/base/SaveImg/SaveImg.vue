<template>
    <div class="saveImg">
        <img v-show="src" :src="src" alt="" class="img">
        <p class="tips">长按保存 或 发送朋友</p>
    </div>
</template>

<script>
export default {
    name:'SaveImg',
    props:{
        src:{
            type:String,
            default:''
        }
    }
}
</script>


<style lang="scss" scoped>
.saveImg{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    padding:30px;
    box-sizing: border-box;
    font-size: 0;
    text-align: center;
    background: rgba(0,0,0,0.75);
    .img{
        width: 400px;
    }
    .tips{
        margin-top: 20px;
        font-size: 32px;
        color:#fff;
    }
}
</style>
