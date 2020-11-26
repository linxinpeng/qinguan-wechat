<template>
	<view class="need-detail">
		<view class="need-detail__head">
			<view class="head-title">
				<view>提供</view>
				<text>我需要抖音信息流，和田玉加粉白渠道，政策一级棒的联系我</text>
			</view>
			<view class="head-bottom">
				<text>3小时前</text>
				<view class="head-bottom__eye">
					<image src="../../static/show-eye.png" mode="widthFix"></image>
					<text>1384</text>
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
					<image src="../../static/user-art.jpg" mode="widthFix"></image>
				</view>
				<text class="user-name">周立波</text>
				<view class="user-company">
					｜ 青岛海米文化有限公司
				</view>
				<view class="user-tags">
					<image src="../../static/qy.png" mode="widthFix"></image>
					<image src="../../static/vip1.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="info-desc">长期合作，需要线本60到90之间，而且要那种正在运营的，要真实数据，正规平台。而且要那种正在运营的，要真实数据，正规平台。拿出诚信出来长期合作，骗子请绕行！</view>
			<view class="info-cont">
				<view class="info-cont__item">
					<label>所属行业：</label>
					<text>IT/互联网</text>
				</view>
				<view class="info-cont__item">
					<label>结算方式：</label>
					<text>CPC</text>
				</view>
				<view class="info-cont__item">
					<label>付款方式：</label>
					<text>可商议</text>
				</view>
				<view class="info-cont__item">
					<label>有效时间：</label>
					<text>2020-08-06</text>
				</view>
			</view>

		</view>
		<view class="need-detail__contact">
			<head-title title="联系方式"></head-title>
			<view class="contact">
				<view class="contact__row">
					<view class="contact__row-item">
						<image src="../../static/phone.png" mode="widthFix"></image>
						<text>手机号 13783475784</text>
					</view>
					<view class="contact__row-item">
						<image src="../../static/wx.png" mode="widthFix"></image>
						<text>微信 13783475784</text>
					</view>
				</view>
				<view class="contact__row">
					<image src="../../static/qq.png" mode="widthFix"></image>
					<text>QQ 98957844</text>
				</view>
				<view class="mask" v-if="!isVip">
					<text>升级VIP即可免费对接该渠道服务商</text>
					<view>升级会员</view>
				</view>
			</view>
		</view>
		<view class="need-detail__company">
			<head-title title="公司介绍"></head-title>
			<view class="company">
				<view class="company-desc">
					青瓜传媒是行业领先移动推广金牌服务商。专注于移动互联网广告营销服务，曾服务于国内众多行业：汽车、金融、电商、房产、教育、游戏、社交、工具等数百家一线知名品牌客户，如：万科、特步、北汽新能源、华强方特，杭州银行、搜狗输入法、陌陌应用等等等，为国内外<text
					 style="color: rgba(27, 188, 156, 1);">超过8000家</text>企业实现飞跃用户增长，
					青瓜传媒拥有十余年运营推广行业丰富经验。
				</view>
				<view class="company-imgs">
					<view class="company-imgs__item">
						<image src="../../static/user-art.jpg" mode="widthFix"></image>
					</view>
					<view class="company-imgs__item">
						<image src="../../static/user-art.jpg" mode="widthFix"></image>
					</view>
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
	import HeadTitle from "@/components/title/index.vue"
	export default {
		data() {
			return {
				isVip: false
			}
		},
		methods: {

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
					background: #2EB79E;
					border-radius: 21rpx;
					font-size: 29rpx;
					color: #FFFFFF;
					padding: 2rpx 8rpx;
					margin-right: 8rpx;
					transform: translateY(8rpx);
				}

				text {

					font-size: 40rpx;
					font-weight: 500;
					color: #333333;
					line-height: 57rpx;
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

			.contact {
				margin-top: 32rpx;
				position: relative;
				height: 140rpx;

				.mask {
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

					text {
						font-size: 24rpx;
						color: #FFCAA5;
						text-shadow: 0px 4rpx 4rpx rgba(0, 0, 0, 0.18);
					}

					view {
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

					text {
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
	
		&__company{
			padding-bottom: 30rpx;
			.company{
				&-desc{
					margin-top: 34rpx;
					font-size: 29rpx;
					color: rgba(51, 51, 51, 1);
					text-align: justify;
					line-height: 48rpx;
				}
				&-imgs{
					margin-top: 20rpx;
					display: flex;
					flex-wrap: wrap;
					&__item{
						display: flex;
						align-items: center;
						border: 2rpx solid #ededed;
						width: 208rpx;
						height: 208rpx;
						border-radius: 12rpx;
						overflow: hidden;
						margin-right: 10rpx;
						image{
							width: 100%;
						}
					}
				}
			}
		}
	}
</style>
