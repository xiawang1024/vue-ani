<template>
  <div class="index">
    <swiper :options="swiperOption" ref="mySwiper" class="swiper-wrap">
      <swiper-slide class="swiper">
        <Scenes :index="1"/>
      </swiper-slide>
      <swiper-slide class="swiper">
        <ColleExam :index="2"/>
      </swiper-slide>
      <swiper-slide class="swiper">
        <ColleExam :index="3"/>
      </swiper-slide>
      <swiper-slide class="swiper">
        <ColleExam :index="4"/>
      </swiper-slide>
      <swiper-slide class="swiper">
        <ColleExam :index="5"/>
      </swiper-slide>
      <swiper-slide class="swiper">
        <ColleExam :index="6"/>
      </swiper-slide>
      <swiper-slide class="swiper">
        <Scenes :index="2"/>
      </swiper-slide>
      <swiper-slide class="swiper">
        <ColleExam :index="7"/>
      </swiper-slide>
      <swiper-slide class="swiper">
        <ColleExam :index="8"/>
      </swiper-slide>
      <swiper-slide class="swiper">
        <ColleExam :index="9"/>
      </swiper-slide>
      <swiper-slide class="swiper">
        <Scenes :index="3"/>
      </swiper-slide>
      <swiper-slide class="swiper">
        <ColleExam :index="10"/>
      </swiper-slide>
      <swiper-slide class="swiper">
        <ColleExam :index="11"/>
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

import Scenes from "components/Scenes/index.vue";
import ColleExam from "components/ColleExam/index.vue";

export default {
  name: "app",
  components: {
    swiper,
    swiperSlide,
    Scenes,
    ColleExam
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
  }
}
</style>
