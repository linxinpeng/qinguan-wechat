const HTTP_BASE_URL = "http://qg.158wx.com";

function api(_methods, url, data, callback) {
	uni.showLoading({
	  title: '加载中',
	})
	uni.request({
		url: HTTP_BASE_URL + url,
		method: _methods,
		header: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		data: data,
		success: (res) => {
			uni.hideLoading()
			typeof callback == "function" && callback(res, "");
		},
		fail: (res) => {
			uni.hideLoading()
			typeof callback == "function" && callback(res, "");
		}
	});
}

export function APIGET(url, data, callback) {
	api('GET', url, data, callback)
}
export function APIPOST(url, data, callback) {
	api('POST', url, data, callback)
}
