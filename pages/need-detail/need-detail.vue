<template>
	<view class="need-detail">
		<view class="need-detail__head">
			<view class="head-title">
				<view>{{data.order_type}}</view>
				<text>{{data.title}}</text>
			</view>
			<view class="head-bottom">
				<text>{{data.effective_s_time}}</text>
				<view class="head-bottom__eye">
					<image src="../../static/show-eye.png" mode="widthFix"></image>
					<text>{{data.hits}}</text>
				</view>
				<view class="head-bottom__jb">
					<image src="../../static/jg.png" mode="widthFix"></image>
					<text>举报</text>
				</view>
			</view>
		</view>
		<view class="need-detail__info">
			<view class="user">
				<view class="user-author">
					<image :src="data.user.avatar" mode="widthFix"></image>
				</view>
				<text class="user-name">{{data.user.username}}</text>
				<view class="user-company">
					｜ {{data.user.company_name || '无'}}
				</view>
				<view class="user-tags">
					<image src="../../static/qy.png" mode="widthFix"></image>
					<image src="../../static/vip1.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="info-desc">{{data.describe}}</view>
			<view class="info-cont">
				<view class="info-cont__item">
					<label>所属行业：</label>
					<text>{{data.trade_type}}</text>
				</view>
				<view class="info-cont__item">
					<label>结算方式：</label>
					<text>{{data.settle_style}}</text>
				</view>
				<view class="info-cont__item">
					<label>付款方式：</label>
					<text>{{data.payment_style}}</text>
				</view>
				<view class="info-cont__item">
					<label>有效时间：</label>
					<text>{{data.effective_e_time}}</text>
				</view>
			</view>

		</view>
		<view class="need-detail__contact">
			<head-title title="联系方式"></head-title>
			<view class="contact">
				<view class="contact__row">
					<view class="contact__row-item">
						<image src="../../static/phone.png" mode="widthFix"></image>
						<text>手机号 {{data.mobile}}</text>
					</view>
					<view class="contact__row-item">
						<image src="../../static/wx.png" mode="widthFix"></image>
						<text>微信 {{data.wxid}}</text>
					</view>
				</view>
				<view class="contact__row">
					<image src="../../static/qq.png" mode="widthFix"></image>
					<text>QQ {{data.qqid}}</text>
				</view>
				<view class="mask" v-if="!isVip">
					<text>升级VIP即可免费对接该渠道服务商</text>
					<view @click="handleUpVip">升级会员</view>
				</view>
			</view>
		</view>
		<view class="need-detail__list">
			<head-title title="你可能感兴趣"></head-title>
			<view class="need-list">
				<view class="need-list__item">
					<text>我需要 友情链接 广告位置 需要开百度账户</text>
				</view>
				<view class="need-list__item">
					<text>需要今日头条金融户跑表单，有户的赶紧私我，量大</text>
				</view>
				<view class="need-list__item">
					<text>我需要百度丰胸户，软文优先！政策有优势的来撩！</text>
				</view>
				<view class="need-list__item">
					<text>我需要要头条KA，在线教育年预算5000-800在线教育年预算5000-800</text>
				</view>
				<view class="need-list__item">
					<text>我需要 友情链接 广告位置 需要开百度账户</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {APIPOST} from "@/api/index.js"
	import HeadTitle from "@/components/title/index.vue"
	export default {
		data() {
			return {
				isVip: false,
				
				data: {}
			}
		},
		onLoad(options){
			this.init(options)
		},
		methods: {
			init(options){
				const vm = this;
				const params = {
					order_id: options.orderId,
					token: 'xasdsadasa'
				};
				APIPOST('/api/business/detail',params,(resp) =>{
					if(resp.data.code == 1){
						vm.data = resp.data.data
						console.log(vm.data)
					}else{
						uni.showToast({
							title: resp.msg
						})
					}
				})
			},
			
			handleUpVip(){
				uni.switchTab({
					url:"../me/me"
				})
			}
		},
		components: {
			HeadTitle
		}
	}
</script>

<style lang="scss">
	.need-detail {
		padding: 36rpx 40rpx;

		&__head {
			padding-bottom: 30rpx;
			border-bottom: 2rpx solid #ededed;

			.head-title {
				view {
					float: left;
					background: #3296FA;
					border-radius: 21rpx;
					font-size: 29rpx;
					color: #FFFFFF;
					padding: 2rpx 8rpx;
					margin-right: 8rpx;
					transform: translateY(6rpx);
				}

				text {

					font-size: 40rpx;
					font-weight: 500;
					color: #333333;
				}
			}

			.head-bottom {
				display: flex;
				align-items: center;
				margin-top: 24rpx;

				image {
					width: 24rpx;
					margin-right: 6rpx;
				}

				text {
					font-size: 24rpx;
					color: #999999;
				}

				&__eye {
					margin: 0 42rpx;
				}
			}
		}

		&__info {
			.user {
				display: flex;
				align-items: center;
				height: 96rpx;

				&-author {
					width: 48rpx;
					height: 48rpx;
					border-radius: 50%;
					overflow: hidden;

					image {
						width: 100%;
					}
				}

				&-name {
					margin-left: 12rpx;
					font-size: 29rpx;
					font-weight: 500;
					color: #333333;
				}

				&-company {
					font-size: 24rpx;
					color: #999999;
				}

				&-tags {
					margin-left: 16rpx;

					image {
						width: 24rpx;
						margin-right: 16rpx;
					}
				}
			}

			.info-desc {
				font-size: 29rpx;
				color: #333333;
				line-height: 48rpx;
				text-align: justify;
			}

			.info-cont {
				padding: 20rpx 0;
				font-size: 29rpx;

				&__item {
					margin-bottom: 10rpx;

					label {
						color: #666666;
					}

					text {
						color: #333333;
					}
				}

			}
		}

		&__contact {
			padding-bottom: 30rpx;
			border-bottom: 2rpx solid #ededed;
			
			.contact {
				margin-top: 32rpx;
				position: relative;
				height: 140rpx;
				.mask{
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					z-index: 2;
					background: rgba(30, 16, 13, 0.9);
					border-radius: 16rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					text{
						font-size: 24rpx;
						color: #FFCAA5;
						text-shadow: 0px 4rpx 4rpx rgba(0, 0, 0, 0.18);
					}
					view{
						display: flex;
						align-items: center;
						justify-content: center;
						width: 200rpx;
						height: 64rpx;
						background: linear-gradient(90deg, #E8BB9D 0%, #F4DBC1 100%);
						border-radius: 42rpx;
						margin-top: 20rpx;
						font-size: 29rpx;
						font-weight: 500;
						color: #6A3313;
					}
				}
				&__row {
					display: flex;
					align-items: center;
					margin-bottom: 20rpx;

					&-item {
						margin-right: 20rpx;
					}

					image {
						width: 24rpx;
						margin-right: 12rpx;
					}

					text {
						font-size: 29rpx;
						color: #666666;
					}
				}
			}
		}

		&__list {
			margin-top: 30rpx;

			.need-list {
				&__item {
					display: flex;
					align-items: center;
					width: 100%;
					height: 100rpx;
					font-size: 29rpx;
					color: #666666;
					border-bottom: 2rpx solid #EDEDED;
					
					text{
						display: block;
						width: 100%;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					/* 追加这一行代码 */
					&:hover {
						color: #1BBC9C;
					}
				}
			}
		}
	}
</style>
