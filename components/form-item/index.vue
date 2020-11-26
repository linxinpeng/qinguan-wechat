<template>
	<view class="form-item">
		<view :class="['form-item__label',required&&'is-required']">
			{{label}}<text>{{desc}}</text>
		</view>
		<view class="form-item__cont">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			label: String,
			required: Boolean,
			desc: String
		}

	}
</script>
<style lang="scss">
	.form-item{
		margin-bottom: 20rpx;
		&__label{
			display: inline-flex;
			align-items: center;
			height: 68rpx;
			font-size: 28rpx;
			font-weight: 500;
			color: #333333;
			text{
				font-size: 24rpx;
				color: #999999;
			}
		}
		.is-required{
			position: relative;
			&::after{
				content: "*";
				font-size: 28rpx;
				color: #FF4B41;
				padding-left: 10rpx;
			}
		}
	}
</style>
