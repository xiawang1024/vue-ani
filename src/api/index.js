import axios from 'axios'
import Qs from 'qs'
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
	axios.defaults.baseURL = 'http://www.hndt.com'
}

/**
 * 获取类别的列表
 * @param {*} type 
 */
const getList = (type) =>
	axios({
		method: 'get',
		url: `/zt/sheng/${type}/index.json`
	})
/**
 * 获取正文
 * @param {*} url 
 */
const getArticle = (url) => {
	url = url.replace(/http:\/\/www.hndt.com/, '')
	// console.log(url)
	return axios({ method: 'get', url })
}

export { getList, getArticle }
