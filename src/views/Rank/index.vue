<!--
 * @Description: rank
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2019-08-20 18:07:44
 * @LastEditTime: 2019-08-23 10:57:00
 -->
<template>
  <div class="rank">
    <div class="content">
      <div class="head">
        <div class="prize"></div>
      </div>
      <div class="main J_scroll">
        <RankItem v-for="(item,index) of rankList" :key="item.id" :item="item" :rankIdx="index"></RankItem>
      </div>
    </div>
  </div>
</template>

<script>


import RankItem from 'components/rankItem/index.vue'
import dataList from 'views/Poker/data.js'

import { getRankList } from '@api/index.js'

export default {
  name: "rank",
  components: {
    RankItem
  },
  data() {
    return {
      rankList: []
    }
  },
  mounted() {
    this._getRankList()
  },
  methods: {
    _getRankList() {
      getRankList().then(res => {
        let { code, result } = res.data
        if (code === 0) {
          this.rankList = this.setDataList(result)
        }
      })
    },
    setDataList(data) {
      let newDataList = []
      data.forEach(item => {
        item.name = dataList[item.id - 1]['name']
        newDataList.push(item)
      });
      return newDataList
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../common/scss/wap/mixin.scss";
.rank {
  position: relative;
  width: 100%;
  height: 100%;
  @include bg("http://www.hndt.com/nh5/hndt/20190821/imgs/bg-1.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  .content {
    position: absolute;
    top: 70px;
    left: 30px;
    bottom: 0;
    width: 690px;
    display: flex;
    flex-direction: column;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background: #fff;
    box-sizing: border-box;
    .head {
      position: relative;
      top: -40px;
      display: flex;
      width: 100%;
      height: 89px;
      background: url("./rank-title.png") center center no-repeat;
      background-size: contain;
      .prize {
        position: absolute;
        top: 0px;
        right: 90px;
        width: 60px;
        height: 80px;
        background: url("./prize.png") center center no-repeat;
        background-size: contain;
      }
    }
    .main {
      flex: 1;
      padding-bottom: 30px;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
    }
  }
}
</style>
