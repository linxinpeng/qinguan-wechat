<template>
	<view class="cd">
		<view class="cd-top">
			<view class="cd-top__img">
				<image src="../../static/user-art.jpg" mode="widthFix"></image>
			</view>
			<view class="cd-top__center">
				<view class="cd-top__names">
					<text>刘德华</text>
					<view class="cd-top__imgs">
						<image src="../../static/qy.png" mode="widthFix"></image>
						<image src="../../static/zy.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="cd-top__company">
					北京玉米优先公司
				</view>
			</view>
			<view class="cd-top__btn" @click="handleShare">
				分享名片
			</view>
		</view>
		<view class="cd-list">
			<view class="cd-list__item">
				<label>行业：</label>
				<text> 广告媒体代理商</text>
			</view>
			<view class="cd-list__item">
				<label>品牌：</label>
				<text> 黑白灰科技</text>
			</view>
			<view class="cd-list__item">
				<label>公司：</label>
				<text> 广州蜜蜂文化传媒有限公司</text>
			</view>
			<view class="cd-list__item">
				<label>官网：</label>
				<text> http://www.opp2.com/
				</text>
			</view>
			<view class="cd-list__item">
				<label>提供：</label>
				<text> 四大搜 头条 抖音核代资源
				</text>
			</view>
			<view class="cd-list__item">
				<label>需要：</label>
				<text> 有实力的甲方爸爸</text>
			</view>
		</view>
		<view class="cd-module">
			<module-title title="联系方式"></module-title>
			<view class="contact">
				<view class="contact__item">
					<view class="contact__item-icon">
						<image src="../../static/phone.png" mode="widthFix"></image>
					</view>
					<view class="contact__item-cont">
						<label>手机：</label>
						<text>13783475784</text>
					</view>
					<view class="contact__copy" @click="handleCopy">复制</view>
				</view>
				<view class="contact__item">
					<view class="contact__item-icon">
						<image src="../../static/wx.png" mode="widthFix"></image>
					</view>
					<view class="contact__item-cont">
						<label>微信：</label>
						<text>13783475784</text>
					</view>
					<view class="contact__copy" @click="handleCopy">复制</view>
				</view>
				<view class="contact__item">
					<view class="contact__item-icon">
						<image src="../../static/qq.png" mode="widthFix"></image>
					</view>
					<view class="contact__item-cont">
						<label>QQ：</label>
						<text> 98957844</text>
					</view>
					<view class="contact__copy" @click="handleCopy">复制</view>
				</view>
				<view class="contact__item">
					<view class="contact__item-icon">
						<image src="../../static/wz.png" mode="widthFix"></image>
					</view>
					<view class="contact__item-cont">
						<label>地址：</label>
						<text>广东省 深圳市</text>
					</view>
					<view class="contact__copy" @click="handleCopy">复制</view>
				</view>
			</view>
		</view>

		<view class="cd-module">
			<module-title title="公司介绍"></module-title>
			<view class="cd-desc">
				青瓜传媒是行业领先移动推广金牌服务商。专注于移动互联网广告营销服务，曾服务于国内众多行业：汽车、金融、电商、房产、教育、游戏、社交、工具等数百家一线知名品牌客户，如：万科、特步、北汽新能源、华强方特，杭州银行、搜狗输入法、陌陌应用等等等，为国内外<text
				 style="color: #1BBC9C;">超过8000家</text>企业实现飞跃用户增长，
				青瓜传媒拥有十余年运营推广行业丰富经验。
			</view>
			<view class="cd-imgs">
				<view class="cd-imgs__wrap" v-for="i in 9" :key="i">
					<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602133865481&di=32627df4cafac01946c41bf60d8fce7d&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201409%2F08%2F20140908121452_Pdjxw.jpeg"
					 mode="widthFix"></image>
				</view>
			</view>
		</view>

		<view class="cd-module">
			<module-title title="发布消息"></module-title>
			<view class="cd-message">
				<view class="cd-message__item" v-for="i in 3" :key="i">
					<view class="cd-message__item-top">
						<view class="msg-btn">提供</view>
						<text>线上推广渠道</text>
					</view>
					<view class="cd-message__item-cont">
						我需要抖音信息流，和田玉加粉白渠道，政策一级棒的联系我
					</view>
					<view class="message-bottom">
						<text>3小时前</text>
						<view>
							<image src="../../static/show-eye.png" mode="widthFix"></image>
							1384
						</view>
					</view>
				</view>
			</view>
		</view>
		<u-popup v-model="show" mode="center" border-radius="16">
			<view class="share-box">
				<view class="share-inner">
					<canvas id="shareCanvas" canvas-id="shareCanvas" style="width: 100%; height: 100%;background-color: #fff;"></canvas>
				</view>
				<view class="share-btns">
					<button class="save" @click="saveImg">保存名片</button>
					<button class="share-hy">分享好友</button>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import ModuleTitle from "@/components/title/index"
	export default {
		data() {
			return {
				show: false
			}
		},
		methods: {
			canvasIdErrorCallback: function(e) {
				console.error(e.detail.errMsg)
			},
			handleShare() {
				this.show = true;
				this.$nextTick(function() {
					this.drawImg()
				})

			},
			handleCopy() {
				uni.showToast({
					title: '复制成功',
					duration: 2000
				});
			},
			saveImg() {
				console.log('in')
				uni.showLoading({
					title: '正在保存...',
					mask: true
				});
				let that = this;
				uni.canvasToTempFilePath({
					canvasId: 'shareCanvas',
					success: res => {
						console.log(res)
						that.savePic(res.tempFilePath);
					},
					fail: function() {
						uni.hideLoading();
						//TODO
					}
				});
			},
			//保存
			savePic(filePath) {
				const that = this;
				uni.saveImageToPhotosAlbum({
					filePath: filePath,
					success: function() {
						uni.showToast({
							title: '已保存系统相册',
							duration: 2000
						});
						that.show = false
					},
					fail: function(e) {
						uni.showToast({
							title: '失败',
							duration: 2000
						});
						//TODO
					},
					complete: function() {
						// uni.hideLoading();
					}
				});
			},
			drawImg() {
				var context = uni.createCanvasContext('shareCanvas')

				const bgImg = '../../static/share-bg.png'
				context.drawImage(bgImg, 0, 0, 282, 400)

				const author = "../../static/user-art.jpg"
				this.circleImg(context, author, 30, 40, 21)

				context.font = '17px 微软雅黑';
				context.textBaseline = 'middle'
				context.fillStyle = "#ffffff";
				context.fillText("王德法", 83, 52);

				const status = ['../../static/zy.png', '../../static/vip1.png']
				status.forEach((img, idx) => {
					context.drawImage(img, 140 + idx * 20, 42, 12, 15)
				})

				context.font = "12px 微软雅黑";
				context.textBaseline = 'middle';
				context.fillStyle = "#FFB600";
				context.fillText("北京蜜蜂传媒有限公司", 83, 76);

				context.font = "12px 微软雅黑";
				context.textBaseline = "middle";
				context.fillStyle = "#86B7B2";

				context.fillText("行业：", 38, 106);
				context.fillText("品牌：", 38, 126);
				context.fillText("公司：", 38, 146);
				context.fillText("官网：", 38, 166);

				context.fillStyle = "#FFFFFF";

				context.fillText("广告媒体代理商", 74, 106);
				context.fillText("黑白灰科技", 74, 126);
				context.fillText("广州蜜蜂文化传媒有限公司", 74, 146);
				context.fillText("http://www.opp2.com/", 74, 166);


				context.font = '17px 微软雅黑 bold';
				context.textBaseline = 'middle'
				context.fillStyle = "#ffffff";
				context.fillText("我提供", 38, 248);

				context.font = '12px 微软雅黑';
				context.textBaseline = 'middle'
				context.fillStyle = "rgba(255,255,255,0.9)";
				context.fillText("四大搜  头条  抖音核代资源", 38, 270);

				context.font = '17px 微软雅黑 bold';
				context.textBaseline = 'middle'
				context.fillStyle = "#ffffff";
				context.fillText("我需要", 38, 308);

				context.font = '12px 微软雅黑';
				context.textBaseline = 'middle'
				context.fillStyle = "rgba(255,255,255,0.9)";
				context.fillText("四大搜  头条  抖音核代资源", 38, 330);

				const logo = "../../static/header-logo.png"
				context.drawImage(logo, 12, 408, 112, 32)

				context.font = '13px 微软雅黑';
				context.textBaseline = 'middle'
				context.fillStyle = "#323334";
				context.fillText("让商务对接更简单", 12, 454);

				const qrCode = "../../static/xcx.jpg"
				context.drawImage(qrCode, 200, 408, 54, 54)


				context.font = '12px 微软雅黑';
				context.textBaseline = 'middle'
				context.fillStyle = "#323334";
				context.fillText("长按识别码", 198, 474);

				context.draw()
			},
			circleImg(context, img, x, y, r) {
				context.save();
				var d = 2 * r;
				var cx = x + r;
				var cy = y + r;
				context.arc(cx, cy, r, 0, 2 * Math.PI);
				context.clip();
				context.drawImage(img, x, y, d, d);
				context.restore();
			}
		},
		components: {
			ModuleTitle
		}
	}
