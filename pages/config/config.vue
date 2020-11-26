<template>
	<view class="config">
		<u-cell-group>
			<u-cell-item title="修改登录密码" @click="handlePassword"></u-cell-item>
			<u-cell-item title="更换手机号" value="182****9981" @click="handlePhone"></u-cell-item>
			<u-cell-item title="关于青瓜传媒"></u-cell-item>
			<u-cell-item title="当前版本" :arrow="false" value="V1.0.0.4"></u-cell-item>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			handlePassword(){
				uni.navigateTo({
					url:"../reset/reset"
				})
			},
			handlePhone(){
				uni.navigateTo({
					url: '../login/login'
				})
			}
		}
	}
</script>

<style>

</style>
