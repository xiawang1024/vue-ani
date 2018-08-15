<template>
  <div class="page">
    <div class="top animated fadeIn"></div>
    <div class="title animated fadeInDown"></div>
    <div class="bottom animated fadeInUp"></div>
    <div class="person animated fadeInLeft"></div>
    <div class="song animated jackInTheBox"></div>
    <img class="qrcode animated fadeIn delay-4s" :src="qrcode">
  </div>
</template>

<script>
export default {
  name:'Page5',
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
  background: #ffffff;
  .delay-03{
    animation-delay: 0.3s;
  }
  .qrcode{
    position: absolute;
    bottom:20px;
    right: 20px;
    width: 120px;
    height: 120px;
  }
  .abs {
    position: absolute;
    left:0;
    width: 750px;
  }
  .top{
    @extend .abs;
    top:0;
    height: 600px;
    background: url('./top.png') center top no-repeat;
    background-size: cover;
  }
  .title{
    @extend .abs;
    top:180px;
    height: 158px;
    background: url('./title.png') center center no-repeat;
    background-size: contain;
  }
  .bottom{
    @extend .abs;
    bottom:0;
    height: 188px;
    background: url('./bottom.png') center center no-repeat;
    background-size: cover;
    animation-delay: 0.25s;
  }
  .person{
    @extend .abs;
    bottom:60px;
    height: 476px;
    background: url('./person.png') left 40px center no-repeat;
    background-size: contain;
    animation-delay: 0.75s;
  }
  .song{
    @extend .abs;
    bottom:340px;
    height: 420px;
    background: url('./song.png') right 120px center no-repeat;
    background-size: contain;
    animation-delay: 1.25s;
  }
}
</style>

