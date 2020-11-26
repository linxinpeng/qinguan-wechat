<template>
	<view class="company-in">
		<view class="tips">
			<image src="../../static/warn.png" mode="widthFix"></image>
			<text>温馨提示：请根据公司实际业务选择模板，否则会被拖入回收站哦~</text>
		</view>
		<view class="company__cont">
			<view @click="active = 1" :class="['company-item',active === 1&&'is-active']">
				<view class="company-item__img">
					<image src="../../static/jf.png" mode="widthFix"></image>
				</view>
				<view class="h3">品牌企业（甲方）</view>
				<view class="p">具有自主品牌的企业</view>
				<view class="p">如传统企业、互联网公司等</view>
			</view>
			<view @click="active = 2" :class="['company-item',active === 2&&'is-active']">
				<view class="company-item__img">
					<image src="../../static/yf.png" mode="widthFix"></image>
				</view>
				<view class="h3">营销供应商（乙方）</view>
				<view class="p">提供营销服务的机构，</view>
				<view class="p">如广告、媒体、公关、会展、技术等</view>
			</view>
		</view>
		<view class="primary-btn teshu" @click="handleNext">下一步</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active: 1
			}
		},
		methods: {
			handleNext(){
				const { active } = this;
				if(active == 1){
					uni.navigateTo({
						url:"../jfgsrz2/jfgsrz2"
					})
				}else{
					uni.navigateTo({
						url: "../yfrz2/yfrz2"
					})
				}
			}
		}
	}
</script>

<style lang="scss">
.company-in{
	padding: 20rpx 40rpx;
	.company__cont{
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 100rpx;
		.company-item{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 480rpx;
			height: 400rpx;
			background: #F8F9FC;
			border-radius: 40rpx;
			margin-bottom: 60rpx;
			&__img{
				width: 152rpx;
				margin-bottom: 28rpx;
				image{
					width: 100%;
				}
			}
			.h3{
				font-size: 40rpx;
				font-weight: 500;
				color: #333333;
				letter-spacing: 2rpx;
				margin-bottom: 10rpx;
			}
			.p{
				font-size: 24rpx;
				color: #888888;
				line-height: 34rpx;
			}
			&.is-active{
				background: #F0FBF9;
				border: 2rpx solid #1BBC9C;
			}
		}
	}
}
.tips{
	display: flex;
	align-items: center;
	padding: 0 14rpx;
	height: 64rpx;
	background: #FFF0EF;
	border-radius: 8rpx;
	border: 1rpx solid #FFABA6;
	image{
		width: 28rpx;
		margin-right: 6rpx;
	}
	text{
		font-size: 24rpx;
		color: #F01F14;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}
.teshu{
	width: 480rpx;
	margin: 0 auto;
}
</style>
