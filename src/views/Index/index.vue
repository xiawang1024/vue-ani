<template>
  <div class="index">
    <swiper :options="swiperOption" ref="mySwiper" class="swiper-wrap">
      <swiper-slide class="swiper">I'm Slide 1</swiper-slide>
      <swiper-slide class="swiper">I'm Slide 2</swiper-slide>
      <swiper-slide class="swiper">I'm Slide 3</swiper-slide>
      <swiper-slide class="swiper">I'm Slide 4</swiper-slide>
      <swiper-slide class="swiper">I'm Slide 5</swiper-slide>
      <swiper-slide class="swiper">I'm Slide 6</swiper-slide>
      <swiper-slide class="swiper">I'm Slide 7</swiper-slide>
    </swiper>
  </div>
</template>

<script>
/**
 * swiper 组件  && swiper.animate
 */
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { swiperAnimateCache, swiperAnimate } from "common/js/swiper.animate.js";

export default {
  name: "app",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        // loop : true,
        on: {
          init() {
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
          },
          slideChangeTransitionEnd() {
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
          }
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.swiper-wrap {
  height: 100vh;
}
</style>
