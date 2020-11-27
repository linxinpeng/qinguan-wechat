<template>
	<view class="me">
		<view class="me-head">
			<view class="me-head__icon">
				<image :src="userInfo.avatar?userInfo.avatar:`../../static/user-art.jpg`" mode="widthFix"></image>
			</view>
			<view class="me-head__actions">
				<template v-if="currStatus == 0">
					<view class="me-head__login">
						登录/注册
					</view>
				</template>
				<template v-else>
					<view class="me-head__more">
						<view class="more-name">{{userInfo.username || '暂无昵称'}}</view>
						<text>{{userInfo.mobile}}</text>
					</view>
					<view v-if="currStatus == 1" class="more-btn">未认证</view>
					<view v-else class="more-btn has-rz">已认证</view>
				</template>
			</view>
		</view>

		<view class="me-actions">
			<view class="actions-item">
				<view>0</view>
				<text>我的发布</text>
			</view>
			<view class="line"></view>
			<view class="actions-item" @click="handleToHistory">
				<view>13</view>
				<text>合作历史</text>
			</view>
			<view class="line"></view>
			<view class="actions-item" @click="handleToEdit('has')">
				<view>
					<image src="../../static/mp.png" mode="widthFix"></image>
				</view>
				<text>我的名片</text>
			</view>
			<view class="line"></view>
			<view class="actions-item" @click="handleToEdit">
				<view>
					<image src="../../static/bjzl.png" mode="widthFix"></image>
				</view>
				<text>编辑资料</text>
			</view>
		</view>

		<view class="check">
			<view class="check-item">
				<label>剩余查看次数：</label>
				<text>{{userInfo.keyword_match_num || 0}}</text>
			</view>
			<view class="check-item">
				<label>刷新次数：</label>
				<text>{{userInfo.refresh_times || 0}}</text>
			</view>
			<view class="check-item">
				<label>置顶次数：</label>
				<text>{{userInfo.top_times || 0}}</text>
			</view>
			<view class="check-item">
				<label>子账户数：</label>
				<text>{{userInfo.sub_account_num || 0}}</text>
			</view>
		</view>

		<view class="me-card">
			<view class="card-wrap" v-if="currStatus != 2">
				<view class="wrap-info un-vip">
					<image src="../../static/vip-liang.png" mode="widthFix"></image>
					<text>您还不是通青瓜会员</text>
					<view @click="handleVip">开通会员</view>
				</view>
				<image src="../../static/bg-unvip.png" mode="widthFix"></image>
			</view>
			<view class="card-wrap" v-else>
				<view class="wrap-info">
					<image src="../../static/vip-liang.png" mode="widthFix"></image>
					<text>{{userInfo.level_expiretime}}会员到期</text>
					<view>查看权益</view>
				</view>
				<image src="../../static/bg-vip.png" mode="widthFix"></image>
			</view>
		</view>

		<view class="me-list">
			<view class="list-item" @click="handleToCompany">
				<image class="item-icon" src="../../static/gsrz.png" mode="widthFix"></image>
				<text>公司认证</text>
				<view class="list-item__arrow">
					<image src="../../static/jt333.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="list-item" @click="handleToVip">
				<image class="item-icon" src="../../static/hyzx.png" mode="widthFix"></image>
				<text>会员中心</text>
				<view class="list-item__arrow">
					<image src="../../static/jt333.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="list-item" @click="handleToHelp">
				<image class="item-icon" src="../../static/bzzx.png" mode="widthFix"></image>
				<text>帮助中心</text>
				<view class="list-item__arrow">
					<image src="../../static/jt333.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="list-item" @click="handleConfig">
				<image class="item-icon" src="../../static/sz.png" mode="widthFix"></image>
				<text>设置</text>
				<view class="list-item__arrow">
					<image src="../../static/jt333.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currStatus: 1,
				userInfo: {},
				phone: ''
			}
		},
		onLoad() {
			const userinfo = uni.getStorageSync('userinfo');
			if (userinfo) {
				this.userInfo = userinfo;
			};

			const vip = uni.getStorageSync('vip')
			this.currStatus = vip ? 2 : 1

		},
		methods: {


			handlePhoneNumber(e) {
				console.log(e)
			},
			handleToHistory() {
				uni.navigateTo({
					url: "../cooperation-history/cooperation-history"
				})
			},
			handleVip() {
				uni.navigateTo({
					url: "../member-center/member-center"
				})
			},
			handleToVip() {
				uni.navigateTo({
					url: "../corporate-members/corporate-members"
				})
			},
			handleToEdit(params) {
				uni.navigateTo({
					url: "../edit-info/edit-info"
				})
			},
			handleToHelp() {
				uni.navigateTo({
					url: "../help/help"
				})
			},
			handleToCompany() {
				uni.navigateTo({
					url: "../company-in/company-in"
				})
			},
			handleConfig() {
				uni.navigateTo({
					url: "../config/config"
				})
			}
		}
	}
