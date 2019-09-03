/*
 * @Description: weChat
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2019-03-04 10:45:55
 * @LastEditTime: 2019-09-03 16:08:17
 */
// import store from 'store'
// import STORE_NAME from 'conf/store_conf'
import { WeChatConf } from './util'
// import { isWeChatBrowser } from 'common/js/util'
const weChatConf = new WeChatConf()

/**
 * 如果本地储存里没有用户信息，则授权获取用户信息流程
 */
// if (!store.get(STORE_NAME)) {
//     weChatConf.init()
// }

weChatConf.init()
/**
 * 是否非微信客户端也可以打开
 */
// if (isWeChatBrowser()) {
// 	weChatConf.init()
// }