</script>

<style lang="scss">
	.share-box {
		display: flex;
		justify-content: center;
		box-shadow: 0px 10rpx 18rpx 0px rgba(0, 0, 0, 0.1);
		flex-direction: column;
		align-items: center;

		.share-inner {
			width: 281px;
			height: 1020rpx;
			background: #FFFFFF;


		}

		.share-btns {
			display: flex;
			justify-content: space-between;
			width: 100%;
			padding: 20rpx 0;

			button {
				font-size: 32rpx;
				width: 230rpx;
				height: 66rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				background: #2EB79E;
				border-radius: 44rpx;
				color: #fff;
			}
		}
	}

	.cd {
		padding: 0 40rpx;

		&-top {
			display: flex;
			align-items: center;
			height: 150rpx;
			border-bottom: 2rpx solid #eee;

			&__img {
				width: 88rpx;
				height: 88rpx;
				border-radius: 50%;
				overflow: hidden;
				margin-right: 20rpx;

				image {
					width: 100%;
					display: block;
				}
			}

			&__center {
				.cd-top__names {
					display: flex;
					align-items: center;

					text {
						font-size: 36rpx;
						font-weight: 500;
						color: #333333;
						margin-right: 14rpx;
					}

					.cd-top__imgs {
						display: flex;
						align-items: center;

						image {
							width: 28rpx;
							margin-right: 10rpx;
						}
					}
				}

				.cd-top__company {
					margin-top: 4rpx;
					font-size: 28rpx;
					color: #666666;
				}
			}

			&__btn {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 168rpx;
				height: 68rpx;
				background: #2EB79E;
				border-radius: 34rpx;
				margin-left: auto;
				font-size: 28rpx;
				font-weight: 500;
				color: #FFFFFF;
			}
		}

		&-list {
			padding: 20rpx 0;

			&__item {
				display: flex;
				align-items: center;
				height: 60rpx;
				font-size: 28rpx;

				label {
					color: #999999;

				}

				text {
					color: #333333
				}
			}
		}

		&-module {
			margin-top: 20rpx;

			.contact {
				padding-top: 34rpx;

				&__item {
					display: flex;
					align-items: center;
					height: 80rpx;

					&-icon {
						width: 30rpx;
						margin-right: 24rpx;

						image {
							width: 100%;
						}
					}

					&-cont {
						font-size: 28rpx;
						color: #333333;
					}
				}

				&__copy {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 92rpx;
					height: 48rpx;
					border-radius: 24rpx;
					border: 1rpx solid #2EB79E;
					margin-left: auto;
					font-size: 24rpx;
					color: #2EB79E;
				}
			}

			.cd-desc {
				padding-top: 34rpx;
				font-size: 28rpx;
				color: #333333;
				line-height: 48rpx;
				text-align: justify;
			}

			.cd-imgs {
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				margin-top: 30rpx;
				padding-bottom: 60rpx;

				&__wrap {
					width: 208rpx;
					height: 208rpx;
					display: flex;
					align-items: center;
					border: 1rpx solid #eee;
					border-radius: 6rpx;
					overflow: hidden;
					margin-right: 10rpx;
					margin-bottom: 10rpx;

					image {
						display: block;
						width: 100%;
					}
				}
			}

			.cd-message {
				margin-top: 40rpx;

				&__item {
					height: 226rpx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					border-bottom: 2rpx solid #EDEDED;

					&-top {
						display: flex;
						align-items: center;
						margin-bottom: 12rpx;

						.msg-btn {
							display: flex;
							align-items: center;
							justify-content: center;
							width: 80rpx;
							background: #2EB79E;
							border-radius: 21rpx;
							font-size: 28rpx;
							color: #FFFFFF;
						}

						text {
							font-size: 28rpx;
							color: #999999;
							padding-left: 16rpx;
						}
					}

					&-cont {
						font-size: 28rpx;
						text-align: justify;
						color: #333333;
						margin-bottom: 16rpx;
					}

					.message-bottom {
						display: flex;
						align-items: center;
						justify-content: space-between;
						font-size: 24rpx;
						color: #999999;

						view {
							display: flex;
							align-items: center;

							image {
								width: 23rpx;
								margin-right: 8rpx;
							}
						}
					}
				}
			}
		}
	}
</style>
