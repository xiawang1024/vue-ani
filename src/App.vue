<template>
  <div id="app">
    <Index></Index>
  </div>
</template>

<script>
import Index from "views/Index";
export default {
  name: "app",
  components: {
    Index
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
  height: 1334px;
  margin: auto;
  font-family: "PingFang SC", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.2s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>
