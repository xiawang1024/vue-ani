<template>
    <div class="saveImg">
        <div>
            <img v-show="src" :src="src" alt="" class="img">
            <p class="tips">（长按图片保存 或 发送朋友）</p>
        </div>
        <div class="btn-wrap">
            <button class="btn" @click="again">再来一次</button>
            <button class="btn" @click="hideImg">关闭</button>
        </div>
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
    },
    methods:{
        again() {
            this.$emit('againHandler')
        },
        hideImg() {
            this.$emit('hideImgHandler')
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
    background: rgba(0,0,0,0.8);
    .img{
        width: 500px;
    }
    .tips{
        margin-top: 20px;
        font-size: 32px;
        color:#fff;
    }
    .btn-wrap{
        margin-top: 60px;
        .btn{
            height: 60px;
            margin: 0 30px;
            border:none;
            border-radius: 6px;
            outline: none;
            font-size: 28px;
            background: #54bcff;
            &:active{
                color:#f08;
                background: rgba(0,0,0,.3)
            }
        }

    }
}
</style>
