<!--
 * @Description: 撲克牌
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2019-08-21 15:01:38
 * @LastEditTime: 2019-08-21 18:35:00
 -->
<template>
  <div class="poker">
    <div class="item-wrap">
      <PokerItem class="item" v-for="item of pokerList" :key="item.id" :index="item.id"></PokerItem>
    </div>
    <button class="rank-btn">地标排行榜</button>
    <Toast></Toast>
  </div>
</template>

<script>
import shuffle from 'lodash.shuffle'
import PokerItem from 'components/3dPoker/index'
import Toast from 'components/toast/index'
import dataList from './data'
export default {
  name: 'poker',
  components: { PokerItem, Toast },

  computed: {
    pokerList: function () {
      return shuffle(dataList)
    }
  },

}
</script>

<style lang='scss' scoped>
@import "../../common/scss/wap/mixin.scss";
.poker {
  position: relative;
  width: 100%;
  height: 100%;
  @include bg("http://www.hndt.com/nh5/hndt/20190821/imgs/bg-1.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  .item-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding: 80px 25px 0;
    box-sizing: border-box;
    .item {
      margin-bottom: 30px;
    }
  }
  .rank-btn {
    margin-top: 10px;
    width: 200px;
    height: 60px;
    border: 2 solid #ffeab0;
    border-radius: 20px;
    font-size: 28px;
    color: #ffeab0;
    background: none;
    outline: none;
    appearance: none;
    user-select: none;
    box-sizing: border-box;
  }
}
</style>