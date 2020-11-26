<template>
	<view class="login">
		<view class="login__logo">
			<image src="../../static/header-logo.png" mode="widthFix"></image>
		</view>
		<view class="comm__wrap">
			<view class="comm">
				<view class="comm-left">
					<picker @change="handleChangeNumber" :value="index" :range="numAry">
						<view style="display: flex; align-items: center;">
							<text>{{numAry[index]}}</text>
							<image src="../../static/jtxx.png" mode="widthFix"></image>
						</view>
					</picker>
				</view>
				<view class="comm-center">
					<input v-model="phone" placeholder="请输入手机号码" placeholder-class="plac" type="number" maxlength="11" />
				</view>
			</view>
			<view class="comm">
				<view class="comm-left">密 码</view>
				<view class="comm-center">
					<input v-model="password" placeholder="请输入密码" placeholder-class="plac" :password="!show" />
				</view>
				<view class="comm-right" @click="show = !show">
					<image v-if="!show" src="../../static/eye-close.png" mode="widthFix"></image>
					<image v-else src="../../static/eye-open.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="login__btn">
				<button class="comm__btn" @click="handleLogin">登录</button>
			</view>
			<view class="login__actions">
				<view @click="handleForegt">忘记密码？</view>
				<view class="comm-link" @click="handleRegister">手机号注册></view>
			</view>
			<view class="comm__divider">
				<Divider>微信扫码登录</Divider>
			</view>
			<button class="login__wechat" open-type="getUserInfo" @getuserinfo="queryUserInfo">
				<image src="../../static/wx1.png" mode="widthFix"></image>
			</button>
		</view>
	</view>
</template>
<script>
	import Divider from "../../components/divider/index.vue"
	import {
		APIPOST
	} from "@/api/index.js"
	import WechatLogin from "../wechat-login.js"
	export default {
		mixins:[WechatLogin],
		data() {
			return {
				phone: '',
				password: '',
				show: false,
				numAry: ['+86', '+108'],
				index: 0,

			}
		},
		methods: {
			/**
			 * 选择手机区号
			 * @param {Object} e 当前对象
			 */
			handleChangeNumber(e) {
				this.index = e.target.value
			},
			/**
			 * 登录验证
			 */
			handleLogin() {
				const vm = this;
				const {
					phone,
					password
				} = vm;
				if (!phone || !password) {
					uni.showToast({
						icon: "none",
						title: '手机号或密码不能为空！',
						duration: 2000
					});
					return;
				};

				// 手机账号登录
				APIPOST('/api/user/login', {
					account: phone,
					password,
					token: ''
				}, function(resp) {
					if (resp.data.code === 0) {
						uni.showModal({
							title: resp.data.msg,
							showCancel: false
						})
					} else {
						 uni.navigateBack()
					}
				})


			},
			/**
			 * 前往注册
			 */
			handleRegister() {
				uni.navigateTo({
					url: "../register/register"
				})
			},
			/**
			 * 重置密码
			 */
			handleForegt() {
				uni.navigateTo({
					url: '../reset/reset'
				})
			}
		},
		components: {
			Divider
		}
	}
</script>
<style lang="scss">
	.login {
		padding: 100rpx 76rpx 0 76rpx;

		&__logo {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom: 79rpx;

			image {
				width: 324rpx;
			}
		}

		&__btn {
			margin-top: 58rpx;
		}

		&__actions {
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 29rpx;
			color: #999999;
			margin-top: 24rpx;
		}

		&__wechat {
			display: flex;
			justify-content: center;
			margin-top: 40rpx;

			background: none;

			&::after {
				border: none;
			}

			image {
				width: 128rpx;
			}
		}
	}
</style>
