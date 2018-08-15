<template>
  <div class="home">
    <div class="cloud"></div>
    <div class="title"></div>
    <div class="font-1"></div>
    <div class="font-2"></div>
    <div class="bottom"></div>
    <div class="button animated tada infinite" @click="clickHandler"></div>
    <div class="qrcode-font-top"></div>
    <div class="qrcode">
      <img src="./qrcode.png" alt="" class="img">
    </div>
    <div class="qrcode-font-bottom"></div>
  </div>
</template>

<script>
import anime from 'animejs'
export default {
  name: 'Home',
  mounted() {
    // anime({
    //   targets: '.button',
    //   scale: {
    //     value: 1.215,
    //     duration: 1600,
    //     delay: 800,
    //     easing: 'easeInOutQuart'
    //   },
    //   loop:true
    // });
  },
  methods:{
    clickHandler(){
      this.$emit('startHandler')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home{
  position: absolute;
  top:0;
  bottom:0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #9bd8ff;
  $top : 0;
  .abs {
    position: absolute;
    left:0;
    width: 750px;
  }
  .cloud{
    @extend .abs;
    top:$top;
    height: 470px;
    background: url('./cloud.png') center center no-repeat;
    background-size: cover;
  }
  .title{
    @extend .abs;
    top:$top + 58px;
    height: 263px;
    background: url('./title.png') center center no-repeat;
    background-size: contain;
  }
  .font-1{
    @extend .abs;
    top:423px;
    height: 55px;
    background: url('./font-1.png') center center no-repeat;
    background-size: contain;
  }
  .font-2{
    @extend .abs;
    top:510px;
    height: 29px;
    background: url('./font-2.png') center center no-repeat;
    background-size: contain;
  }
  .button{
    @extend .abs;
    top:588px;
    height: 97px;
    background: url('./button.png') center center no-repeat;
    background-size: contain;
  }
  .qrcode-font-top{
    @extend .abs;
    top:728px;
    height: 62px;
    background: url('./qrcode-top.png') center center no-repeat;
    background-size: contain;
  }
  .qrcode{
    @extend .abs;
    top:800px;
    height: 244px;
    text-align: center;
    font-size: 0;
    .img{
      width: 244px;
      height: 244px;
    }
  }
  .qrcode-font-bottom{
    @extend .abs;
    top:1060px;
    height: 29px;
    background: url('./qrcode-bottom.png') center center no-repeat;
    background-size: contain;
  }
  .bottom{
    @extend .abs;
    bottom: 0;
    height: 193px;
    background: url('./bottom.png') center center no-repeat;
    background-size: contain;
  }
  
}
</style>
