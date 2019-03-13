/**
 * 判断是不是微信浏览器
 */
const isWeChatBrowser = () => {
	var agent = navigator.userAgent.toLowerCase()
	if (agent.match(/MicroMessenger/i) == 'micromessenger') {
		return true
	} else {
		return false
	}
}
/**
 * 移动端自动播放
 * @param {*} id 
 */
const audioAutoPlay = (id = 'bgm') => {
	let audio = document.getElementById(id)

	const play = () => {
		audio.play()
	}
	document.addEventListener(
		'WeixinJSBridgeReady',
		function() {
			play()
		},
		false
	)
	document.addEventListener(
		'YixinJSBridgeReady',
		function() {
			play()
		},
		false
	)
	document.addEventListener('touchstart', play, false)
}

const _pad = (num, n = 2) => {
	let len = num.toString().length
	while (len < n) {
		num = '0' + num
		len++
	}
	return num
}

const format = (interval) => {
	interval = interval | 0
	const minute = (interval / 60) | 0
	const second = _pad(interval % 60)
	return `${minute}:${second}`
}

export { isWeChatBrowser, audioAutoPlay, format }
