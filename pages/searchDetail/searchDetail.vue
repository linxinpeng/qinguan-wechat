<template>
	<view class="search-wrap">
		<mSearch :mode="2" bg="#ffffff" backgroundColor="#F4F5F9" button="inside" placeholder="搜索合作信息" @search="handleSearch($event,2)"></mSearch>
		<view class="search-hot">
			<label>热门搜索：</label>
			<view class="search-hot__item" @click="handleClickHot('销售渠道')">
				<image src="../../static/hot.png" mode="widthFix"></image>
				<text>销售渠道</text>
			</view>
			<view class="search-hot__item" @click="handleClickHot('优质货源')">
				<image src="../../static/hot.png" mode="widthFix"></image>
				<text>优质货源</text>
			</view>
			<view class="search-hot__item" @click="handleClickHot('推广甲方')">
				<text>推广甲方</text>
			</view>
			<view class="search-hot__item" @click="handleClickHot('效果渠道')">
				<text>效果渠道</text>
			</view>
		</view>
		<view class="search-cont">
			<view class="search-cont__total">
				{{total}}条结果
			</view>
			<view class="search-cont__wrap">
				<business-card v-for="(item,idx) in recordList" :cardInfo="item" :key="idx"></business-card>
			</view>
		</view>
	</view>
</template>

<script>
	import BusinessCard from "@/components/business-card/index.vue"
	import mSearch from '@/components/mehaotian-search/mehaotian-search.vue';
	import {
		APIPOST
	} from "@/api/index.js"
	export default {
		data() {
			return {
				recordList: [],
				page: 1,
				total: 0,

				param: '',
				keyword: ''
			}
		},
		onLoad(options) {
			this.param = '';
			this.keyword = options.keyword;
			this.queryList(this.param, this.keyword)
		},
		onReachBottom() {
			this.page++;
			this.queryList(this.param, this.keyword)
		},
		methods: {
			resetData(){
				this.page = 1;
				this.recordList = []
			},
			handleClickHot(param) {
				this.param = param;
				this.keyword = '';
				this.resetData()
				this.queryList(this.param, this.keyword)
			},

			queryList(param, keyword) {
				const vm = this;
				const {
					page
				} = vm;
				const params = {
					param,
					keyword,
					page,
					type: '需求'
				}
				APIPOST('/api/business/search', params, function(res) {
					if (res.data.code === 1) {
						const {
							data
						} = res.data;
						vm.total = data.total
						let list = data.list.map(item => {
							return {
								orderId: item.order_id,
								headerIcon: item.user.avatar,
								name: item.user.username,
								companyName: item.user.company_name,
								isHot: true,
								status: ['../../static/qy.png'],
								desc: item.describe,
								tag: item.order_type,
								time: item.effective_s_time,
								show: item.hits
							}
						})
						vm.recordList.push(...list)
					}
				})
			},

			handleSearch(e, val) {
				this.param = '';
				this.keyword = e;
				this.resetData()
				this.queryList('', this.keyword)
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
