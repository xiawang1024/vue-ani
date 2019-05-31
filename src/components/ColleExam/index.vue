<template>
  <div :class="generateClass">
    <div
      class="pic ani"
      swiper-animate-effect="fadeInUp"
      swiper-animate-duration="0.75s"
      swiper-animate-delay="0s"
    ></div>
  </div>
</template>

<script>
export default {
  name: "colleExam",
  props: {
    index: {
      type: Number,
      default: 1
    }
  },
  computed: {
    generateClass: function() {
      return `colle-exam colle-exam-${this.index}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.colle-exam {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("http://www.hndt.com/nh5/xinwen/20190531/imgs/border.png")
    center center no-repeat;
  background-size: 718px auto;
  .pic {
    width: 100%;
    height: 100%;
  }
  &-2 {
    .pic {
      background: url("http://www.hndt.com/nh5/xinwen/20190531/imgs/2.png")
        center center no-repeat;
      background-size: auto 889px;
    }
  }
  &-3 {
    .pic {
      background: url("http://www.hndt.com/nh5/xinwen/20190531/imgs/3.png")
        center center no-repeat;
      background-size: auto 1126px;
    }
  }
  &-4 {
    .pic {
      background: url("http://www.hndt.com/nh5/xinwen/20190531/imgs/4.png")
        center center no-repeat;
      background-size: auto 806px;
    }
  }
  &-5 {
    .pic {
      background: url("http://www.hndt.com/nh5/xinwen/20190531/imgs/5.png")
        center center no-repeat;
      background-size: auto 636px;
    }
  }
  &-6 {
    .pic {
      background: url("http://www.hndt.com/nh5/xinwen/20190531/imgs/6.png")
        center center no-repeat;
      background-size: auto 701px;
    }
  }
  &-7 {
    .pic {
      background: url("http://www.hndt.com/nh5/xinwen/20190531/imgs/7.png")
        center center no-repeat;
      background-size: auto 971px;
    }
  }
  &-8 {
    .pic {
      background: url("http://www.hndt.com/nh5/xinwen/20190531/imgs/8.png")
        center center no-repeat;
      background-size: auto 874px;
    }
  }
  &-9 {
    .pic {
      background: url("http://www.hndt.com/nh5/xinwen/20190531/imgs/9.png")
        center center no-repeat;
      background-size: auto 1026px;
    }
  }
  &-10 {
    .pic {
      background: url("http://www.hndt.com/nh5/xinwen/20190531/imgs/10.png")
        center center no-repeat;
      background-size: auto 827px;
    }
  }
  &-11 {
    .pic {
      background: url("http://www.hndt.com/nh5/xinwen/20190531/imgs/11.png")
        center center no-repeat;
      background-size: auto 866px;
    }
  }
}
</style>

