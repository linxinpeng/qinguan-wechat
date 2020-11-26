<template>
	<view class="title" :style="{color}">
		{{title}}<text class="title-desc">{{desc}}</text>
	</view>
</template>

<script>
	export default{
		props:{
			title:String,
			desc: String,
			color: String
		}
	}
</script>

<style lang="scss">
	.title{
		display: flex;
		align-items: center;
		font-size: 32rpx;
		font-weight: 500;
		color: #333333;
		&::before{
			content: "";
			display: block;
			width: 8rpx;
			height: 30rpx;
			background: #2EB79E;
			border-radius: 4rpx;
			margin-right: 28rpx;
		}
		&-desc{
			font-size: 24rpx;
			color: #999999;
		}
	}
</style>
