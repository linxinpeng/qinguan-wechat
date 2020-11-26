<template>
	<view class="release">
		<view class="tips">
			<image src="../../static/warn.png" mode="widthFix"></image>
			<text>违规删除，违法封号！请严格按规则发布，勿投机取巧!</text>
		</view>
		<form>
			<form-item label="需求类型" required>
				<select-input v-model="form.needType" :options="['找合作', '发需求']"></select-input>
			</form-item>
			<form-item label="标题" required>
				<view class="comm-input">
					<input v-model="form.title" maxlength="20" placeholder-class="plac" placeholder="请输入" />
					<text>{{form.title.length}}/20</text>
				</view>
			</form-item>
			<form-item label="结算方式" required>
				<select-input v-model="form.settle" :options="['支付宝', '微信','银行卡']"></select-input>
			</form-item>
			<form-item label="付款方式" required>
				<select-input v-model="form.pay" :options="['支付宝', '微信','银行卡']"></select-input>
			</form-item>
			<form-item label="所属行业" required>
				<select-input v-model="form.belongIndustry" :options="['互联网', '金融']"></select-input>
			</form-item>
			<form-item label="需求描述" required>
				<view class="need-desc">
					<textarea v-model="form.desc" placeholder-class="plac" placeholder="为了提高合作对接的效率，请尽可能详细描述您的需求，包括但不限于项目背景、当前问题、其他个性化需求等。500字以内"></textarea>
				</view>
			</form-item>
			<form-item label="有效时间">
				<view class="time">
					<picker mode="date" @change="bindStartTimeChange">
						<view class="start-time comm-time">
							<input placeholder="开始时间" placeholder-class="plac" disabled v-model="form.start" />
							<image src="../../static/jtxx.png" mode="widthFix"></image>
						</view>
					</picker>
					<text>至</text>
					<picker mode="date" @change="bindEndTimeChange">
						<view class="end-time comm-time">
							<input placeholder="结束时间" placeholder-class="plac" disabled v-model="form.end" />
							<image src="../../static/jtxx.png" mode="widthFix"></image>
						</view>
					</picker>
				</view>
			</form-item>
			<form-item label="相关照片" desc="（最多3张，图中不能带联系方式,不超过200k)">
				<view class="upload">
					<g-upload ref='gUpload' :mode="form.imgs" :columnNum="3"></g-upload>
				</view>
			</form-item>
			<form-item label="联系方式" desc="（联系电话、微信号、QQ至少填一项）">
				<view class="contact-item">
					<view class="contact-item__icon">
						<image src="../../static/phone.png" mode="widthFix"></image>
					</view>
					<input type="number" maxlength="11" v-model="form.phone" />
				</view>
				<view class="contact-item">
					<view class="contact-item__icon">
						<image src="../../static/wx.png" mode="widthFix"></image>
					</view>
					<input type="text" v-model="form.wechat" />
				</view>
				<view class="contact-item">
					<view class="contact-item__icon">
						<image src="../../static/qq.png" mode="widthFix"></image>
					</view>
					<input type="text" v-model="form.qq" />
				</view>
			</form-item>
			<button class="submit" @click="handleRelease">确认发布</button>
		</form>
		<xp-alert :visible.sync="show">
			<view class="rz-cont">
				<view class="rz-cont__top">
					<image src="../../static/warn.png" mode="widthFix"></image>
					<text>实名认证后可享受发布特权</text>
				</view>
				<view class="rz-cont__bottom">
					<button class="back-home comm-btn" @click="backHome">返回首页</button>
					<button class="go-rz comm-btn" @click="goRZ">前往认证</button>
				</view>
			</view>
		</xp-alert>
	</view>
</template>

