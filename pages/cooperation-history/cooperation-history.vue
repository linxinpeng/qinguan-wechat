<template>
	<view class="search-wrap">
		<mSearch :mode="2" bg="#ffffff" backgroundColor="#F4F5F9" button="inside" placeholder="搜索合作信息" @search="handleSearch($event,2)"></mSearch>
		<view class="search-cont">
			<view class="search-cont__wrap">
				<business-card v-for="(item,idx) in cards[0]" :cardInfo="item" :key="idx"></business-card>
			</view>
		</view>
	</view>
</template>

<script>
	import BusinessCard from "@/components/business-card/index.vue"
	import mSearch from '@/components/mehaotian-search/mehaotian-search.vue';
	export default {
		data() {
			return {
				cards: [
					[{
							headerIcon: '../../static/tgdyy.png',
							name: '刘德华',
							companyName: '北京新兴幼儿园公司',
							isHot: true,
							status: [
								'../../static/qy.png'
							],
							desc: '能提供服饰，化妆品的供应链渠道，以及直播数据的交流，等等各种渠道。',
							tag: '线下推广',
							time: '1小时前',
							show: 1688
						},
						{
							headerIcon: '../../static/tgdyy.png',
							name: '周即可',
							companyName: '北京新兴幼儿园公司',
							isHot: false,
							status: [
								'../../static/qy.png'
							],
							desc: '能提供服饰，化妆品的供应链渠道，以及直播数据的交流，等等各种渠道。',
							tag: '线下推广',
							time: '1小时前',
							show: 1688
						},
						
						{
							headerIcon: '../../static/tgdyy.png',
							name: '周即可',
							companyName: '北京新兴幼儿园公司',
							isHot: false,
							status: [
								'../../static/qy.png'
							],
							desc: '能提供服饰，化妆品的供应链渠道，以及直播数据的交流，等等各种渠道。',
							tag: '线下推广',
							time: '1小时前',
							show: 1688
						},
						
						{
							headerIcon: '../../static/tgdyy.png',
							name: '周即可',
							companyName: '北京新兴幼儿园公司',
							isHot: false,
							status: [
								'../../static/qy.png'
							],
							desc: '能提供服饰，化妆品的供应链渠道，以及直播数据的交流，等等各种渠道。',
							tag: '线下推广',
							time: '1小时前',
							show: 1688
						}
					]
				]
			}
		},
		methods: {
			handleSearch() {

			}
		},
		components: {
			mSearch,
			BusinessCard
		}
	}
</script>

<style lang="scss">
	.search-wrap {
		background: #F4F5F9;
		min-height: 100vh;
		.search-hot {
			display: flex;
			align-items: center;
			padding: 0 30rpx;

			label {
				font-size: 24rpx;
				font-weight: 500;
				color: #31384A;
				margin-right: 16rpx;
				white-space: nowrap;
			}

			&__item {
				display: flex;
				align-items: center;
				margin-right: 16rpx;

				image {
					width: 18rpx;
				}

				text {
					font-size: 24rpx;
					color: #828898;
					padding-left: 6rpx;
					white-space: nowrap;
				}
			}
		}

		.search-cont {
			padding: 0 30rpx 40rpx 30rpx;

			&__total {
				padding: 42rpx 0 30rpx 0;
				font-size: 32rpx;
				font-weight: 500;
				color: #333333;
			}
		}
	}
</style>
