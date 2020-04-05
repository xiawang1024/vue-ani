<template>
  <div class="index">
    <swiper :options="swiperOption" ref="mySwiper" class="swiper-wrap">
      <swiper-slide class="swiper">
        <Item :index="1" />
      </swiper-slide>
      <swiper-slide class="swiper">
        <Item :index="2" :itemData='yearData.signData'/>
      </swiper-slide>
      <swiper-slide class="swiper">
        <Item :index="3" :itemData='yearData.examinePersonData' :itemData2='yearData.examineCarData'/>
      </swiper-slide>
      <swiper-slide class="swiper">
        <Item :index="4" :itemData='yearData.trainData'/>
      </swiper-slide>
      <swiper-slide class="swiper">
        <Item :index="5" :itemData='yearData.reportData'/>
      </swiper-slide>
      <swiper-slide class="swiper">
        <Item :index="6" :user='yearData.user'/>
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

import Item from 'components/Item/index.vue'

import mockData from './mock'

export default {
  name: "app",
  components: {
    swiper,
    swiperSlide,    
    Item
  },
  data() {
    return {
      yearData:{},
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
  },
  mounted() {
    this.yearData = mockData.result
    window.getYearData = function(data) {
      this.fetchData(data)
    }
  },
  methods:{
    fetchData(data) {
      let {code,result} =data
      if(code ===0) {
        this.yearData = result
      }else {
        console.log('未接收到数据')
      }
    }
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
