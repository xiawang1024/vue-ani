<!--
 * @Description: 
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2019-03-13 10:18:37
 * @LastEditTime: 2019-08-21 16:02:40
 -->
<template>
  <div class="index">
    <swiper :options="swiperOption" ref="mySwiper" class="swiper-wrap">
      <swiper-slide class="swiper">
        <Home></Home>
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
import Home from '../Home/index.vue'



export default {
  name: "app",
  components: {
    swiper,
    swiperSlide,
    Home
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