<script>
	import {
		APIPOST
	} from "@/api/index.js"
	import SelectInput from "@/components/select/index"
	import FormItem from "@/components/form-item/index"
	import gUpload from "@/components/g-upload/g-upload.vue"
	import XpAlert from "@/components/xp-alert/index.vue"
	export default {
		data() {
			return {
				form: {
					needType: '',
					title: '',
					settle: '',
					pay: '',
					belongIndustry: '',
					desc: '',
					start: '',
					end: '',
					imgs: [],
					phone: '',
					wechat: '',
					qq: ''
				},
				show: false
			}
		},
		methods: {
			/**
			 * 发布需求
			 */
			handleRelease(){
				// this.show = true
				const vm = this;
				const params = {
					title: vm.form.title,
					describe: vm.form.desc,
					order_type: vm.form.needType,
					settle_style: vm.form.settle,
					payment_style: vm.form.pay,
					imgs: vm.form.imgs,
					cooperate_type: vm.form.belongIndustry,
					token: ''
				};
				
				APIPOST('/api/business/publish',params,function(resp){
					console.log(resp)
				})
				
			},
			
			bindStartTimeChange(e) {
				this.$set(this.form, 'start', e.target.value)
			},
			bindEndTimeChange(e) {
				this.$set(this.form, 'end', e.target.value)
			},
			
			backHome(){
				this.show  = false
				uni.switchTab({
					url:'../index/index'
				})
			},
			goRZ(){
				this.show  = false
				uni.navigateTo({
					url:"../need-detail/need-detail"
				})
			}
		},
		components: {
			FormItem,
			SelectInput,
			gUpload,
			XpAlert
		}
	}
</script>

<style lang="scss">
	.release {
		padding: 20rpx 40rpx;

		.tips {
			display: flex;
			align-items: center;
			padding: 0 10rpx;
			height: 64rpx;
			background: #FFF0EF;
			border-radius: 8rpx;
			border: 1rpx solid #FFABA6;
			margin-bottom: 30rpx;

			image {
				width: 28rpx;
				margin-left: 10rpx;
			}

			text {
				font-size: 24rpx;
				color: #F01F14;
				padding-left: 10rpx;
			}
		}
	}

	.comm-input {
		display: flex;
		align-items: center;
		height: 80rpx;
		background: #F6F7F9;
		border-radius: 8rpx;
		padding: 0 28rpx;
		box-sizing: border-box;

		input {
			flex: 1;
		}

		text {
			font-size: 24rpx;
			color: #AAAAAA;
		}
	}

	.need-desc {
		height: 240rpx;
		background: #F6F7F9;
		border-radius: 8rpx;
		padding: 22rpx 28rpx;

		textarea {
			width: 100%;
			height: 100%;
		}
	}

	.time {
		display: flex;
		align-items: center;

		text {
			padding: 0 20rpx;
		}
	}

	.comm-time {
		display: flex;
		align-items: center;
		height: 80rpx;
		padding: 0 28rpx;
		background: #F6F7F9;
		border-radius: 8rpx;
		box-sizing: border-box;

		input {
			flex: 1;
			padding-right: 30rpx;
		}

		image {
			width: 16rpx;
		}
	}

	.contact-item {
		display: flex;
		align-items: center;
		height: 80rpx;
		background: #F6F7F9;
		border-radius: 8rpx;
		padding: 0 28rpx;
		margin-bottom: 20rpx;

		&__icon {
			width: 24rpx;
			margin-right: 12rpx;

			image {
				width: 100%;
			}
		}

		input {
			flex: 1;
		}
	}

	.submit {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		height: 80rpx;
		background: #2EB79E;
		border-radius: 46rpx;

		font-size: 32rpx;
	}

	.rz-cont {
		width: 560rpx;
		height: 280rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 8rpx 24rpx 0rpx rgba(0, 0, 0, 0.15);
		border-radius: 16rpx;
		padding: 58rpx 50rpx;
		box-sizing: border-box;

		&__top {
			display: flex;
			align-items: center;

			image {
				width: 44rpx;
				margin-right: 20rpx;
			}

			text {
				font-size: 32rpx;
				font-weight: 500;
				color: rgba(0, 0, 0, 0.85);
			}
		}

		&__bottom {
			display: flex;
			align-items: center;
			margin-top: 58rpx;

			.comm-btn {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 180rpx;
				height: 68rpx;
				font-size: 29rpx;
				font-weight: 400;
				color: #666666;
				margin: 0 16rpx;
			}

			.go-rz {
				color: #FFFFFF;
				background: #2EB79E;
			}
		}
	}
</style>
