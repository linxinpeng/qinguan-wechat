<template>
	<view class="reset">
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
				<view class="comm-left">新密码</view>
				<view class="comm-center">
					<input v-model="password" placeholder="请输入新密码" placeholder-class="plac" :password="!show" />
				</view>
				<view class="comm-right" @click="show = !show">
					<image v-if="!show" src="../../static/eye-close.png" mode="widthFix"></image>
					<image v-else src="../../static/eye-open.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="comm">
				<view class="comm-left">新密码</view>
				<view class="comm-center">
					<input v-model="againPassword" placeholder="二次确认密码" placeholder-class="plac" :password="!showNew" />
				</view>
				<view class="comm-right" @click="showNew = !showNew">
					<image v-if="!showNew" src="../../static/eye-close.png" mode="widthFix"></image>
					<image v-else src="../../static/eye-open.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="reset__btn">
				<button class="comm__btn" @click="handleReset">重置</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: '',
				vrcode:'',
				password: '',
				againPassword:'',
				show: false,
				showNew: false,
				numAry: ['+86', '+108'],
				index: 0,
				
				
				time: 60,
				isSendVrCode: false,
				timer:null
			}
		},
		onLoad() {

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
			 * 重置密码
			 */
			handleReset() {
				const vm = this;
				const {
					phone,
					password,
					vrcode,
					againPassword
				} = vm;
				if (!phone || !password || !vrcode) {
					uni.showToast({
						icon: "none",
						title: '手机号，验证码或密码不能为空！',
						duration: 2000
					});
					return
				}
				if(againPassword != password){
					uni.showToast({
						icon: "none",
						title: '两次密码输入不一致，请重新输入！',
						duration: 2000
					});
					return
				}
			}
		}
	}
</script>

<style lang="scss">
	.reset {
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
		.vr-code{
			font-size: 29rpx;
			color: #2EB79E;
		}
	
	}
</style>
