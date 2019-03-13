<template>
  <div class="index">
    <swiper :options="swiperOption" ref="mySwiper" class="swiper-wrap">
      <swiper-slide class="swiper">
        <start></start>
      </swiper-slide>
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

/**
 * 页面组件引入
 */
import Start from "components/start/index.vue";

export default {
  name: "app",
  components: {
    swiper,
    swiperSlide,
    Start
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
.index {
  width: 100%;
  .swiper-wrap {
    width: 100%;
    height: 100vh;
  }
}
</style>
