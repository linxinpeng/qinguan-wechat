<template>
	<view class="card-item">
		<view class="list-record" v-if="cardInfo.isHot">
			<image src="../../static/record.png" mode="widthFix" />
		</view>
		<view class="list-header">
			<view class="list-header__user" v-if="cardInfo.headerIcon">
				<image :src="cardInfo.headerIcon" mode="widthFix" />
			</view>
			<text class="list-header__name">{{cardInfo.name}}</text>
			<text class="list-header__company">｜ {{cardInfo.companyName || '无'}}</text>
			<view class="list-header__tag">
				<image v-for="(item,idx) in cardInfo.status" :src="item" :key="idx" mode="widthFix" />
			</view>
		</view>
		<view class="list-desc">
			{{cardInfo.desc}}
		</view>
		<view class="list-footer">
			<text class="list-footer__btn">{{cardInfo.tag}}</text>
			<view>
				<text class="list-footer__time">{{cardInfo.time}}</text>
				<view class="list-footer__show">
					<image src="../../static/show-eye.png" mode="widthFix" />
					{{cardInfo.show}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			cardInfo: {
				type: Object
			}
		}
	}
</script>

<style>
	.card-item{
	    margin-bottom: 20rpx;
	    background: #FFFFFF;
	    border-radius: 8rpx;
	    padding: 30rpx 24rpx;
	    box-sizing: border-box;
	    font-size: 28rpx;
	    margin-bottom: 20rpx;
	    position: relative;
	}
	.list-record{
	  position: absolute;
	  top: 0;
	  right: 0;
	}
	.list-record image{
	  width: 78rpx;
	}
	 .list-header{
	  display: flex;
	  align-items: center;
	}
	.list-header__user{
	  width: 48rpx;
	  border-radius: 50%;
	  overflow: hidden;
	  margin-right: 12rpx;
	}
	.list-header__name{
	  font-weight: 500;
	  color: #333333;
	  margin-right: 4rpx;
	}
	.list-header__company{
	  font-size: 24rpx;
	  color: #999999;
	}
	
	.list-header__user image{
	  width: 48rpx;
	}
	.list-header__tag{
	  margin-left: 10rpx;
	  display: flex;
	  align-items: center;
	}
	.list-header__tag image{
	  width: 23rpx;
	}
	.list-desc{
	  padding: 22rpx 0 28rpx 0;
	  color: #333;
	  line-height: 1.5;
	  border-bottom: 1px solid rgba(238, 238, 238, 1);
	}
	.list-footer{
	  padding-top: 20rpx;
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	}
	.list-footer__btn{
	  width: 108rpx;
	  height: 34rpx;
	  border-radius: 4rpx;
	  border: 1px solid #2DBD9F;
	  font-size: 24rpx;
	  color: #2DBD9F;
	  text-align: center;
	  line-height: 34rpx;
	  white-space: nowrap;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	.list-footer view{
	  color: #aaa;
	  white-space: nowrap;
	}
	.list-footer .list-footer__time{
	  margin-right: 40rpx;
	}
	.list-footer .list-footer__show{
	  display: inline-flex;
	  align-items: center;
	}
	.list-footer .list-footer__show image{
	  width: 23rpx;
	  display: block;
	  margin-right: 10rpx;
	}
</style>
