<template>
  <div :class="generateClass()" @click="triggleHandler">
    <audio
      id="bgm"
      autoplay
      loop
      width="0"
      height="0"
      @play="bgmPlayHandler"
      @pause="bgmPauseHandler"
      src="http://www.hndt.com/nh5/lianghui/2019/bgm.mp3"
    ></audio>
  </div>
</template>

<script>
import { audioAutoPlay } from "common/js/util.js";
export default {
  name: "bgm",
  data() {
    return {
      isPlay: true
    };
  },
  mounted() {
    let idSelect = "bgm";
    this.bgm = document.getElementById(`bgm`);
    this.bgmInit(idSelect);
  },
  methods: {
    bgmInit(idSelect) {
      this.bgm.volume = 0.2;
      audioAutoPlay(idSelect);
    },
    bgmPlayHandler() {
      this.isPlay = true;
    },
    bgmPauseHandler() {
      this.isPlay = false;
    },
    generateClass() {
      if (this.isPlay) {
        return { bgm: true, "bgm-play": true };
      } else {
        return { bgm: true, "bgm-pause": true };
      }
    },
    triggleHandler() {
      let paused = this.bgm.paused;
      if (paused) {
        this.bgm.play();
      } else {
        this.bgm.pause();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes rotate360 {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

.bgm {
  position: absolute;
  z-index: 100;
  $top: 28px;
  top: $top;
  right: $top;
  $width: 50px;
  width: $width;
  height: $width;
  &-play {
    animation: rotate360 2.5s linear infinite;
    background: url("./icon-bgm-play.png") center center no-repeat;
    background-size: cover;
  }
  &-pause {
    background: url("./icon-bgm-pause.png") center center no-repeat;
    background-size: cover;
  }
}
</style>

