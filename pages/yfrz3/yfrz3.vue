<template>
	<view class="jf3">
		<form>
			<head-title style="margin-top: 40rpx;"  color="#3BB79C" title="联系信息" desc="（如何联系到您？)"></head-title>
			<form-item label="姓名" required>
				<view class="pure-input">
					<input v-model="form.xm" placeholder-class="plac" placeholder="请输入姓名"/>
				</view>
			</form-item>
			<form-item label="部门" required>
				<view class="pure-input">
					<input v-model="form.bm" placeholder-class="plac" placeholder="请输入部门"/>
				</view>
			</form-item>
			<form-item label="职位" required>
				<view class="pure-input">
					<input v-model="form.zw" placeholder-class="plac" placeholder="请输入职位"/>
				</view>
			</form-item>
			<form-item label="手机号码" required>
				<view class="pure-input">
					<input v-model="form.sjhm" placeholder-class="plac" placeholder="请输入手机号码"/>
				</view>
			</form-item>
			<form-item label="其他联系方式">
				<view class="contact-item">
					<view class="contact-item__icon">
						<image src="../../static/wx.png" mode="widthFix"></image>
					</view>
					<input type="number" v-model="form.wx" />
				</view>
				<view class="contact-item">
					<view class="contact-item__icon">
						<image src="../../static/qq.png" mode="widthFix"></image>
					</view>
					<input type="text" v-model="form.qq" />
				</view>
				<view class="contact-item">
					<view class="contact-item__icon">
						<image src="../../static/yx.png" mode="widthFix"></image>
					</view>
					<input type="text" v-model="form.yx" />
				</view>
			</form-item>
			<view class="primary-btn" style="margin-top: 50rpx;">确认提交</view>
		</form>
	</view>
</template>

<script>
	import FormItem from "@/components/form-item/index.vue"
	import HeadTitle from "@/components/title/index.vue"
	export default {
		data() {
			return {
				form:{
					xm:'',
					bm:'',
					zw:'',
					sjhm:'',
					wx:'',
					qq:'',
					yx:''
				}
			}
		},
		methods: {
			
		},
		components:{
			FormItem,
			HeadTitle
		}
	}
</script>

<style lang="scss">
	.jf3{
		padding: 30rpx 40rpx;
	}
.contact-item {
		display: flex;
		align-items: center;
		height: 80rpx;
		background: #F6F7F9;
		border-radius: 8rpx;
		padding: 0 28rpx;
		margin-bottom: 20rpx;

		&__icon {
			width: 24rpx;
			margin-right: 12rpx;

			image {
				width: 100%;
			}
		}

		input {
			flex: 1;
		}
	}
</style>
