<template>
    <div class="page">
        <div class="cloud animated flash"></div>
        <div class="bottom"></div>
        <div class="font-1 animated zoomIn"></div>
        <div class="font-2 animated zoomIn"></div>
        <div class="person-1 animated fadeIn"></div>
        <div class="person-2 animated fadeInRight"></div>
    </div>
</template>
<script>
export default {
  name:'Page8'
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
    height: 450px;
    background: url('./cloud.png') center center no-repeat;
    background-size: cover;
  }
  .font-1{
    @extend .abs;
    top:200px;
    height: 86px;
    background: url('./font-1.png') left 30px center no-repeat;
    background-size: contain;
    animation-delay: 1s;
  }
  .font-2{
    @extend .abs;
    top:60px;
    height: 77px;
    background: url('./font-2.png') right 60px center no-repeat;
    background-size: contain;
    animation-delay: 1.25s;
  }
  .person-1{
    @extend .abs;
    top:60px;
    height: 787px;
    background: url('./person-1.png') center center no-repeat;
    background-size: cover;
    animation-delay: 0.5s;
  }
  .person-2{
    @extend .abs;
    bottom:120px;
    height: 285px;
     background: url('./person-2.png') right 40px center no-repeat;
    background-size: contain;
    animation-delay: 1.5s;
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

