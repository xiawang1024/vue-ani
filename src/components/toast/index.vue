<!--
 * @Description: 弹窗
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2019-08-21 18:19:29
 * @LastEditTime: 2019-08-21 18:38:04
 -->
<template>
  <div class="toast">
    <div class="content">
      <div class="head">
        <h2 class="name">二七塔</h2>
        <div class="zan"></div>
        <div class="tips"></div>
        <div class="close"></div>
      </div>
      <div class="img"></div>
      <div class="text"></div>
    </div>
  </div>
</template>

<script>
import dataList from 'views/Poker/data.js'
export default {
  name: 'toast'
}
</script>

<style lang='scss' scoped>
.toast {
  position: absolute;
  z-index: 1024;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.5);
  .content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 640px;
    height: 880px;
    margin: auto;
    box-sizing: border-box;
    .head {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      .name {
        font-size: 40px;
        font-weight: bold;
        color: #c19c50;
      }
      .zan {
        $size: 70px;
        width: $size;
        height: $size;
        background: url("./zan-no.png") center center no-repeat;
        background-size: contain;
        &-yes {
          background: url("./zan-yes.png") center center no-repeat;
          background-size: contain;
        }
      }
      .tips {
        width: 203px;
        height: 44px;
        background: url("./call.png") center center no-repeat;
        background-size: contain;
      }
      .close {
        $size: 60px;
        position: absolute;
        top: 0;
        right: 0;
        width: $size;
        height: $size;
        background: url("./icon-close.png") center center no-repeat;
        background-size: contain;
      }
    }
  }
}
</style>