<template>
	<view class="contact">
		<view class="contact__search">
			<mSearch :mode="2" button="inside" bg="#fff" backgroundColor="#F4F5F9" placeholder="搜索合作信息" @search="handleSearch($event,2)"></mSearch>
		</view>
		<view class="contact__cont">
			<view class="title">你可能感兴趣的人</view>
			<view class="contact__cont-list">
				<view class="card" v-for="(item,idx) in list" :key="idx" @click="handleToDetail">
					<view class="card-top">
						<view class="card-top__author">
							<image :src="item.author" mode="widthFix"></image>
						</view>
						<text>{{item.name}}</text>
						<view class="card-top__company">｜ {{item.company}}</view>
						<view class="card-top__status">
							<block v-for="img in item.status" :key="img">
								<image :src="img" mode="widthFix"></image>
							</block>
						</view>
					</view>
					<view class="card-info">
						<view class="card-info__item">
							<view class="card-icon">
								<image src="../../static/zy.png" mode="widthFix"></image>
							</view>
							<text style="color: #2EB79E;">{{item.job}}</text>
						</view>
						<view class="card-info__item">
							<view class="card-icon">
								<image src="../../static/wz.png" mode="widthFix"></image>
							</view>
							<text>{{item.addr}}</text>
						</view>
						<view class="card-info__item">
							<view class="card-icon">
								<image src="../../static/lb.png" mode="widthFix"></image>
							</view>
							<text>{{item.other}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import mSearch from '@/components/mehaotian-search/mehaotian-search.vue';
	export default {
		data() {
			return {
				list: [{
						author: require('../../static/user-art.jpg'),
						name: '刘德华',
						company: '厦门市巨龙信息优先公司',
						status: [
							require('../../static/qy.png'),
							require('../../static/zy.png')
						],
						job: '零点跳动 运营总监',
						addr: '广东省 深圳市',
						other: '四大搜 头条 抖音核代资源'
					},
					{
						author: require('../../static/user-art.jpg'),
						name: '刘德华',
						company: '厦门市巨龙信息优先公司',
						status: [
							require('../../static/qy.png'),
							require('../../static/zy.png')
						],
						job: '零点跳动 运营总监',
						addr: '广东省 深圳市',
						other: '四大搜 头条 抖音核代资源'
					},
					{
						author: require('../../static/user-art.jpg'),
						name: '刘德华',
						company: '厦门市巨龙信息优先公司',
						status: [
							require('../../static/qy.png')
						],
						job: '零点跳动 运营总监',
						addr: '广东省 深圳市',
						other: '四大搜 头条 抖音核代资源'
					}
				]
			}
		},
		methods: {
			handleSearch() {

			},
			handleToDetail(){
				uni.navigateTo({
					url: '../contacts-detail/index'
				})
			}
		},
		components: {
			mSearch
		}
	}
</script>

<style lang="scss">
	.contact {
		min-height: 100vh;
		background-color: #F4F5F9;
		&__cont{
			padding: 0 30rpx;
			.title{
				font-size: 28rpx;
				color: #999999;
				padding-bottom: 30rpx;
			}
		}
	}
	.card{
		background-color: #fff;
		padding: 0 24rpx;
		margin-bottom: 20px;
			border-radius: 8rpx;
		&-top{
			display: flex;
			align-items: center;
			height: 100rpx;
			font-size: 24rpx;
			color: #999999;
			border-bottom: 2rpx solid #eee;
			&__author{
				width: 48rpx;
				height: 48rpx;
				border-radius: 50%;
				overflow: hidden;
				margin-right: 12rpx;
				image{
					width: 100%;
				}
			}
			text{
				font-size: 28rpx;
				font-weight: 500;
				color: #333333;
			}
			&__company{
				margin-right: 10rpx;
			}
			&__status{
				display: flex;
				align-items: center;
				image{
					width: 23rpx;
					margin-right: 10rpx;
				}
			}
		}
		&-info{
			padding: 20px 0 0 0;
			&__item{
				display: flex;
				align-items: center;
				padding-bottom: 16px;
				font-size: 28rpx;
				color: #333333;
				.card-icon{
					width: 24rpx;
					margin-right: 24rpx;
					image{
						width: 100%;
						display: block;
					}
				}
			}
		}
	}
</style>
