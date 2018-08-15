<template>
  <div id="app">
    <Home v-on:startHandler="startHandler" v-show="!isShow" />
    <transition name="fade">
      <component v-show="isShow" :is="componentName"></component>
    </transition>
    <loading v-show="isLoading"></loading>
  </div>
</template>

<script>
import Loading from './base/Loading/Loading'

import Home from './components/Home/Home.vue'
import Page1 from './components/Page1/Page1.vue'
import Page2 from './components/Page2/Page2.vue'
import Page3 from './components/Page3/Page3.vue'
import Page4 from './components/Page4/Page4.vue'
import Page5 from './components/Page5/Page5.vue'
import Page6 from './components/Page6/Page6.vue'
import Page7 from './components/Page7/Page7.vue'
import Page8 from './components/Page8/Page8.vue'
import Page9 from './components/Page9/Page9.vue'

export default {
  name: 'app',
  components: {
    Loading,
    Home,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Page8,
    Page9
  },
  data() {
    return {
      componentId:1,
      isShow:false,
      isLoading:false
    }
  },
  computed: {
    componentName:function () {      
      // return `Page9`
      return `Page${this.componentId}`
    }
  },
  methods:{
    startHandler() {
      this.isLoading = true;
      let componentId = this.rand();
      this.$nextTick(() => {
        this.show(componentId)        
      })
    },
    show(componentId) {
      setTimeout(() => {
        this.isLoading = false;
        this.componentId = componentId;
        this.isShow = true;
      },1500)
    },
    rand(n = 9) {
      return (Math.floor(Math.random() * n + 1))
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden; 
  .fade-enter-active, .fade-leave-active {
    transition: opacity .25s;
  }
  .fade-enter, .fade-leave-to  {
    opacity: 0;
  }
}
</style>
