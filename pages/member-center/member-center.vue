<template>
	<view class="ind-mem">
		<view class="ind-mem__header">
			<view v-if="false" class="header-content ind-men__header-unvip is-none">
				<view class="header-content__image">
					<image src="../../static/user-art.jpg" mode="widthFix"/>
				</view>
				<view class="header-content__info">
					<view>海边的卡卡</view>
					<p>您当前还不是VIP哦~</p>
				</view>
				<view class="header-content__business">
					<text style="color: #946740;">
						企业会员特权
					</text>
				</view>
			</view>
			<view class="header-content ind-men__header-vip">
				<view class="header-content__image">
					<image src="../../static/user-art.jpg"  mode="widthFix"/>
				</view>
				<view class="header-content__info">
					<view>海边的卡卡 <image src="../../static/vip1.png"  mode="widthFix"/></view>
					<view class="p" style="color: #946740;">2021.06.25会员到期</view>
				</view>
				<view class="header-content__business">
					<text style="color: #946740;">
						企业会员特权
					</text>
				</view>
			</view>
		</view>
		<view class="ind-mem__comm ind-mem__setmeal">
			<view class="h3">会员套餐</view>
			<view class="ind-mem__setmeal-cont">
				<view class="swiper-container">
					<view class="swiper-wrapper">
						<view class="swiper-slide swiper-item__active">
							<view class="swiper-item">
								<view class="ind-mem__setmeal-record">
									推荐仅15元/天
								</view>
								<view class="ind-mem__setmeal-vip">个人VIP版</view>
								<view class="ind-mem__setmeal-money">
									<text>499</text>元/月
								</view>
								<view class="ind-mem__setmeal-desc">100次沟通次数</view>
								<view class="ind-mem__setmeal-bottom">
									<image src="../../static/vip-hy.png"  mode="widthFix"/>
									初体验首选
								</view>
							</view>
						</view>
						<view class="swiper-slide">
							<view class="swiper-item">
								<view class="ind-mem__setmeal-record">
									推荐仅150元/天
								</view>
								<view class="ind-mem__setmeal-vip">个人VIP版</view>
								<view class="ind-mem__setmeal-money">
									<text>1399</text>元/季
								</view>
								<view class="ind-mem__setmeal-desc">200次沟通次数</view>
								<view class="ind-mem__setmeal-bottom">
									<image src="../../static/vip-hy.png"  mode="widthFix"/>
									超高性价比
								</view>
							</view>
						</view>
						<view class="swiper-slide">
							<view class="swiper-item">
								<view class="ind-mem__setmeal-record">
									推荐仅188元/天
								</view>
								<view class="ind-mem__setmeal-vip">个人SVIP版</view>
								<view class="ind-mem__setmeal-money">
									<text>5499</text>元/年
								</view>
								<view class="ind-mem__setmeal-desc">500次沟通次数</view>
								<view class="ind-mem__setmeal-bottom">
									<image src="../../static/svip-hy.png"  mode="widthFix"/>
									划算又省心
								</view>
							</view>
						</view>

						<view class="swiper-slide">
							<view class="swiper-item">
								<view class="ind-mem__setmeal-record">
									推荐仅205元/天
								</view>
								<view class="ind-mem__setmeal-vip">个人VIP版</view>
								<view class="ind-mem__setmeal-money">
									<text>9499</text>元/年
								</view>
								<view class="ind-mem__setmeal-desc">无限次沟通次数</view>
								<view class="ind-mem__setmeal-bottom">
									<image src="../../static/vip-hy.png"  mode="widthFix"/>
									最终选择
								</view>
							</view>
						</view>
						<view class="swiper-slide">
							<view class="swiper-item">
								<view class="ind-mem__setmeal-record">
									推荐仅235元/天
								</view>
								<view class="ind-mem__setmeal-vip">企业SVIP版</view>
								<view class="ind-mem__setmeal-money">
									<text>9998</text>元/年
								</view>
								<view class="ind-mem__setmeal-desc">
									<text>查看特权></text>
								</view>
								<view class="ind-mem__setmeal-bottom">
									<image src="../../static/svip-hy.png"  mode="widthFix"/>
									企业必备
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="ind-mem__comm ind-mem__buyaccount">
			<view class="h3">购买账号</view>
			<input type="tel" placeholder="请输入手机号码" placeholder-class="plac" maxlength="11" />
		</view>
		<view class="ind-mem__comm ind-mem__privilege">
			<view class="h3">会员优享权益</view>
			<view class="ind-mem__privilege-cont">
				<view class="ind-mem__privilege-item">
					<image src="../../static/gtcs.png"  mode="widthFix"/>
					<view class="h3">增加沟通次数</view>
					<view class="p">一键私聊，急速达成合作</view>
				</view>
				<view class="ind-mem__privilege-item">
					<image src="../../static/hqwx.png"  mode="widthFix"/>
					<view class="h3">直接获取微信</view>
					<view class="p">未及时回复，直接获取微信号</view>
				</view>
				<view class="ind-mem__privilege-item">
					<image src="../../static/bddh.png"  mode="widthFix"/>
					<view class="h3">直接拨打电话</view>
					<view class="p">拨打隐私号，快速联系合作方</view>
				</view>
				<view class="ind-mem__privilege-item">
					<image src="../../static/txfwf.png"  mode="widthFix"/>
					<view class="h3">降低提现服务费</view>
					<view class="p">提现服务费由<text>1%</text><br />降低至<text>0.5%</text></view>
				</view>
				<view class="ind-mem__privilege-item">
					<image src="../../static/yjsx.png"  mode="widthFix"/>
					<view class="h3">一键刷新</view>
					<view class="p">每天享受<text>3次</text>一键刷新特权</view>
				</view>
				<view class="ind-mem__privilege-item">
					<image src="../../static/zdhf.png"  mode="widthFix"/>
					<view class="h3">自动回复</view>
					<view class="p">有消息时可自动回复联系方式</view>
				</view>
			</view>
		</view>
		<view class="ind-mem__comm ind-mem__other">
			<view class="h3">会员套餐权益</view>
			<view class="ind-mem__other-table">
				<view class="ind-mem__other-header ind-mem__other-row">
					<view></view>
					<view>普通用户</view>
					<view>VIP用户</view>
					<view>SVIP用户</view>
					<view>企业用户</view>
				</view>
				<view class="ind-mem__other-row">
					<view>人脉对接</view>
					<view>1次</view>
					<view>10次</view>
					<view>10次</view>
					<view>30次</view>
				</view>
				<view class="ind-mem__other-row">
					<view>服务对接</view>
					<view>3次/天</view>
					<view>10次/天</view>
					<view>20次/天</view>
					<view>60次/天</view>
				</view>
				<view class="ind-mem__other-row">
					<view>需求对接</view>
					<view>无</view>
					<view>15次/天</view>
					<view>20次/天</view>
					<view>30次/天</view>
				</view>
				<view class="ind-mem__other-row">
					<view>加入社群</view>
					<view>无</view>
					<view>15次/天</view>
					<view>20次/天</view>
					<view>20次/天</view>
				</view>
				<view class="ind-mem__other-row">
					<view>专属标识</view>
					<view>无</view>
					<view>
						<image src="../../static/check.png"  mode="widthFix"/>
					</view>
					<view><image src="../../static/check.png"  mode="widthFix"/></view>
					<view><image src="../../static/check.png"  mode="widthFix"/></view>
				</view>
				<view class="ind-mem__other-row">
					<view>VIP客服服务</view>
					<view>无</view>
					<view><image src="../../static/check.png"  mode="widthFix"/></view>
					<view><image src="../../static/check.png"  mode="widthFix"/></view>
					<view><image src="../../static/check.png"  mode="widthFix"/></view>
				</view>
				<view class="ind-mem__other-row">
					<view>快速审核通道</view>
					<view>无</view>
					<view>无</view>
					<view><image src="../../static/check.png"  mode="widthFix"/></view>
					<view><image src="../../static/check.png"  mode="widthFix"/></view>
				</view>
				<view class="ind-mem__other-row">
					<view>搜索排名靠前</view>
					<view>无</view>
					<view>无</view>
					<view><image src="../../static/check.png"  mode="widthFix"/></view>
					<view><image src="../../static/check.png"  mode="widthFix"/></view>
				</view>
				<view class="ind-mem__other-row">
					<view>排名规则</view>
					<view>无</view>
					<view>无</view>
					<view>无</view>
					<view>10个</view>
				</view>
				<view class="ind-mem__other-row">
					<view>子账号</view>
					<view>无</view>
					<view class="ind-mem__other-money">499元/月</view>
					<view class="ind-mem__other-money">5998元/月</view>
					<view class="ind-mem__other-money">9998元/月</view>
				</view>
			</view>
			<view class="ind-mem__btn">
				<button class="pay-btn">立即支付</button>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
