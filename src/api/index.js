/*
 * @Description: api
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2019-03-04 10:45:55
 * @LastEditTime: 2019-08-29 11:46:35
 */
import axios from 'axios'
import Qs from 'qs'
import store from 'store'
import STORE_NAME from 'conf/store_conf'

const NODE_ENV = process.env.NODE_ENV

if (NODE_ENV === 'development') {
	/**
 * 开发环境
 */
	axios.defaults.baseURL = '/api'
} else {
	/**
 * 生产环境
 */
	axios.defaults.baseURL = 'http://hudong.hndt.com/wechatdibiao'
}


/**
 * 获取排行榜列表
 */
const getRankList = () => axios.get('/vote/list')

/**
 * 获取用户地标点赞状态列表
 */
const getZanStatusList = () => {
	let { openid } = store.get(STORE_NAME)
	return axios.get(`/vote/getlistbyopenid?openId=${openid}`)
}

/**
 * 
 * @param {*} id 地标id
 * @param {*} openId 微信openId
 */
const voteHandler = (id) => {
	let { openid } = store.get(STORE_NAME)
	return axios.post('/vote/voted', Qs.stringify({ id, openId: openid }))
}

export { getRankList, getZanStatusList, voteHandler }
