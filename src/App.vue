<template>
  <div id="app">
    <Page1/>
  </div>
</template>

<script>
import Page1 from './components/Page1/Page1.vue'

export default {
  name: 'app',
  components: {
    Page1
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
