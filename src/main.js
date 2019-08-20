/*
 * @Description: 郑州地标h5
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2019-03-13 08:54:36
 * @LastEditTime: 2019-08-20 18:07:04
 */
import Vue from 'vue'
import router from "./router";
import App from './App.vue'

/**
 * 初始化加载
 */
import './init/index'

Vue.config.productionTip = false

new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app')
