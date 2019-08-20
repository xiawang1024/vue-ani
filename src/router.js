/*
 * @Description: 路由
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2019-08-20 18:05:57
 * @LastEditTime: 2019-08-20 18:09:52
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Index/index.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ './views/Rank/index.vue')
        }
    ]
})
