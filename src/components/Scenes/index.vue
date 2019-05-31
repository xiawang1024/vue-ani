<template>
  <div :class="generateClass">
    <div class="label"></div>
    <div class="text"></div>
    <div class="pic"></div>
  </div>
</template>
<script>
export default {
  name: "scenes",
  props: {
    index: {
      type: String,
      default: "1"
    }
  },
  computed: {
    generateClass: function() {
      return `scenes scenes-${this.index}`;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../common/scss/wap/mixin.scss";
.scenes {
  position: relative;
  width: 100%;
  height: 100%;
  @include bg("http://www.hndt.com/nh5/xinwen/20190531/imgs/scene-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  .label {
    position: absolute;
    top: 213px;
    left: 0;
    width: 100%;
    height: 506px;
    @include bg("http://www.hndt.com/nh5/xinwen/20190531/imgs/scene-label.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .text {
    position: absolute;
    top: 733px;
    left: 0;
    width: 100%;
  }
  .pic {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  &-1 {
    .text {
      height: 107px;
      background: url("http://www.hndt.com/nh5/xinwen/20190531/imgs/scene-text-1.png")
        center center no-repeat;
      background-size: contain;
    }
    .pic {
      height: 333px;
      @include bg(
        "http://www.hndt.com/nh5/xinwen/20190531/imgs/scene-pic-1.png"
      );
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  &-2 {
    .text {
      height: 60px;
      background: url("http://www.hndt.com/nh5/xinwen/20190531/imgs/scene-text-2.png")
        center center no-repeat;
      background-size: contain;
    }
    .pic {
      height: 392px;
      @include bg(
        "http://www.hndt.com/nh5/xinwen/20190531/imgs/scene-pic-2.png"
      );
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  &-3 {
    .text {
      height: 60px;
      background: url("http://www.hndt.com/nh5/xinwen/20190531/imgs/scene-text-3.png")
        center center no-repeat;
      background-size: contain;
    }
    .pic {
      height: 294px;
      @include bg(
        "http://www.hndt.com/nh5/xinwen/20190531/imgs/scene-pic-3.png"
      );
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
}
</style>

