<template>
  <div class="page">
    <div class="cloud animated flash"></div>
    <div class="font-1 animated fadeInRight"></div>
    <div class="font-2 animated fadeInLeft"></div>
    <div class="bottom"></div>
    <div class="font animated rotateInDownLeft"></div>
    <div class="person animated fadeInRight"></div>
    <img class="qrcode animated fadeIn delay-3s" :src="qrcode">
  </div>
</template>
<script>
export default {
  name:'Page1',
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
    top:200px;
    height: 118px;
    background: url('./font-1.png') right 35px center no-repeat;
    background-size: contain;
    animation-delay: 0.25s;
  }
  .font-2{
    @extend .abs;
    top:350px;
    height: 118px;
    background: url('./font-2.png') left 35px center no-repeat;
    background-size: contain;
    animation-delay: 0.75s;
  }
  .font{
    @extend .abs;
    top:550px;
    height: 328px;
     background: url('./font.png') left 35px center no-repeat;
    background-size: contain;
    animation-delay: 1.25s;
  }
  .person{
    @extend .abs;
    top:750px;
    height: 271px;
     background: url('./person.png') right 35px center no-repeat;
    background-size: contain;
    animation-delay: 1s;
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

