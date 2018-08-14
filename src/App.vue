<template>
  <div id="app">
    <Home msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Home from './components/Home/Home.vue'

export default {
  name: 'app',
  components: {
    Home
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
