<template>
  <div class="page">
    <div class="cloud animated flash"></div>
    <div class="bottom"></div>
    <div class="font-1 animated zoomIn"></div>
    <div class="font-2 animated rollIn"></div>
    <div class="person animated fadeInRight"></div>
    <img class="qrcode animated fadeIn delay-3s" :src="qrcode">
  </div>
</template>
<script>
export default {
  name:'Page7',
  data() {
    return {
      qrcode:require('../../common/imgs/weixin-qrcode.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.page{
  position: absolute;
  top:0;
  bottom:0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #9bd8ff;
  .qrcode{
    position: absolute;
    bottom:20px;
    right: 20px;
    width: 120px;
    height: 120px;
  }
  $top : 0;
  .abs {
    position: absolute;
    left:0;
    width: 750px;
  }
  .cloud{
    @extend .abs;
    top:$top;
    height: 450px;
    background: url('./cloud.png') center center no-repeat;
    background-size: cover;
  }
  .font-1{
    @extend .abs;
    top:100px;
    height: 387px;
    background: url('./7-2.png') center center no-repeat;
    background-size: contain;
    animation-delay: 1s;
  }
  .font-2{
    @extend .abs;
    top:580px;
    height: 350px;
    background: url('./7-3.png') left 60px center no-repeat;
    background-size: contain;
    animation-delay: 1.5s;
  }
  .person{
    @extend .abs;
    top:450px;
    height: 621px;
     background: url('./7-1.png') right 20px center no-repeat;
    background-size: contain;
    animation-delay: 0.25s;
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

