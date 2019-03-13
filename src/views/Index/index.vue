<template>
  <div class="index">
    <swiper :options="swiperOption" ref="mySwiper" class="swiper-wrap">
      <swiper-slide class="swiper">
        <start></start>
      </swiper-slide>
      <swiper-slide class="swiper">
        <Stick stickIndex="2"></Stick>
      </swiper-slide>
      <swiper-slide class="swiper">
        <Stick stickIndex="3"></Stick>
      </swiper-slide>
      <swiper-slide class="swiper">
        <Stick stickIndex="4"></Stick>
      </swiper-slide>
      <swiper-slide class="swiper">
        <Stick stickIndex="5"></Stick>
      </swiper-slide>
      <swiper-slide class="swiper">
        <Stick stickIndex="6"></Stick>
      </swiper-slide>
      <swiper-slide class="swiper">
        <Stick stickIndex="7"></Stick>
      </swiper-slide>
      <swiper-slide class="swiper">
        <Stick stickIndex="8"></Stick>
      </swiper-slide>
      <swiper-slide class="swiper">
        <end></end>
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
import * as swiperAni from "common/js/swiper.animate.js";

/**
 * 页面组件引入
 */
import Start from "components/start/index.vue";
import End from "components/end/index.vue";
import Stick from "components/stick/index.vue";

export default {
  name: "app",
  components: {
    swiper,
    swiperSlide,
    Start,
    End,
    Stick
  },
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        // loop : true,
        on: {
          init() {
            swiperAni.swiperAnimateCache(this); //隐藏动画元素
            swiperAni.swiperAnimate(this); //初始化完成开始动画
          },
          slideChangeTransitionEnd() {
            swiperAni.swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
          }
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.index {
  position: relative;
  width: 100%;
  height: 100%;
  .swiper-wrap {
    width: 100%;
    height: 100%;
    background: url("../../common/imgs/icon-bg.png") center center no-repeat;
    background-size: cover;
  }
}
</style>
