<template>
	<view class="register">
		<view class="register__logo">
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
				<view class="comm-left">验证码</view>
				<view class="comm-center">
					<input v-model="vrcode" placeholder="请输入4位验证码" placeholder-class="plac" maxlength="4"/>
				</view>
				<view class="comm-right">
					<view class="vr-code">
						<text v-if="!isSendVrCode" @click="handleSendCode">获取验证码</text>
						<text v-else>{{time}}s</text>
					</view>
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
			<view class="register__btn">
				<button class="comm__btn" @click="handleRegister">注册</button>
			</view>
			<view class="register__actions">
				<view class="comm-link" @click="handleToLogin">已有账号，去登录></view>
			</view>
			<view class="comm__divider">
				<Divider>微信扫码登录</Divider>
			</view>
			<button class="register__wechat" open-type="getUserInfo" @getuserinfo="queryUserInfo">
				<image src="../../static/wx1.png" mode="widthFix"></image>
			</button>
		</view>
	</view>
</template>

<script>
	import WechatLogin from "../wechat-login.js"
	import Divider from "../../components/divider/index.vue"
	export default {
		mixins:[WechatLogin],
		data() {
			return {
				phone: '',
				password: '',
				vrcode:'',
				show: false,
				numAry: ['+86', '+108'],
				index: 0,
				
				time: 60,
				isSendVrCode: false,
				timer:null
			}
		},
		methods: {
			/**
			 * 选择手机区号
			 * @param {Object} e 当前对象
			 */
			handleChangeNumber(e) {
				const vm = this;
				vm.index = e.target.value
			},
			/**
			 * 发送验证码
			 */
			handleSendCode(){
				const vm = this;
				
				vm.isSendVrCode = true;
				vm.timer = setInterval(()=>{
					vm.time--;
					if(vm.time === 0){
						clearInterval(vm.timer);
						vm.time = 60
						vm.isSendVrCode = false
					}
				},1000)
			},
			/**
			 * 登录验证
			 */
			handleRegister() {
				const vm = this;
				const {
					phone,
					password,
					vrcode
				} = vm;
				if (!phone || !password || !vrcode) {
					uni.showToast({
						icon: "none",
						title: '手机号,密码或验证码不能为空！',
						duration: 2000
					});
				}
			},
			/**
			 * 前往登录
			 */
			handleToLogin(){
				uni.navigateTo({
					url:"../login/login"
				})
			}
		},
		components: {
			Divider
		}
	}
</script>

<style lang="scss">
	.register {
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
			justify-content: center;
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
		.vr-code{
			font-size: 29rpx;
			color: #2EB79E;
		}
	}
</style>
