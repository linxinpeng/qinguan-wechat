<template>
	<view class="message">
		<view class="msg-item">
			<view class="msg-item__icon">
				<image src="../../static/user-art.jpg" mode="widthFix"></image>
			</view>
			<view class="msg-item__cont">
				<view class="msg-item__top">
					<view>系统消息</view>
					<text>2020-04-21 14:52</text>
				</view>
				<view class="msg-item__row">
					恭喜您入驻青瓜商务通资源对接平台,点击进入我的名片完善个人信息。
					<text style="color: #2EB79E;">前往完善></text>
				</view>
			</view>
		</view>
		<view class="msg-item">
			<view class="msg-item__icon">
				<image src="../../static/user-art.jpg" mode="widthFix"></image>
			</view>
			<view class="msg-item__cont">
				<view class="msg-item__top">
					<view>系统消息</view>
					<text>2020-04-21 14:52</text>
				</view>
				<view class="msg-item__row">
					恭喜您入驻青瓜商务通资源对接平台。
					<text style="color: #2EB79E;">前往完善></text>
				</view>
			</view>
		</view>
		<view class="msg-item">
			<view class="msg-item__icon">
				<image src="../../static/user-art.jpg" mode="widthFix"></image>
			</view>
			<view class="msg-item__cont">
				<view class="msg-item__top">
					<view>系统消息</view>
					<text>2020-04-21 14:52</text>
				</view>
				<view class="msg-item__row">
					青瓜商务通用户权益：
				</view>
				<view class="msg-item__row">
					1、您可以免费发布需求信息和对接渠道商;
				</view>
				<view class="msg-item__row">
					 2、您可以免费参与实名制认证，提高信誉等级，获得更多商业合作机会。<text style="color: #2EB79E;">认证权益></text>
				</view>
			</view>
		</view>
		<view class="msg-item">
			<view class="msg-item__icon">
				<image src="../../static/user-art.jpg" mode="widthFix"></image>
			</view>
			<view class="msg-item__cont">
				<view class="msg-item__top">
					<view>系统消息</view>
					<text>2020-04-21 14:52</text>
				</view>
				<view class="msg-item__row">
					青瓜商务通用户权益：
				</view>
				<view class="msg-item__row">
					1、您可以免费发布需求信息和对接渠道商;
				</view>
				<view class="msg-item__row">
					 2、您可以免费参与实名制认证，提高信誉等级，获得更多商业合作机会。<text style="color: #2EB79E;">认证权益></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss">
	.message{
		padding: 0 40rpx;
		.msg-item{
			padding: 32rpx 0;
			display: flex;
			border-bottom: 2rpx solid #EDEDED;
			&__icon{
				margin-right: 24rpx;
				width: 72rpx;
				height: 72rpx;
				border-radius: 50%;
				overflow: hidden;
				image{
					width: 100%;
					display: block;
				}
			}
			&__cont{
				flex: 1;
				.msg-item__top{
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 8rpx;
					view{
						font-size: 28rpx;
						font-weight: 500;
						color: #333333;
					}
					text{
						font-size: 24rpx;
						color: #AAAAAA;
					}
				}
				.msg-item__row{
					text-align: justify;
					font-size: 24rpx;
					color: #333333;
					line-height: 40rpx;
				}
			}
		}
	}
</style>
