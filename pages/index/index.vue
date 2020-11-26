<template>
	<view class="home">
		<mSearch :mode="2" button="inside" placeholder="搜索合作信息" @search="handleSearch($event,2)"></mSearch>
		<view class="home-wrap">
			<view class="home__banner">
				<image src="../../static/banner.png" mode="widthFix"></image>
			</view>
			<view class="home__swiper">
				<swiper :indicator-dots="false">
					<block v-for="(items,idx) in swiperItems" :key="idx">
						<swiper-item class="swiper-wrap">
							<view class="swiper-item" v-for="(item,index) in items" :key="item.icon">
								<view class="swiper-item__box">
									<image :src="item.icon" mode="widthFix" lazy-load />
								</view>
								<text>{{item.name}}</text>
							</view>
						</swiper-item>
					</block>
				</swiper>
			</view>
			<!-- <view class="home__tabs"> -->
				<!-- <text @click="tabActive = 1" :class="tabActive == 1&&'tabActive'">推荐</text> -->
				<!-- <text @click="tabActive = 2" :class="tabActive == 2&&'tabActive'">最近活跃</text>
				<text @click="tabActive = 3" :class="tabActive == 3&&'tabActive'">最新发布</text> -->
			<!-- </view> -->
			<view class="home__tab-cont">
				<view class="coo__recommend">
					<business-card v-for="(item,idx) in recordList" :cardInfo="item" :key="idx" @click.native="handleToDetail(item)"></business-card>
				</view>
<!-- 				<view v-if="tabActive == 2" class="coo__active">最近活跃</view>
				<view v-if="tabActive == 3" class="coo__news">最新发布</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	import {APIPOST} from "@/api/index.js"
	import BusinessCard from "@/components/business-card/index.vue"
	import mSearch from '@/components/mehaotian-search/mehaotian-search.vue';
	export default {
		data() {
			return {
				value: "",
				tabActive: 1,
				swiperItems: [
					[{
							name: '线上推广',
							icon: '../../static/xstg.png'
						},
						{
							name: '托管代运营',
							icon: '../../static/tgdyy.png'
						},
						{
							name: '网红自媒体',
							icon: '../../static/whzmt.png'
						},
						{
							name: '视频多媒体',
							icon: '../../static/spdmt.png'
						},
						{
							name: 'SEO优化',
							icon: '../../static/seoyh.png'
						},
						{
							name: '广告资源',
							icon: '../../static/ggzy.png'
						},
						{
							name: '落地页程序',
							icon: '../../static/ldycx.png'
						},
						{
							name: '公关处理',
							icon: '../../static/ggcl.png'
						},
						{
							name: '新闻软文',
							icon: '../../static/xwrw.png'
						},
						{
							name: '账户诊断',
							icon: '../../static/zdhf.png'
						}
					]
				],
				
				recordList:[]
			}
		},
		onLoad() {
			this.queryNeedsList();
		},
		methods: {
			/**
			 * 获取需求列表
			 */
			queryNeedsList(){
				const vm = this;
				const params = {
					param:'',
					keyword:'',
					page:1,
					type:'需求'
				}
				APIPOST('/api/business/search',params,function(res){
					if(res.data.code === 1){
						const {data} = res.data;
						vm.recordList = data.list.map(item =>{
							return {
								orderId: item.order_id,
								headerIcon: item.user.avatar,
								name: item.user.username,
								companyName: item.user.company_name,
								isHot: true,
								status:['../../static/qy.png'],
								desc: item.describe,
								tag: item.order_type,
								time: item.effective_s_time,
								show: item.hits
							}
						})
					}
				})
				
			},
			
			handleToDetail(item){
				uni.navigateTo({
					url: "../need-detail/need-detail?orderId=" + item.orderId
				})
			},
			
			handleSearch(e, val) {
				uni.navigateTo({
					url: '../searchDetail/searchDetail?keyword=' + e
				})
			}
		},
		components: {
			mSearch,
			BusinessCard
		},
	}
</script>

<style lang="scss">
	.home-wrap {
		padding: 0 30rpx 30rpx 30rpx;

		background: linear-gradient(180deg, #FDFEFD 0%, #F4F5F9 100%);

		.home__banner {
			image {
				width: 100%;
			}
		}

		.swiper-wrap {
			display: flex;
			flex-wrap: wrap;
		}

		.swiper-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 20%;
		}

		.swiper-item .swiper-item__box {
			width: 80rpx;
		}

		.swiper-item .swiper-item__box image {
			width: 100%;
		}

		.swiper-item text {
			font-size: 24rpx;
			color: #333333;
		}

		.home__tabs {
			height: 100rpx;
			display: flex;
			align-items: center;
			font-size: 26rpx;
			color: #666666;
		}

		.home__tabs text {
			margin-right: 40rpx;
		}

		.tabActive {
			font-size: 36rpx;
			font-weight: 500;
			color: #333333;
		}
		.home__tab-cont{
			padding-top: 24rpx;
		}
	}
</style>
