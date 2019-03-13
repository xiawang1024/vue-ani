<template>
  <div class="start">
    <div class="theme">
      <div class="stick"></div>
    </div>
    <arrow></arrow>
  </div>
</template>

<script>
import Arrow from "base/Arrow/index.vue";
export default {
  name: "start",
  components: {
    Arrow
  }
};
</script>
<style lang="scss" scoped>
@keyframes stickRotate {
  0% {
    transform: rotate(-20deg);
    transform-origin: bottom center;
  }
  50% {
    transform: rotate(20deg);
    transform-origin: bottom center;
  }
  100% {
    transform: rotate(-20deg);
    transform-origin: bottom center;
  }
}
.start {
  position: relative;
  width: 100%;
  height: 100%;
  .theme {
    position: absolute;
    top: 280px;
    left: 123px;
    width: 492px;
    height: 710px;
    background: url("./icon-1.png") center center no-repeat;
    background-size: cover;
    .stick {
      position: absolute;
      top: -75px;
      left: 15px;
      width: 104px;
      height: 198px;
      animation: stickRotate 1.5s ease-in infinite;
      background: url("./icon-1-stick.png") center center no-repeat;
      background-size: cover;
    }
  }
}
</style>


