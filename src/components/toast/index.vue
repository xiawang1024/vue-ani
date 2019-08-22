<!--
 * @Description: 弹窗
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2019-08-21 18:19:29
 * @LastEditTime: 2019-08-22 10:54:38
 -->
<template>
  <div class="toast">
    <div class="content">
      <div class="head">
        <h2 class="name">亚细亚/二七商圈</h2>
        <div :class="zanClass" @click="zanHandler">
          <span v-show="isZan" class="add-one">+1</span>
        </div>
        <div class="tips"></div>
        <div class="close"></div>
      </div>
      <div class="img img-5"></div>
      <div class="text J_scroll">
        郑州“大玉米”官方名称“千玺广场”，地下4层，地上60层，主楼高达280米，被称为“中原第一高楼”。“大玉米”楼的设计灵感来自中国现存最古老的砖塔——“嵩岳寺塔”，主楼曲线与“嵩岳寺塔”吻合，是位于郑州市郑东新区CBD的一座新地标建筑，这是郑东新区名片。
        <br />郑东新区2003年破土动工，短短16年间，它已经从一片芦苇丛生的鱼塘洼地，变身为面积105平方公里、2017年固定资产投资802亿元、全口径财政收入255亿元、地方公共预算收入82亿元，位列全市第一，这是东区速度。
        郑州“大玉米”官方名称“千玺广场”，地下4层，地上60层，主楼高达280米，被称为“中原第一高楼”。“大玉米”楼的设计灵感来自中国现存最古老的砖塔——“嵩岳寺塔”，主楼曲线与“嵩岳寺塔”吻合，是位于郑州市郑东新区CBD的一座新地标建筑，这是郑东新区名片。
        <br />郑东新区2003年破土动工，短短16年间，它已经从一片芦苇丛生的鱼塘洼地，变身为面积105平方公里、2017年固定资产投资802亿元、全口径财政收入255亿元、地方公共预算收入82亿元，位列全市第一，这是东区速度。
      </div>
    </div>
  </div>
</template>

<script>
import dataList from 'views/Poker/data.js'
export default {
  name: 'toast',
  data() {
    return {
      isZan: false
    }
  },
  computed: {
    zanClass: function () {
      return this.isZan ? `zan zan-yes animated heartBeat` : `zan`
    }
  },
  methods: {
    zanHandler() {
      this.isZan = !this.isZan
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../common/scss/wap/mixin.scss";
.toast {
  position: absolute;
  z-index: 1024;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.5);
  .content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 640px;
    height: 75%;
    margin: auto;
    padding: 20px 40px 40px;
    border-radius: 20px;
    background: #ffffff;
    box-sizing: border-box;
    .head {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0;
      .name {
        font-size: 36px;
        font-weight: bold;
        color: #c19c50;
      }
      .zan {
        $size: 70px;
        position: relative;
        width: $size;
        height: $size;
        transition: all 0.2s linear;
        background: url("./zan-no.png") center center no-repeat;
        background-size: contain;

        &-yes {
          background: url("./zan-yes.png") center center no-repeat;
          background-size: contain;
        }
        @keyframes fadeInUp {
          0% {
            top: 10px;
            opacity: 0;
          }
          50% {
            top: -40px;
            opacity: 1;
            transform: scale(2);
          }
          100% {
            top: -100px;
            opacity: 0;
          }
        }
        .add-one {
          position: absolute;
          left: 20px;
          opacity: 0;
          font-size: 24px;
          color: #f4563d;
          transform: translateZ(0);
          animation: fadeInUp 0.5s linear 0.2s;
        }
      }
      .tips {
        width: 203px;
        height: 44px;
        background: url("./call.png") center center no-repeat;
        background-size: contain;
      }
      .close {
        $size: 60px;
        position: absolute;
        top: -($size)/3 * 2;
        right: -($size);
        width: $size;
        height: $size;
        background: url("./icon-close.png") center center no-repeat;
        background-size: contain;
      }
    }
    .img {
      margin-top: 25px;
      width: 100%;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
      &-1 {
        height: 431px;
        @include bg("http://www.hndt.com/nh5/hndt/20190821/imgs/page-1.png");
      }
      &-2 {
        height: 461px;
        @include bg("http://www.hndt.com/nh5/hndt/20190821/imgs/page-2.png");
      }
      &-3 {
        height: 542px;
        @include bg("http://www.hndt.com/nh5/hndt/20190821/imgs/page-3.png");
      }
      &-4 {
        height: 451px;
        @include bg("http://www.hndt.com/nh5/hndt/20190821/imgs/page-4.png");
      }
      &-5 {
        height: 222px;
        @include bg("http://www.hndt.com/nh5/hndt/20190821/imgs/page-5.png");
      }
      &-6 {
        height: 223px;
        @include bg("http://www.hndt.com/nh5/hndt/20190821/imgs/page-6.png");
      }
      &-7 {
        height: 234px;
        @include bg("http://www.hndt.com/nh5/hndt/20190821/imgs/page-7.png");
      }
      &-8 {
        height: 431px;
        @include bg("http://www.hndt.com/nh5/hndt/20190821/imgs/page-8.png");
      }
      &-9 {
        height: 431px;
        @include bg("http://www.hndt.com/nh5/hndt/20190821/imgs/page-1.png");
      }
    }
    .text {
      flex: 1;
      margin-top: 35px;
      text-align: left;
      font-size: 30px;
      line-height: 48px;
      color: #222222;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
    }
  }
}
</style>