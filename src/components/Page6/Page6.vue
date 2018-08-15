<template>
  <div class="page">
    <div class="cloud animated flash"></div>
    <div class="title animated flipInX"></div>
    <div class="person-1 animated fadeInLeft"></div>
    <div class="person-2 animated fadeInRight"></div>
    <div class="airplan animated fadeInRight"></div>
    <div class="bottom"></div>
  </div>
</template>
<script>
export default {
  name:'Page6'
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
  .cloud{
    @extend .abs;
    top:$top;
    height: 420px;
    background: url('./cloud.png') center center no-repeat;
    background-size: cover;
  }
  .title{
    @extend .abs;
    top:40px;
    height: 140px;
    background: url('./title.png') center center no-repeat;
    background-size: cover;
    animation-delay: 0.75s;
  }
  .person-1{
    @extend .abs;
    top:300px;
    height: 334px;
    background: url('./person-1.png') left 20px center no-repeat;
    background-size: contain; 
    animation-delay: 1.25s;
  }
  .person-2{
    @extend .abs;
    top:480px;
    height: 485px;
    background: url('./person-2.png') right 10px center no-repeat;
    background-size: contain; 
    animation-delay: 2s;
  }
  .airplan{
    @extend .abs;
    top:900px;
    height: 76px;
    background: url('./airplan.png') left 40px center no-repeat;
    background-size: contain;
    animation-delay: 2.75s;
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