.ind-mem{
    background-color: #f2f2f2;
}
.ind-mem .ind-mem__header{
    background-image: url('../../static/hyzxbg.png');
    padding: 48rpx 0 40rpx 40rpx;
}
.ind-mem__header .header-content{
    display: flex;
    align-items: center;
}
.ind-mem__header .header-content__image{
    width: 88rpx;
    height: 88rpx;    
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20rpx;
}
.ind-mem__header .header-content__image image{
    width: 100%;
}
.ind-mem__header .header-content__info{

}
.swiper-wrapper{
	display: flex;
	overflow-x: auto;
}
.ind-mem__header .header-content__info view{
    font-size: 32rpx;
    font-weight: 500;
    color: #946740;
    display: flex;
    align-items: center;
}
.ind-mem__header .header-content__info view image{
    margin-left: 20rpx;
    width: 26rpx;
}
.ind-mem__header .header-content__info .p{
    font-size: 24rpx;
    color: #666666;
}
.ind-mem__header .header-content__business{
    margin-left: auto;
    width: 174rpx;
    height: 48rpx;
    background: rgba(255, 255, 255, 0.43);
    border-radius: 24rpx 0rpx 0rpx 24rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24rpx;
    color: #946740;
}
.ind-mem__comm{
    padding: 40rpx;
    background-color: #fff;
    min-height: 200rpx;
    margin-bottom: 20rpx;
}
.ind-mem__comm .h3{
    font-size: 32rpx;
    font-weight: 500;
    color: #333333;
    padding-bottom: 30rpx;
}
.ind-mem__buyaccount input{
    background: #F6F7F9;
    border-radius: 8rpx;
    width: 100%;
    height: 80rpx;
    padding-left: 24rpx;
    box-sizing: border-box;
}
.ind-mem__setmeal-cont .swiper-slide{
    width: 240rpx;
    margin-right: 10rpx;
    padding: 10rpx;
}
.ind-mem__setmeal-cont .swiper-item{
    width: 240rpx;
    height: 280rpx;
    border-radius: 12rpx;
    border: 2rpx solid #E9EAEC;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    box-sizing: border-box;
}

