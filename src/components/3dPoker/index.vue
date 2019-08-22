<!--
 * @Description: 3d 翻转
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2019-08-21 16:55:58
 * @LastEditTime: 2019-08-22 18:02:13
 -->
<template>
  <div :class="hoverClass">
    <div class="flipper">
      <div class="front" @click="clickPokerHandler">
        <!-- front content -->
      </div>
      <div :class="backClass" @click="secondClickHandler">
        <!-- back content -->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'pokerItem',

  data() {
    return {
      isHover: false
    }
  },
  props: {
    index: {
      type: Number,
      default: 1
    }
  },
  computed: {
    hoverClass: function () {
      return this.isHover ? `flip-container hover` : `flip-container`
    },
    backClass: function () {
      return `back back-${this.index}`
    }
  },
  methods: {
    clickPokerHandler() {
      if (!this.isHover) {
        this.isHover = true
      }
      this.$emit('clickPokerHandler', this.index)
    },
    secondClickHandler() {
      this.$emit('secondClickHandler', this.index)
    }

  }
}
</script>

<style lang='scss' scoped>
@import "../../common/scss/wap/mixin.scss";
.flip-container {
  $width: 220px;
  $height: 302px;
  width: $width;
  height: $height;
  perspective: 1000px;
  &.hover {
    .flipper {
      transform: rotateY(180deg);
    }
  }
  .flipper {
    transition: 0.8s;
    transform-style: preserve-3d;
    position: relative;
    .front,
    .back {
      position: absolute;
      top: 0;
      left: 0;
      width: $width;
      height: $height;
      backface-visibility: hidden;
    }
    .front {
      z-index: 2;
      /* for firefox 31 */
      transform: rotateY(0deg);

      //自定義
      @include bg("http://www.hndt.com/nh5/hndt/20190821/imgs/poker.png");
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    /* back, initially hidden pane */
    .back {
      transform: rotateY(180deg);

      //自定義

      &-1 {
        @include bg(
          "http://www.hndt.com/nh5/hndt/20190821/imgs/page-1-lite.png"
        );
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
      }
      &-2 {
        @include bg(
          "http://www.hndt.com/nh5/hndt/20190821/imgs/page-2-lite.png"
        );
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
      }
      &-3 {
        @include bg(
          "http://www.hndt.com/nh5/hndt/20190821/imgs/page-3-lite.png"
        );
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
      }
      &-4 {
        @include bg(
          "http://www.hndt.com/nh5/hndt/20190821/imgs/page-4-lite.png"
        );
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
      }
      &-5 {
        @include bg(
          "http://www.hndt.com/nh5/hndt/20190821/imgs/page-5-lite.png"
        );
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
      }
      &-6 {
        @include bg(
          "http://www.hndt.com/nh5/hndt/20190821/imgs/page-6-lite.png"
        );
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
      }
      &-7 {
        @include bg(
          "http://www.hndt.com/nh5/hndt/20190821/imgs/page-7-lite.png"
        );
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
      }
      &-8 {
        @include bg(
          "http://www.hndt.com/nh5/hndt/20190821/imgs/page-8-lite.png"
        );
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
      }
      &-9 {
        @include bg(
          "http://www.hndt.com/nh5/hndt/20190821/imgs/page-8-lite.png"
        );
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }
}
</style>