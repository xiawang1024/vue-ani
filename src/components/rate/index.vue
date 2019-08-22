<!--
 * @Description: rate
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2019-08-22 15:54:19
 * @LastEditTime: 2019-08-22 16:06:08
 -->
<template>
  <div class="rate">
    <span class="icon" v-for="item of score" :key="item"></span>
  </div>
</template>

<script>
export default {
  name: 'rate',
  props: {
    score: {
      type: Number,
      default: 6
    }
  }
}
</script>

<style lang='scss' scoped>
.rate {
  display: flex;
  align-items: center;
  .icon {
    margin-right: 8px;
    display: inline-block;
    width: 24px;
    height: 22px;
    background: url("./love.png") center center no-repeat;
    background-size: contain;
  }
}
</style>