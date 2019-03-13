<template>
  <div :class="generateClass">
    <div class="road"></div>
    <div class="stick">
      <div class="stick-text"></div>
    </div>
    <div class="tips-1">
      <div class="tips-1-2"></div>
    </div>

    <div class="title"></div>
  </div>
</template>


<script>
export default {
  name: "stickWrap",
  props: {
    // stickData: {
    //   type: Object,
    //   default: () => {
    //     return {};
    //   }
    // },
    stickIndex: {
      type: String,
      default: "2"
    }
  },
  computed: {
    generateClass: function() {
      return `stick-wrap stick-wrap-${this.stickIndex}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.stick-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  &-2 {
    .road {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 935px;
      background: url("./imgs/2/icon-2-road.png") center bottom no-repeat;
      background-size: contain;
    }
    .stick {
      position: absolute;
      bottom: 837px;
      left: 112px;
      width: 132px;
      height: 196px;
      background: url("./imgs/2/icon-2-stick.png") center center no-repeat;
      background-size: cover;
      &-text {
        position: absolute;
        right: -416px;
        bottom: -367px;
        width: 426px;
        height: 424px;
        background: url("./imgs/2/icon-2-title.png") center center no-repeat;
        background-size: cover;
      }
    }
  }
  &-3 {
    .road {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1334px;
      background: url("./imgs/3/icon-3-road.png") center bottom no-repeat;
      background-size: contain;
    }
    .stick {
      position: absolute;
      top: 0;
      right: 0;
      width: 264px;
      height: 616px;
      background: url("./imgs/3/icon-3-stick.png") center center no-repeat;
      background-size: cover;
      &-text {
        position: absolute;
        top: 260px;
        left: 60px;
        width: 154px;
        height: 80px;
        background: url("./imgs/3/icon-3-stick-tips.png") center center
          no-repeat;
        background-size: cover;
      }
    }
    .tips-1 {
      position: absolute;
      left: 0;
      top: 258px;
      width: 442px;
      height: 395px;
      background: url("./imgs/3/icon-3-tips-1.png") center center no-repeat;
      background-size: cover;
    }
    .title {
      position: absolute;
      left: 70px;
      top: 808px;
      width: 607px;
      height: 436px;
      background: url("./imgs/3/icon-3-title.png") center center no-repeat;
      background-size: cover;
    }
  }
  &-4 {
    .road {
      position: absolute;
      z-index: 2;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1024px;
      background: url("./imgs/4/icon-4-road.png") center bottom no-repeat;
      background-size: contain;
    }
    .stick {
      position: absolute;
      top: 355px;
      left: 0;
      width: 452px;
      height: 594px;
      background: url("./imgs/4/icon-4-stick.png") center center no-repeat;
      background-size: cover;
      &-text {
        position: absolute;
        z-index: 5;
        top: 280px;
        left: 230px;
        width: 362px;
        height: 308px;
        background: url("./imgs/4/icon-4-stick-tips.png") center center
          no-repeat;
        background-size: cover;
      }
    }
    .tips-1 {
      position: absolute;
      z-index: 10;
      right: 0;
      bottom: 30px;
      width: 457px;
      height: 418px;
      background: url("./imgs/4/icon-4-tips-1.png") center center no-repeat;
      background-size: cover;
    }
    .title {
      position: absolute;
      z-index: 10;
      left: 72px;
      top: 48px;
      width: 607px;
      height: 429px;
      background: url("./imgs/4/icon-4-title.png") center center no-repeat;
      background-size: cover;
    }
  }
  &-5 {
    .road {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 754px;
      background: url("./imgs/5/icon-5-road.png") center bottom no-repeat;
      background-size: contain;
    }
    .stick {
      position: absolute;
      top: 427px;
      left: 0;
      width: 718px;
      height: 568px;
      background: url("./imgs/5/icon-5-stick.png") center center no-repeat;
      background-size: cover;
      &-text {
        position: absolute;
        top: -100px;
        left: 195px;
        width: 317px;
        height: 162px;
        background: url("./imgs/5/icon-5-stick-tips.png") center center
          no-repeat;
        background-size: cover;
      }
    }
    .title {
      position: absolute;
      left: 70px;
      bottom: 39px;
      width: 607px;
      height: 429px;
      background: url("./imgs/5/icon-5-title.png") center center no-repeat;
      background-size: cover;
    }
  }
  &-6 {
    .road {
      position: absolute;

      left: 0;
      bottom: 0;
      width: 100%;
      height: 693px;
      background: url("./imgs/6/icon-6-road.png") center bottom no-repeat;
      background-size: contain;
    }
    .stick {
      position: absolute;
      z-index: 5;
      top: 64px;
      left: 136px;

      &-text {
        position: absolute;
        top: 0;
        left: 0;
        width: 444px;
        height: 161px;
        background: url("./imgs/6/icon-6-stick-tips.png") center center
          no-repeat;
        background-size: cover;
      }
    }
    .tips-1 {
      position: absolute;
      left: 0;
      top: 15px;
      width: 750px;
      height: 736px;
      background: url("./imgs/6/icon-6-tips-1.png") center center no-repeat;
      background-size: cover;
      &-2 {
        position: absolute;
        left: 90px;
        top: 220px;
        width: 480px;
        height: 135px;
        background: url("./imgs/6/icon-6-tips-2.png") center center no-repeat;
        background-size: cover;
      }
    }
    .title {
      position: absolute;

      left: 72px;
      bottom: 30px;
      width: 607px;
      height: 712px;
      background: url("./imgs/6/icon-6-title.png") center center no-repeat;
      background-size: cover;
    }
  }
  &-7 {
    .road {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 1080px;
      background: url("./imgs/7/icon-7-road.png") center bottom no-repeat;
      background-size: contain;
    }
    .stick {
      position: absolute;
      z-index: 5;
      bottom: 191px;
      left: 0;
      width: 552px;
      height: 313px;
      background: url("./imgs/7/icon-7-stick.png") center center no-repeat;
      background-size: cover;
    }
    .tips-1 {
      position: absolute;
      right: 0;
      top: 96px;
      width: 610px;
      height: 830px;
      background: url("./imgs/7/icon-7-tips-1.png") center center no-repeat;
      background-size: cover;
      &-2 {
        position: absolute;
        left: 0px;
        top: 260px;
        width: 247px;
        height: 107px;
        background: url("./imgs/7/icon-7-tips-2.png") center center no-repeat;
        background-size: cover;
      }
    }
  }
  &-8 {
    .road {
      position: absolute;
      left: 0;
      bottom: 120px;
      width: 100%;
      height: 1066px;
      background: url("./imgs/8/icon-8-road.png") center bottom no-repeat;
      background-size: contain;
    }
    .title {
      position: absolute;
      top: 162px;
      left: 72px;
      width: 607px;
      height: 1011px;
      background: url("./imgs/8/icon-8-title.png") center center no-repeat;
      background-size: cover;
    }
  }
}
</style>

