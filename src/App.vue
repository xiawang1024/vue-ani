<template>
  <div id="app">
    <Page2/>
  </div>
</template>

<script>
import Page2 from './components/Page2/Page2.vue'

export default {
  name: 'app',
  components: {
    Page2
  }
}
</script>

<style lang="scss" scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
