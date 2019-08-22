<!--
 * @Description: 排行榜
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2019-08-22 15:25:23
 * @LastEditTime: 2019-08-22 16:12:01
 -->
<template>
  <div class="rank-item">
    <div class="left">
      <div class="prize prize-1"></div>
      <div class="img img-1"></div>
      <div class="text-wrap">
        <h2 class="name">二七塔</h2>
        <Rate class="rate"></Rate>
      </div>
    </div>
    <div class="number">999</div>
  </div>
</template>

<script>
import Rate from 'components/rate/index.vue'
export default {
  name: 'rank-item',
  components: {
    Rate
  }
}
</script>

<style lang='scss' scoped>
@import "../../common/scss/wap/mixin.scss";
.rank-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 30px;
  @include bt-1px(#f2f2f2);
  box-sizing: border-box;
  .left {
    display: flex;
    align-items: center;
    .prize {
      width: 42px;
      height: 55px;
      &-1 {
        background: url("./rank-1.png") center center no-repeat;
        background-size: contain;
      }
      &-2 {
        background: url("./rank-2.png") center center no-repeat;
        background-size: contain;
      }
      &-3 {
        background: url("./rank-3.png") center center no-repeat;
        background-size: contain;
      }
    }
    .img {
      margin-left: 20px;
      width: 100px;
      height: 100px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
      &-1 {
        @include bg("http://www.hndt.com/nh5/hndt/20190821/imgs/p-1.png");
      }
      &-2 {
        @include bg("http://www.hndt.com/nh5/hndt/20190821/imgs/p-2.png");
      }
      &-3 {
        @include bg("http://www.hndt.com/nh5/hndt/20190821/imgs/p-3.png");
      }
      &-4 {
        @include bg("http://www.hndt.com/nh5/hndt/20190821/imgs/p-4.png");
      }
      &-5 {
        @include bg("http://www.hndt.com/nh5/hndt/20190821/imgs/p-5.png");
      }
      &-6 {
        @include bg("http://www.hndt.com/nh5/hndt/20190821/imgs/p-6.png");
      }
      &-7 {
        @include bg("http://www.hndt.com/nh5/hndt/20190821/imgs/p-7.png");
      }
      &-8 {
        @include bg("http://www.hndt.com/nh5/hndt/20190821/imgs/p-8.png");
      }
      &-9 {
        @include bg("http://www.hndt.com/nh5/hndt/20190821/imgs/p-1.png");
      }
    }
    .text-wrap {
      margin-left: 30px;
      text-align: left;
      .name {
        font-size: 34px;
        color: #222222;
      }
      .rate {
        margin-top: 19px;
      }
    }
  }
  .number {
    font-size: 36px;
    font-weight: bold;
    color: #ffbb17;
  }
}
</style>