</script>
<style lang="scss">
	.me {
		.reset-phone-btn {
			background: none;
			padding: 0;
			color: #22AE94;

			&::after {
				border: none;
			}
		}

		background: #FDFEFD;

		&-head {
			padding: 40rpx;
			display: flex;

			&__icon {
				width: 112rpx;
				height: 112rpx;
				border-radius: 50%;
				overflow: hidden;

				image {
					width: 100%;
					height: 100%;
					display: block;
				}
			}

			&__actions {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding-left: 24rpx;

				.me-head__login {
					font-size: 36rpx;
					font-weight: 500;
					color: #333333;
				}

				.me-head__more {
					.more-name {
						font-size: 36rpx;
						font-weight: 500;
						color: #333333;
						line-height: 50rpx;
					}

					text {
						font-size: 28rpx;
						font-weight: 400;
						color: #999999;
						line-height: 40rpx;
					}
				}

				.more-btn {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 128rpx;
					height: 52rpx;
					background: #EBECED;
					border-radius: 28rpx;
					font-size: 24rpx;
					color: #999999;
				}

				.has-rz {
					color: #fff;
					background: #2EB79E;
				}
			}
		}

		.check {
			margin-top: 40rpx;
			display: flex;
			padding: 0 40rpx;
			flex-wrap: wrap;

			&-item {
				display: flex;
				align-items: center;
				width: 50%;
				height: 50rpx;
				font-size: 28rpx;

				label {
					color: rgba(0, 0, 0, 0.65);
				}
			}
		}

		&-actions {
			display: flex;
			align-items: center;

			.actions-item {
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				view {
					width: 41rpx;
					font-size: 36rpx;
					font-weight: 600;
					color: #22AE94;

					image {
						width: 100%;
					}
				}

				text {
					font-size: 26rpx;
					color: #666666;
				}

			}

			.line {
				display: flex;
				width: 2rpx;
				height: 78rpx;
				background: #EDEDED;
			}
		}

		&-card {
			margin-top: 40rpx;

			.card-wrap {
				position: relative;
				width: 100%;
				height: 100rpx;

				image {
					width: 100%;
				}

				.wrap-info {
					position: absolute;
					top: 0;
					left: 30rpx;
					display: flex;
					align-items: center;
					z-index: 11;
					width: calc(100% - 60rpx);
					height: 100%;
					padding: 0 34rpx;
					box-sizing: border-box;

					image {
						width: 32rpx;
					}

					text {
						font-size: 28rpx;
						color: #68502F;
						padding-left: 24rpx;
					}

					view {
						display: flex;
						align-items: center;
						justify-content: center;
						width: 160rpx;
						height: 48rpx;
						background: #FEE9CF;
						border-radius: 24rpx;
						font-size: 24rpx;
						color: #68502F;
						margin-left: auto;
					}
				}

				.un-vip {
					text {
						color: #F9D5A4;
					}

					view {

						color: #492720;
						background: linear-gradient(90deg, #FFEBD1 0%, #EFCDA3 100%);
					}
				}
			}
		}

		&-list {
			padding: 0 40rpx;
			padding-top: 20rpx;
			background: #fff;

			.list-item {
				height: 112rpx;
				display: flex;
				align-items: center;
				border-bottom: 2rpx solid #EDEDED;

				.item-icon {
					width: 32rpx;
					margin-right: 28rpx;
				}

				text {
					font-size: 30rpx;
					color: #343434;
				}

				&__arrow {
					margin-left: auto;

					image {
						width: 10rpx;
					}
				}
			}
		}
	}
</style>
