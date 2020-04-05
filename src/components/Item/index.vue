<template>
  <div :class="generateClass">
    <template v-if='index===1'>
      <div class='text-wrap' >
          <p class='p1 ani' swiper-animate-effect="fadeInDown"
        swiper-animate-duration="0.75s"
        swiper-animate-delay="0s">2019</p>
          <p class='p2 ani' swiper-animate-effect="fadeIn"
        swiper-animate-duration="0.75s"
        swiper-animate-delay="0.5s">交巡年度统计报告</p>
          <p class='p3 ani' swiper-animate-effect="fadeInUp"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.75s">感谢你的所有辛苦付出</p>
          <p class='p4 ani' swiper-animate-effect="fadeInUp"
        swiper-animate-duration="1s"
        swiper-animate-delay="1s">每一次我们都记得</p>
      </div>
      <div      
        class="pic ani"
        swiper-animate-effect="zoomIn"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.25s"
      ></div>
    </template>
    <template v-if='index===2'>
      <div class='text-wrap' >
          <p class='p1 ani' swiper-animate-effect="fadeInLeft"
        swiper-animate-duration="1s"
        swiper-animate-delay="0s">2019年度，您共上岗 <span class="num">{{itemData.signTotal}}</span> 天</p>
          <p class='p2 ani' swiper-animate-effect="fadeInLeft"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.5s">在所有交巡民警中排名第 <span class="num">{{itemData.sortNum}}</span> 位</p>
          <p class='p3 ani' swiper-animate-effect="fadeInLeft"
        swiper-animate-duration="1s"
        swiper-animate-delay="1s">最早上班时间是凌晨 <span class="num">{{itemData.signMinTime}}</span> 点</p>
          <p class='p4 ani' swiper-animate-effect="fadeInLeft"
        swiper-animate-duration="1s"
        swiper-animate-delay="1.5s">最晚下班时间是晚上 <span class="num">{{itemData.signMaxTime}}</span> 点</p>
      </div>
      <div      
        class="pic ani"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="0.75s"
        swiper-animate-delay="0s"
      ></div>
    </template>
    <template v-if='index===3'>
      <div class='text-wrap' >
          <p class='p1 ani' swiper-animate-effect="fadeInLeft"
        swiper-animate-duration="1s"
        swiper-animate-delay="0s">在岗时，您一共有 <span class="num">{{itemData.total+itemData2.total}}</span> 条盘查</p>
          <p class='p2 ani' swiper-animate-effect="fadeInLeft"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.5s">其中盘查了 <span class="num">{{itemData.total}}</span> 名人员，车辆 <span class="num">{{itemData2.total}}</span> 辆</p>
          <p class='p3 ani' swiper-animate-effect="fadeInLeft"
        swiper-animate-duration="1s"
        swiper-animate-delay="1s">发现了 <span class="num">{{itemData.pointTotal}}</span> 名重点人</p>
          <p class='p4 ani' swiper-animate-effect="fadeInLeft"
        swiper-animate-duration="1s"
        swiper-animate-delay="1.25s">您辛苦了</p>
      </div>
      <div      
        class="pic ani"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="0.75s"
        swiper-animate-delay="0s"
      ></div>
    </template>
    <template v-if='index===4'>
      <div class='text-wrap' >
          <p class='p1 ani' swiper-animate-effect="fadeInLeft"
        swiper-animate-duration="1s"
        swiper-animate-delay="0s">过硬的基本功是工作突出的前提</p>
          <p class='p2 ani' swiper-animate-effect="fadeInLeft"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.5s">2019年度 共上传练兵数量 <span class="num">{{itemData.total}}</span> 条</p>
          <p class='p3 ani' swiper-animate-effect="fadeInLeft"
        swiper-animate-duration="1s"
        swiper-animate-delay="1s">来欣赏一张最帅的照片</p>
      </div>
      <div      
        class="pic "
        
      >
        <div class="gan ani" swiper-animate-effect="fadeInRight"
        swiper-animate-duration="0.75s"
        swiper-animate-delay="0.25s"></div>
        <div class="people ani" swiper-animate-effect="fadeInRight"
        swiper-animate-duration="0.75s"
        swiper-animate-delay="0.5s"></div>
        <img class="cover ani"  :src="itemData.url" alt="" swiper-animate-effect="fadeIn"
        swiper-animate-duration="0.75s"
        swiper-animate-delay="1.75s">
      </div>
    </template>
    <template v-if='index===5'>
      <div class='text-wrap' >
          <p class='p1 ani' swiper-animate-effect="fadeInLeft"
        swiper-animate-duration="0.5s"
        swiper-animate-delay="0s">今年</p>
          <p class='p2 ani' swiper-animate-effect="fadeInLeft"
        swiper-animate-duration="1.5s"
        swiper-animate-delay="0.25s">您一共报备 <span class="num">{{itemData.total}}</span> 次</p>
          <p class='p3 ani' swiper-animate-effect="fadeInLeft"
        swiper-animate-duration="1s"
        swiper-animate-delay="1s">出警 <span class="num">{{itemData.reportAlarmTotal}}</span> 次，故障 <span class="num">{{itemData.reportThingTotal}}</span> 次</p>
      </div>
      <div      
        class="pic ani"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="0.75s"
        swiper-animate-delay="0s"
      >
      </div>
    </template>
    <template v-if='index===6'>
      <div class='text-wrap' >
          <p class='p1 ani' swiper-animate-effect="fadeInDown"
        swiper-animate-duration="1s"
        swiper-animate-delay="0s">警察在平安在 警察在正义在</p>
          <p class='p2 ani' swiper-animate-effect="fadeInDown"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.25s">警察在幸福在</p>
          <p class='p3 ani' swiper-animate-effect="fadeInDown"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.5s"><span class="num">{{user}}</span> 警官</p>
          <p class='p4 ani' swiper-animate-effect="fadeInDown"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.75s">在过去的一年里辛苦了</p>
          <p class='p5 ani' swiper-animate-effect="fadeInDown"
        swiper-animate-duration="1s"
        swiper-animate-delay="1s">继续努力，我们同在</p>
      </div>
      <div      
        class="pic ani"
        swiper-animate-effect="zoomIn"
        swiper-animate-duration="1s"
        swiper-animate-delay="1.5s"
      >
      </div>
    </template>
    
  </div>
