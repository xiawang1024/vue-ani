<!--
 * @Description: app
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2019-03-13 08:54:36
 * @LastEditTime: 2019-09-05 15:07:44
 -->
<template>
  <div id="app">
    <!-- <Index></Index> -->
    <!-- <Bgm></Bgm> -->
    <!-- <Arrow /> -->
    <!-- <transition name="fade" mode="out-in"></transition> -->
    <router-view />
  </div>
</template>

<script>
import Index from "views/Index";
import Bgm from "base/Bgm/index.vue";
// import Arrow from "base/Arrow/index.vue";
export default {
  name: "app",
  components: {
    Index,
    Bgm,
    // Arrow
  }
};
</script>

<style lang="scss">
#app {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 750px;
  max-width: 750px;
  height: 100%;
  margin: auto;
  font-family: "PingFang SC", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}
.page-desc {
  margin-bottom: 8px;
}
.number {
  color: #c19c50;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.05s ease-in;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
