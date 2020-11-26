<script>
	import {
		APIPOST
	} from "@/api/index.js"
	export default {
		/**
		 * 获取用户Code 用于登录验证
		 */
		onLaunch: function() {
			const vm = this;
			uni.login({
				success: (res) => {
					if (res.errMsg == "login:ok") {
						uni.setStorageSync('code',res.code)
						APIPOST('/api/wxapp.user/code_login', {
							code: res.code
						}, function(resp) {
							// 登录成功
							if (resp.data.code == 1) {
								uni.showToast({
									title: '登录成功'
								})
							}
						})
					} else {
						uni.showToast({
							title: '系统异常，请联系管理员!'
						})
					}
				}
			})
		},
	
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import url("/static/style/comm.css");
	@import "uview-ui/index.scss";
	.primary-btn{
		height: 80rpx;
		background: #2EB79E;
		border-radius: 46rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 32rpx;
		font-weight: 500;
		color: #FFFFFF;
	}
	.pure-input{
		display: flex;
		align-items: center;
		height: 80rpx;
		background: #F6F7F9;
		border-radius: 8rpx;
		padding: 0 30rpx;
	}
</style>
