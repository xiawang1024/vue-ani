<template>
  <div class="page" ref="page">
    <div class="font animated fadeInLeft delay"></div>
    <div class="light animated flash" :class="[lightSwitch]"></div>
    <div class="pic-wrap" :class="[picName]">
    </div>
  </div>
</template>

<script>
import anime from 'animejs'
export default {
  name:'Page2',
  data() {
    return {
      lightSwitch:'on',
      picName:'pic-1'
    }
  },
  mounted() {
    this.animateInit()
  },
  methods:{
    animateInit(){
      const animeTimeLine = anime.timeline()
      animeTimeLine.add({
        targets:this.$refs.page,
        backgroundColor:'#0c1219',
        easing: 'easeOutExpo',
        delay:2100,
        duration:300,
        offset:0,
        begin:() => {
          this.$nextTick(() => {
            this.lightSwitch = 'off'
          })
        }
      }).add({
        targets:'.pic-wrap',
        opacity:1,
        offset:'+=100',
        duration:100,
        easing: 'easeOutExpo',
        complete:() => {
          this.picSlide()
        }
      })    
    },
    picSlide(interval = 750) {
      let picOrder = 1,timeId=null;
      clearInterval(timeId)
      timeId = setInterval(() => {
        picOrder ++;
        if(picOrder == 6) {
          clearInterval(timeId)
        }
        let picName = `pic-${picOrder}`;
        this.$nextTick(() => {
          this.picName = picName
        })

      },interval)
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
  background: #7cb3ff;
  .delay{
    animation-delay: 0.5s;
  }
  .abs {
    position: absolute;
    left:0;
    width: 750px;
  }
  .font{
    @extend .abs;
    top:160px;
    height: 227px;
    background: url('./font.png') left 48px center no-repeat;
    background-size: contain;
  }
  .light{
    @extend .abs;
    top:0;
    height: 290px;
    &.on{
      background: url('./light-on.png') right center no-repeat;
      background-size: contain;
    }
    &.off{
      background: url('./light-off.png') right center no-repeat;
      background-size: contain;
    }
  }
  .pic-wrap{
    @extend .abs;
    opacity: 0;
    &.pic-1{
      top:450px;
      height: 563px;
      background: url('./2-1.png') center center no-repeat;
      background-size: contain;
    }
    &.pic-2{
      top:650px;
      height: 335px;
      background: url('./2-2.png') center center no-repeat;
      background-size: contain;
    }
    &.pic-3{
      top:600px;
      height: 344px;
      background: url('./2-3.png') center center no-repeat;
      background-size: contain;
    }
    &.pic-4{
      top:600px;
      height: 334px;
      background: url('./2-4.png') center center no-repeat;
      background-size: contain;
    }
    &.pic-5{
      top:600px;
      height: 430px;
      background: url('./2-5.png') center center no-repeat;
      background-size: contain;
    }
    &.pic-6{
      bottom:0;
      height: 303px;
      background: url('./2-6.png') center center no-repeat;
      background-size: contain;
    }
  }
}
</style>

