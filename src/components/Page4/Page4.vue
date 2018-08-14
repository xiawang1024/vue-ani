<template>
    <div class="page">
        <div class="cloud animated flash delay-0.5s"></div>
        <div class="person-1 animated fadeIn delay-1s"></div>
        <div class="person-2 animated fadeIn delay-2s"></div>
        <div class="person-3 animated fadeIn delay-3s"></div>
        <div class="bottom"></div>
    </div>
</template>
<script>
export default {
  name:'Page1'
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
  .person-1{
    @extend .abs;
    top:200px;
    height: 440px;
    background: url('./person-1.png') left 45px center no-repeat;
    background-size: contain; 
  }
  .person-2{
    @extend .abs;
    top:480px;
    height: 487px;
    background: url('./person-2.png') right 30px center no-repeat;
    background-size: contain; 
  }
  .person-3{
    @extend .abs;
    top:750px;
    height: 247px;
    background: url('./person-3.png') left 66px center no-repeat;
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

