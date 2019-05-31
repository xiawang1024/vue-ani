<template>
  <div class="arrow-wrap">
    <!-- <div class="start-copy"></div> -->
    <div class="icon-up"></div>
  </div>
</template>

<script>
export default {
  name: "arrow"
};
</script>

<style lang="scss" scoped>
@keyframes upArrow {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, -60px, 0);
    opacity: 0.7;
  }
}
.arrow-wrap {
  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 90px;
  // .start-copy {
  //   width: 100%;
  //   height: 137px;
  //   background: url("./icon-start-copy.png") center center no-repeat;
  //   background-size: contain;
  // }
  .icon-up {
    width: 100%;
    height: 50px;
    animation: upArrow 1.2s ease-in infinite;
    background: url("./arrow.png") center center no-repeat;
    background-size: contain;
  }
}
</style>

