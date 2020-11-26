<template>
	<view class="el-divider el-divider--horizontal">
		<view class="el-divider__text is-center">
			<slot></slot>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.el-divider--horizontal {
	    display: block;
	    height: 1rpx;
	    width: 100%;
	    margin: 24rpx 0;
	}
	.el-divider {
	    background-color: #dcdfe6;
	    position: relative;
	}
	.el-divider__text {
	    position: absolute;
	    background-color: #fff;
	    padding: 0 20rpx;
	    font-weight: 500;
	    color: #303133;
	    font-size: 28rpx;
	}
	.el-divider__text.is-center {
	    left: 50%;
	    transform: translateX(-50%) translateY(-50%);
	}
</style>
