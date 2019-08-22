/*
 * @Description: 
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2019-03-13 08:54:36
 * @LastEditTime: 2019-08-22 09:12:54
 */
const path = require('path')

function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	baseUrl: './',
	/**
	 * 别名设置
	 */
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('base', resolve('src/base'))
			.set('components', resolve('src/components'))
			.set('conf', resolve('src/config'))
			.set('weChat', resolve('src/weChat'))
			.set('@api', resolve('src/api'))
			.set('common', resolve('src/common'))
			.set('views', resolve('src/views'))
	},

	/**
	 * 跨域设置
	 */
	devServer: {
		proxy: {
			'/api': {
				target: 'http://www.hndt.com/',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	}
}
