import Vue from 'vue';
import App from './App.vue';
import './common/scss/index.scss';

/* 微信自定义分享 */
import './weChat/index';

/* fastclick修复移动端点击延迟300ms */
import fastclick from 'fastclick';
fastclick.attach(document.body);

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App)
}).$mount('#app');
