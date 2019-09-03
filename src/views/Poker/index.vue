<!--
 * @Description: 撲克牌
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2019-08-21 15:01:38
 * @LastEditTime: 2019-09-03 11:47:44
 -->
<template>
  <div class="poker">
    <div class="item-wrap">
      <PokerItem
        class="item ani"
        swiper-animate-effect="fadeInLeft"
        swiper-animate-duration="0.5s"
        :swiper-animate-delay="animateDelay(index)"
        v-for="(item,index) of pokerList"
        :key="item.id"
        :index="item.id"
        @clickPokerHandler="clickPokerHandler"
        @secondClickHandler="secondClickHandler"
      ></PokerItem>
    </div>
    <button
      class="rank-btn ani"
      @click="goToRank"
      swiper-animate-effect="fadeInDown"
      swiper-animate-duration="0.5s"
      :swiper-animate-delay="animateDelay(10)"
    >地标排行榜</button>
    <Toast
      :isOpen="isOpen"
      :isZan="isZan"
      :pokerId="pokerId"
      @closeHandler="closeHandler"
      @zanYesHandler="zanYesHandler"
      @zanNoHandler="zanNoHandler"
    ></Toast>
  </div>
</template>

<script>

import shuffle from 'lodash.shuffle'
import PokerItem from 'components/3dPoker/index'
import Toast from 'components/toast/index'
import dataList from './data'

import { getZanStatusList, voteHandler } from '@api/index.js'

export default {
  name: 'poker',
  components: { PokerItem, Toast },
  data() {
    return {
      isOpen: false,
      pokerId: 1,
      isZan: false,
      zanStatusList: []
    }
  },
  computed: {
    pokerList: function () {
      return shuffle(dataList)
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  },

  mounted() {
    setTimeout(() => {
      this._getZanStatusList()
    }, 1000)
  },

  methods: {
    _getZanStatusList() {
      getZanStatusList().then(res => {
        let { code, result } = res.data
        if (code === 0) {
          this.zanStatusList = result
        }
      })
    },
    /**
     * 翻牌相关事件
     */
    clickPokerHandler(id) {
      this.filterIsZan(id)
      this.pokerId = id
      this.timer = setTimeout(() => {
        this.isOpen = true
      }, 750)
    },
    secondClickHandler(id) {
      this.filterIsZan(id)
      this.pokerId = id
      this.isOpen = true
    },

    /**
     * 根据地标id过滤点赞状态
     */
    filterIsZan(id) {
      this.isZan = this.zanStatusList.includes(id) ? true : false
    },
    /**
     * 关闭弹窗
     */
    closeHandler() {
      this.isOpen = false
    },
    /**
     * 点赞相关事件
     */
    zanYesHandler() {
      this.isZan = true
      voteHandler(this.pokerId).then(res => {
        let { code } = res.data
        if (code === 0) {
          this._getZanStatusList()
        }
      })
    },
    zanNoHandler() {
      // this.isZan = false
      alert('请分享给更多人为地标打call')
    },
    //跳转到地表排行榜
    goToRank() {
      this.$router.push('/rank')
    },
    /**
     * 动画延迟开始时间
     */
    animateDelay(index) {
      return `${(index + 1) * 0.25}s`
    }
  }

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
    margin-top: 15px;
    width: 200px;
    height: 60px;
    border: 2px solid #ffeab0;
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