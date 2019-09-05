<!--
 * @Description: 首页
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2019-08-21 15:01:31
 * @LastEditTime: 2019-09-05 15:21:54
 -->
<template>
  <div class="home">
    <div
      class="title ani"
      swiper-animate-effect="fadeIn"
      swiper-animate-duration="0.75s"
      swiper-animate-delay="0s"
    >
      <div
        class="font ani"
        swiper-animate-effect="flip"
        swiper-animate-duration="1.5s"
        swiper-animate-delay="1s"
      ></div>
    </div>
    <div
      class="logo ani"
      swiper-animate-effect="fadeInUp"
      swiper-animate-duration="0.75s"
      swiper-animate-delay="0.5s"
    ></div>
    <Arrow></Arrow>
  </div>
</template>

<script>
import Arrow from "base/Arrow/index.vue";
export default {
  name: 'home',
  components: {
    Arrow
  }
}
</script>

<style lang="scss" scoped>
@import "../../common/scss/wap/mixin.scss";
.home {
  position: relative;
  width: 100%;
  height: 100%;
  @include bg("http://www.hndt.com/nh5/hndt/20190821/imgs/bg-0.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  .title {
    position: absolute;
    top: 220px;
    left: 0;
    width: 100%;
    height: 795px;
    @include bg("http://www.hndt.com/nh5/hndt/20190821/imgs/title.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    .font {
      position: absolute;
      top: 136px;
      right: 215px;
      width: 98px;
      height: 91px;
      @include bg("http://www.hndt.com/nh5/hndt/20190821/imgs/font.png");
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
      animation-iteration-count: 2;
      transform: translateZ(0);
    }
  }
  .logo {
    position: absolute;
    bottom: 80px;
    left: 0;
    width: 100%;
    height: 85px;
    background: url("http://www.hndt.com/nh5/hndt/20190821/imgs/root-logo.png")
      center center no-repeat;
    background-size: contain;
  }
}
</style>