</template>

<script>
export default {
  name: "colleExam",
  props: {
    itemData: {
      type: Object,
      default: () =>{
        return {}
      }
    },
    itemData2: {
      type: Object,
      default: () =>{
        return {}
      }
    },
    user: {
      type: String,
      default: ''
    },
    index:{
      type:Number,
      default:1
    }
  },
  computed: {
    generateClass: function() {
      return `item item-${this.index}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.item{
  position: relative;
  width: 100%;
  height: 100%;
  
  &-1{
    background:url('./imgs/com.png') center center no-repeat;
    background-size:cover;
    overflow:hidden;
    .text-wrap{
      text-align:center;
      .p1{
        margin-top:104px;
        font-size:70px;
        color:#61f2ff;
      }
      .p2{
        margin-top:30px;
        font-size:70px;
        color:#61f2ff;
      }
      .p3{
        margin-top:57px;
        font-size:36px;
        color:#40c2ff;
      }
      .p4{
        margin-top:16px;
        font-size:36px;
        color:#40c2ff;
      }
    }
    .pic{
      position:absolute;
      bottom:73px;
      left:250px;
      width:316px;
      height:643px;
      background:url('./imgs/p-1.png') center center no-repeat;
      background-size:contain;
    }
  }
  &-2 {
    background:url('./imgs/2.png') center center no-repeat;
    background-size:cover;
    overflow:hidden;
    .text-wrap{
      width: 100%;
      margin: 160px 0 0 62px;
      text-align: left;
      box-sizing: border-box;
      p{
        line-height: 96px;
        font-size: 36px;
        color:#40c2ff;
        .num{
          font-size: 50px;
          font-weight: normal;
          letter-spacing: 2px;
          color: #40c2ff;
        }
      }
    }
    .pic {
      position: absolute;
      left: 0;
      bottom: 120px;
      width: 100%;
      height: 526px;
      background: url('./imgs/2.2.png') center center no-repeat;
      background-size: contain;
    }
  }
  &-3 {
    background:url('./imgs/3.png') center center no-repeat;
    background-size:cover;
    overflow:hidden;
    .text-wrap{
      width: 100%;
      margin: 160px 0 0 62px;
      text-align: left;
      box-sizing: border-box;
      p{
        line-height: 96px;
        font-size: 36px;
        color:#40c2ff;
        .num{
          font-size: 50px;
          font-weight: normal;
          letter-spacing: 2px;
          color: #40c2ff;
        }
      }
    }
    .pic {
      position: absolute;
      left: 0;
      bottom: 120px;
      width: 100%;
      height: 480px;
      background: url('./imgs/3.3.png') center center no-repeat;
      background-size: contain;
    }
  }
  &-4 {
    background:url('./imgs/4.png') center center no-repeat;
    background-size:cover;
    overflow:hidden;
    .text-wrap{
      width: 100%;
      margin: 130px 0 0 62px;
      text-align: left;
      box-sizing: border-box;
      p{
        line-height: 96px;
        font-size: 36px;
        color:#40c2ff;
        .num{
          font-size: 50px;
          font-weight: normal;
          letter-spacing: 2px;
          color: #40c2ff;
        }
      }
    }
    .pic {
      position: absolute;
      left: 0;
      bottom:40px;
      width: 100%;
      height: 968px;
      .gan{
        position: absolute;
        right: 0;
        bottom:0;
        width: 395px;
        height: 968px;
        background: url('./imgs/4.4.png') center center no-repeat;
        background-size: contain;
      }
      .people{
        position: absolute;
        right: 95px;
        bottom:20px;
        width: 286px;
        height: 506px;
        background: url('./imgs/p-2.png') center center no-repeat;
        background-size: contain;
      }
      .cover{
        position: absolute;
        left:50%;
        transform: translate(-50%);
        top:160px;
        max-width: 500px;
        max-height: 700px;
        border:22px solid #611aa3;
      }
     
    }
  }
  &-5 {
    background:url('./imgs/5.png') center center no-repeat;
    background-size:cover;
    overflow:hidden;
    .text-wrap{
      width: 100%;
      margin: 130px 0 0 62px;
      text-align: left;
      box-sizing: border-box;
      p{
        line-height: 96px;
        font-size: 36px;
        color:#40c2ff;
        .num{
          font-size: 50px;
          font-weight: normal;
          letter-spacing: 2px;
          color: #40c2ff;
        }
      }
    }
    .pic {
      position: absolute;
      left: 0;
      bottom: 120px;
      width: 100%;
      height: 480px;
      background: url('./imgs/5.5.png') center center no-repeat;
      background-size: contain;
    }
  }
  &-6 {
    background:url('./imgs/6.png') center center no-repeat;
    background-size:cover;
    overflow:hidden;
    .text-wrap{
      width: 100%;
      margin: 130px 0 0 0;
      text-align: center;
      box-sizing: border-box;
      p{
        line-height: 96px;
        font-size: 30px;
        color:#40c2ff;
        .num{
          font-size: 40px;
          font-weight: normal;
          letter-spacing: 2px;
          color: #40c2ff;
        }
      }
    }
    .pic {
      position:absolute;
      bottom:73px;
      left:250px;
      width:316px;
      height:643px;
      background:url('./imgs/p-1.png') center center no-repeat;
      background-size:contain;
    }
  }
  
}
</style>

