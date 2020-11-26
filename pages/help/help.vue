<template>
	<view class="help">
		<u-tabs :list="tabs" :is-scroll="true" bar-width="112" :bold="false" inactive-color="#666666" active-color="#2EB79E"
		 :current="active" @change="change"></u-tabs>
		<view class="help-box">
			<view class="help-box__item" v-show="active == 0">
				<u-collapse :head-style="headStyle">
					<u-collapse-item :title="item.head" v-for="(item, index) in account" :key="index" :open="item.open">
						<view class="cont">
							<view class="cont-item" v-for="(v,idx) in item.content" :key="idx">
								<view class="cont-item__title">
									{{v.title}}
								</view>
								<view class="cont-item__desc">
									{{v.body}}
								</view>
							</view>
						</view>
					</u-collapse-item>
				</u-collapse>
			</view>
			<view class="help-box__item" v-show="active == 1">暂时未写内容</view>
			<view class="help-box__item" v-show="active == 2">暂时未写内容</view>
			<view class="help-box__item" v-show="active == 3">暂时未写内容</view>
			<view class="help-box__item" v-show="active == 4">暂时未写内容</view>
			
			<view class="question">
				<view class="h3">问题未解决？没有您想找的问题？</view>
				<view class="h3">别担心，我们为您准备了以下两种方式</view>
				<view class="question-cont">
					<view class="question-item">
						<view class="qusetion-item__img">
							<image src="../../static/hjkf.png" style="width: 97rpx;" mode="widthFix"></image>
						</view>
						<view class="qusetion-item__desc">在线客服，为您服务</view>
						<view class="question-item__btn">呼叫客户</view>
					</view>
					<view class="question-item">
						<view class="qusetion-item__img">
							<image src="../../static/yjfk.png" style="width: 79rpx;" mode="widthFix"></image>
						</view>
						<view class="qusetion-item__desc">意见反馈，直达产品</view>
						<view class="question-item__btn" @click="handleToFeedback">提交反馈</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabs: [{
						name: '账号相关'
					},
					{
						name: '认证指南'
					},
					{
						name: '会员权益'
					},
					{
						name: '合作信息'
					},
					{
						name: '意见反馈'
					}
				],
				active: 0,

				account: [{
					head: "账号无法登录，提示账号已被冻结/禁用或未激活？",
					content: [{
						title: "1、账号已被冻结/禁用",
						body: `
通常是指您的账号因违反平台相关规定的情况下，平台管理人员对您的账号进行了登录或使用限制。遇到该情况时，您可联系平台在线客服或拨打平台客服电话寻求帮助，我们将依据的账号相关信息给予适当处理。
`
					}, {
						title: '2、账号未激活',
						body: `
通常指您的账号自最后一次登录时间起，一年为未再登录或使用的情况下，为保证您的账号安全，我们所采取的一种保障机制。如您遇到该情况，您可自行通过平台引导提示完成自助激活。如需帮助，请随时联系平台在线客服或拨打平台客服电话。`
					}],
					open: true,
					disabled: true
				}, {
					head: "如何进行账号身份认证呢？",
					content: [{
						title: "1、账号已被冻结/禁用",
						body: `
通常是指您的账号因违反平台相关规定的情况下，平台管理人员对您的账号进行了登录或使用限制。遇到该情况时，您可联系平台在线客服或拨打平台客服电话寻求帮助，我们将依据的账号相关信息给予适当处理。
`
					}, {
						title: '2、账号未激活',
						body: `
通常指您的账号自最后一次登录时间起，一年为未再登录或使用的情况下，为保证您的账号安全，我们所采取的一种保障机制。如您遇到该情况，您可自行通过平台引导提示完成自助激活。如需帮助，请随时联系平台在线客服或拨打平台客服电话。`
					}],
					open: false,
					disabled: true
				}, {
					head: "个人认证或企业认证过期后如何更新？",
					content: [{
						title: "1、账号已被冻结/禁用",
						body: `
通常是指您的账号因违反平台相关规定的情况下，平台管理人员对您的账号进行了登录或使用限制。遇到该情况时，您可联系平台在线客服或拨打平台客服电话寻求帮助，我们将依据的账号相关信息给予适当处理。
`
					}, {
						title: '2、账号未激活',
						body: `
通常指您的账号自最后一次登录时间起，一年为未再登录或使用的情况下，为保证您的账号安全，我们所采取的一种保障机制。如您遇到该情况，您可自行通过平台引导提示完成自助激活。如需帮助，请随时联系平台在线客服或拨打平台客服电话。`
					}],
					open: false,
					disabled: true
				}],
				
				headStyle:{
					fontSize: '28rpx',
					color: '#333333'
				}
			}
		},
		methods: {
			handleToFeedback(){
				uni.navigateTo({
					url:'../feedback/feedback'
				})
			},
			change(index) {
				this.active = index;
			}
		}
	}
</script>

<style lang="scss">
	.help-box {
		padding: 20rpx 40rpx;

		.cont {
			padding: 32rpx;
			background: #F8F9FC;
			font-size: 28rpx;
			color: #333333;
			border-radius: 6rpx;
			&-item{
				margin-bottom: 10rpx;
				&__title{
					font-weight: 600;
					padding-bottom: 10rpx;
				}
			}
			
		}
		.question{
			margin-top: 80rpx;
			.h3{
				text-align: center;
				font-size: 32rpx;
				font-weight: 600;
				color: #333333;
			}
			&-cont{
				display: flex;
				align-items: center;
				justify-content: center;
				padding-top: 48rpx;
				.question-item{
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					width: 320rpx;
					height: 360rpx;
					background: #FFFFFF;
					border-radius: 8rpx;
					border: 2rpx solid #EDEDED;
					margin: 0 15rpx;
					&__desc{
						margin-top: 14rpx;
						font-size: 28rpx;
						color: #333333;
					}
					&__btn{
						display: flex;
						align-items: center;
						justify-content: center;
						width: 200rpx;
						height: 76rpx;
						background: #FFFFFF;
						border-radius: 38rpx;
						border: 2rpx solid #1BBC9C;
						font-size: 28rpx;
						color: #2EB79E;
						margin-top: 24rpx;
					}
				}
			}
		}
	}
</style>
