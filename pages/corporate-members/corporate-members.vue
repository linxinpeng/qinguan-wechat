<template>
	<view class="ent-member">
		<view class="ent-member__header">
			<image src="../../static/qyvipbg.png"  mode="widthFix"/>
		</view>
		<view class="ent-member__cont">
			<view class="ent-member__cont-db">
				<view class="ent-member__title">
					<text>企业版套餐对比</text>
				</view>
				<view class="ent-member__table">
					<view class="ent-member__table-header">
						<text class="ts1">企业会员套餐</text>
						<text>基础版</text>
						<text>标准版</text>
						<text>精英版</text>
					</view>
					<view class="ent-member__row">
						<text class="ts1">可分配沟通权限</text>
						<text>1500次</text>
						<text>2000次</text>
						<text>3000次</text>
					</view>
					<view class="ent-member__row">
						<text class="ts1">SVIP子账号</text>
						<text>5个</text>
						<text>10个</text>
						<text>10个</text>
					</view>
					<view class="ent-member__row">
						<text class="ts1">资源梳理卡</text>
						<text>5张</text>
						<text>10张</text>
						<text>20张</text>
					</view>
					<view class="ent-member__row">
						<text class="ts1">置顶卡</text>
						<text>30张</text>
						<text>30张</text>
						<text>90张</text>
					</view>
					<view class="ent-member__row">
						<text class="ts1">提现服务费</text>
						<text>0.2%</text>
						<text>0.2%</text>
						<text>0.2%</text>
					</view>
					<view class="ent-member__row">
						<text class="ts1" style="color:#333333;">会员价格</text>
						<text style="color: #DD543F;">9998元/月</text>
						<text style="color: #DD543F;">11998元/月</text>
						<text style="color: #DD543F;">19998元/月</text>
					</view>
				</view>
			</view>
			<view class="ent-member__cont">
				<view class="ent-member__js">
					<image src="../../static/qyjs.png"  mode="widthFix"/>
				</view>
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
.ent-member{

}
.ent-member__header{
    width: 100%;
}
.ent-member__header image{
    width: 100%;
    object-fit: contain;
	display: block;
}
.ent-member__cont{
    min-height: 20rpx;
    background-color: #1B1410;
    transform: translateY(-1rpx );
}
.ent-member__cont-db{
    padding-top: 60rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40rpx;
}
.ent-member__title{
    height: 2rpx;
    background-color: #E7CEB1;
    width: 460rpx;
    position: relative;
}
.ent-member__title text{
    position: absolute;
    top: -22rpx;
    left: 50%;
    transform: translateX(-50%);
    width: 265rpx;
    height: 44rpx;
    font-size: 32rpx;
    font-weight: 500;
    color: #E7CEB1;
    display: flex;
    background-color: #1B1410;
    justify-content: center;
}
.ent-member__table{
    margin-top: 60rpx;
    width: 100%;
    background: #FFFFFF;
    border-radius: 8rpx;
}
.ent-member__table-header{
    background: linear-gradient(94deg, #FFEBD1 0%, #BE9E6A 100%);
    border-radius: 8rpx 8rpx 0rpx 0rpx;
}
.ent-member__table-header,.ent-member__row{
    display: flex;
    height: 70rpx;
    border-bottom: 2rpx solid #E9EAEC;
}
.ent-member__row:last-child{
    border-bottom: none;
}
.ent-member__table-header text,.ent-member__row text{
    width: 24%;
    display: flex;
    font-size: 24rpx;
    align-items: center;
    color: #666666;
    justify-content: center;
    border-right:  2rpx solid #E9EAEC;
}
.ent-member__table-header text:last-child,.ent-member__row text:last-child{
    border-right: none;
}
.ent-member__js{
	width: 100%;
	image{
		width: 100%;
	}
}
text.ts1{
    width: 28%;
}
</style>