.ind-mem__setmeal-cont .swiper-item view.ind-mem__setmeal-vip{
    font-size: 24rpx;
    color: #333333;
    padding: 44rpx 0 10rpx 0;
}
.ind-mem__setmeal-cont .swiper-item .ind-mem__setmeal-money{
    font-size: 22rpx;
    color: #333333;
}
.ind-mem__setmeal-cont .swiper-item .ind-mem__setmeal-money text{
    font-size: 56rpx;
}
.ind-mem__setmeal-cont .swiper-item view.ind-mem__setmeal-desc{
    font-size: 22rpx;
    color: #999999;
}
.ind-mem__setmeal-cont .swiper-item view.ind-mem__setmeal-desc text{
    font-size: 22rpx;
    color: #DD543F;
}
.ind-mem__setmeal-cont .swiper-item .ind-mem__setmeal-bottom{
    margin-top: auto;
    height: 60rpx;
    background: #FEF5E8;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22rpx;
    color: #946740;
}
.ind-mem__setmeal-cont .swiper-item .ind-mem__setmeal-bottom image{
    width: 43rpx;
    margin-right: 10rpx;
}
.swiper-item__active .ind-mem__setmeal-record{
    display: block;
}
.ind-mem__setmeal-record{
    position: absolute;
    top: -10rpx;
    left: -10rpx;
    width: 176rpx;
    height: 48rpx;
    background: #FF4633;
    border-radius: 6rpx;
    display: none;
    line-height: 48rpx;
    text-align: center;
    font-size: 24rpx;
    color: #FFFFFF;
}
.swiper-item__active view.swiper-item{
    border: 4rpx solid #F7DEBC;
}
.swiper-item__active .swiper-item .ind-mem__setmeal-bottom{
    background: #F7DEBC;
}
.ind-mem__privilege-cont{
    display: flex;
    flex-wrap: wrap;
}
.ind-mem__privilege-item{
    width: calc(100% / 3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40rpx;
}
.ind-mem__privilege-item image{
    width: 100rpx;
    height: 100rpx;
    margin-bottom: 16rpx;
}
.ind-mem__privilege-item .h3{
    font-size: 24rpx;
    font-weight: 500;
    color: #333333;
    margin-bottom: 6rpx;
    padding-bottom: 0;
}
.ind-mem__privilege-item .p{
    font-size: 22rpx;
    color: #999999;
    text-align: center;
    padding: 0 20rpx;
}
.ind-mem__privilege-item .p text{
    color: #946740;
}
.ind-mem__other-table{
    width: 100%;
    border: 2rpx solid #E9EAEC;
    border-bottom: none;
    border-radius: 8rpx;
    overflow: hidden;
}
.ind-mem__other-row{
    display: flex;
    border-bottom: 2rpx solid #E9EAEC;
}
.ind-mem__other-header{
    background: #FEF5E8;
}

.ind-mem__other-row view{
    width: 19%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22rpx;
    color: #666666;
    line-height: 70rpx;
    border-right: 2rpx solid #E9EAEC;
}
.ind-mem__other-header view{
    font-weight: 500;
    font-size: 24rpx;
    color: #333333;
}
.ind-mem__other-row view:first-child{
    width: 24%;
}
.ind-mem__other-row view:last-child{
    border-right: none;
}
.ind-mem__other-row image{
    width: 24rpx;
}
.ind-mem__other-row .ind-mem__other-money{
    font-weight: 500;
    color: #DD543F;
}
.ind-mem__btn{
    margin-top: 57rpx;
    margin-bottom: 30rpx;
    width: 100%;
}
.ind-mem__btn button{
    background: #323031;
    border-radius: 8rpx;
    height: 92rpx;
    font-size: 32rpx;
    font-weight: 500;
    color: #FFCDB6;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}
</style>
