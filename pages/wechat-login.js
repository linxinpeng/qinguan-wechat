import {
		APIPOST
	} from "@/api/index.js"
export default {

		methods:{
			/**
			 * 获取用户信息
			 */
			queryUserInfo(e) {
				const vm = this;
				const code = uni.getStorageSync('code')
				const {
					rawData
				} = e.detail || ''
			
				//当用户不存在后台时 调用授权登录接口
				APIPOST('/api/wxapp.user/wx_login', {
					code,
					rawData
				}, function(resp) {
					if(resp.data.code === 0){
						uni.showModal({
							title: resp.data.msg,
							showCancel: false
						})
					}else{
						uni.navigateBack()
					}
				})
			},
		}
}
