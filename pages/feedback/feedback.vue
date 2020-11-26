<template>
	<view class="feedback">
		<form-item label="反馈内容">
			<view class="need-desc">
				<textarea v-model="form.feedback" placeholder-class="plac" placeholder="请简要描述您要反馈的意见或建议内容，最多可输入500字"></textarea>
			</view>
		</form-item>
		<form-item label="图片上传" desc="（最多上传3张，大小限制800kb)">
			<view class="upload">
				<g-upload ref='gUpload' :mode="form.logo" @chooseFile='chooseFile' @imgDelete='imgDelete' :columnNum="3"></g-upload>
			</view>
		</form-item>
		<form-item label="联系方式" desc="（联系电话、微信号、QQ至少填一项）">
			<view class="contact-item">
				<view class="contact-item__icon">
					<image src="../../static/phone.png" mode="widthFix"></image>
				</view>
				<input type="number" maxlength="11" v-model="form.phone" />
			</view>
			<view class="contact-item">
				<view class="contact-item__icon">
					<image src="../../static/wx.png" mode="widthFix"></image>
				</view>
				<input type="text" v-model="form.wechat" />
			</view>
			<view class="contact-item">
				<view class="contact-item__icon">
					<image src="../../static/qq.png" mode="widthFix"></image>
				</view>
				<input type="text" v-model="form.qq" />
			</view>
			<view class="primary-btn" style="margin-top: 100rpx;">立即提交</view>
		</form-item>
	</view>
</template>

<script>
	import FormItem from "@/components/form-item/index"
	import GUpload from "@/components/g-upload/g-upload.vue"
	export default {
		data() {
			return {
				form: {
					feedback: '',
					imgs: [],
					phone: '',
					wechat: '',
					qq: ''
				}
			}
		},
		methods: {

		},
		components: {
			FormItem,
			GUpload
		}
	}
</script>

<style lang="scss">
	.feedback {
		padding: 20rpx 40rpx;

		.need-desc {
			height: 240rpx;
			background: #F6F7F9;
			border-radius: 8rpx;
			padding: 22rpx 28rpx;

			textarea {
				width: 100%;
				height: 100%;
			}
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
	}
</style>
