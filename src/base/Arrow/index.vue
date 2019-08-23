<!--
 * @Description: arrow
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2019-03-13 11:12:39
 * @LastEditTime: 2019-08-23 11:17:31
 -->
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
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 20px, 0);
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
    height: 34px;
    animation: upArrow 1.2s ease-in infinite;
    background: url("./arrow.png") center center no-repeat;
    background-size: contain;
  }
}
</style>

