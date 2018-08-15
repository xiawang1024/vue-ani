<template>
  <div class="page">
    <div class="font animated fadeInLeft"></div>
    <div class="person animated jello"></div>
  </div>
</template>

<script>
export default {
  name:'Page9'
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
    animation-delay: 1.2s;
  }
}
</style>

