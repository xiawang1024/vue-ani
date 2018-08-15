<template>
  <div class="page">
    <div class="cloud animated flash"></div>
    <div class="bottom"></div>
    <div class="animated fadeOut delay-3">
      <div class="finger-1 animated fadeInLeft"></div>
      <div class="finger-2 animated fadeInLeft"></div>
      <div class="finger-3 animated fadeInLeft"></div>
      <div class="person animated fadeIn"></div>
    </div>
    <div class="hotdog animated fadeIn delay-3"></div>
  </div>
</template>
<script>
export default {
  name:'Page3'
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
  $top : 0;
  .abs {
    position: absolute;
    left:0;
    width: 750px;
  }
  .delay-3{
    animation-delay: 3.25s;
  }
  .cloud{
    @extend .abs;
    top:$top;
    height: 334px;
    background: url('./cloud.png') center center no-repeat;
    background-size: cover;
  }
  .finger-1{
    @extend .abs;
    top:420px;
    height: 187px;
    background: url('./finger-1.png') left 92px center no-repeat;
    background-size: contain;
    animation-delay: 0.5s;
  }
  .finger-2{
    @extend .abs;
    top:630px;
    height: 177px;
    background: url('./finger-2.png') left 40px center no-repeat;
    background-size: contain;
    animation-delay: 1.25s;
  }
  .finger-3{
    @extend .abs;
    top:800px;
    height: 192px;
    background: url('./finger-3.png') left 200px center no-repeat;
    background-size: contain;
    animation-delay: 2s;
  }
  .hotdog{
    @extend .abs;
    top:380px;
    height: 660px;
    background: url('./hotdog.png') center center no-repeat;
    background-size: contain;
  }
  .person{
    @extend .abs;
    top:400px;
    height: 700px;
     background: url('./person.png') right 50px center no-repeat;
    background-size: contain;
    animation-delay: 0.75s;
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

