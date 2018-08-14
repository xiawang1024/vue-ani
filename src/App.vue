<template>
  <div id="app">
    <Page3/>
  </div>
</template>

<script>
import Page3 from './components/Page3/Page3.vue'

export default {
  name: 'app',
  components: {
    Page3
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
