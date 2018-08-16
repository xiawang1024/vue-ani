<template>
  <div class="page">
    <div class="font animated fadeInLeft"></div>
    <div class="person"></div>
    <div class="person-1"></div>
    <img class="qrcode animated fadeIn delay-2s" :src="qrcode">
  </div>
</template>

<script>
import anime from 'animejs'
export default {
  name:'Page9',
  data() {
    return {
      qrcode:require('../../common/imgs/weixin-qrcode.png')
    }
  },
  mounted() {
    this.animeInit()
  },
  methods:{
    animeInit() {
      const animeTimeLine = anime.timeline()
      animeTimeLine.add({
        targets:'.person',
        opacity:[0,1,0],
        delay:0,
        duration:2200,
        easing:'easeOutExpo'
      }).add({
        targets:'.person-1',
        opacity:1,
        easing:'easeOutExpo'
      })
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
  background: url('./9-1.png') center center no-repeat #ffffff;
  background-size: cover;
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
  .font{
    @extend .abs;
    top:60px;
    height: 600px;
    background:url('./font.png') left 55px center no-repeat;
    background-size: contain; 
  }
  .person{
    @extend .abs;
    top:650px;
    height: 430px;
    background:url('./person.png') center center no-repeat;
    background-size: contain; 
    opacity: 0;
  }
  .person-1{
    @extend .abs;
    top:720px;
    height: 300px;
    background:url('./person-1.png') center center no-repeat;
    background-size: contain; 
    opacity: 0;
  }
}
</style>

