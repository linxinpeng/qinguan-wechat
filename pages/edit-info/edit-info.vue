<template>
	<view class="edit-info">
		<form>
			<head-title title="基本信息"></head-title>
			<view class="special-item">
				<label class="special-item__label">编辑头像</label>
				<view class="special-item__box">
					<u-upload :custom-btn="true" max-count="1">
						<view slot="addBtn" class="slot-btn"  hover-class="slot-btn__hover" hover-stay-time="150">
							<view class="item-tx">
								<image src="../../static/tx.png" mode="widthFix"></image>
							</view>
						</view>
					</u-upload>
				</view>
			</view>
			<view class="special-item">
				<label class="special-item__label">账号信息</label>
				<view class="special-item__box">
					<input placeholder="请输入账号信息" placeholder-class="plac" v-model="form.account" />
				</view>
			</view>
			<view class="special-item">
				<label class="special-item__label">认证情况</label>
				<view class="special-item__box">
					<view class="special-item__rz">去认证</view>
				</view>
			</view>
			<form-item label="姓名">
				<view class="item__wrap">
					<input v-model="form.name" placeholder="请输入" placeholder-class="plac" />
				</view>
			</form-item>
			<form-item label="所在地址">
				<view class="end-time comm-time" @click="showCity">
					<input placeholder="请选择地址" placeholder-class="plac" disabled v-model="form.addr" />
					<image src="../../static/jtxx.png" mode="widthFix"></image>
				</view>
			</form-item>
			<form-item label="联系方式" desc="（联系电话、微信号、QQ至少填一项）">
				<view class="contact-item">
					<view class="contact-item__icon">
						<image src="../../static/phone.png" mode="widthFix"></image>
					</view>
					<input type="number" maxlength="11" v-model="form.phone" />
				</view>
				<text class="space"></text>
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
			</form-item>
			<head-title style="margin-top: 50rpx;" title="职位信息"></head-title>
			<form-item label="公司名称">
				<view class="item__wrap">
					<input v-model="form.companyName" placeholder="请输入公司简称或品牌名称，如：青瓜传媒" placeholder-class="plac" />
				</view>
			</form-item>
			<form-item label="公司品牌">
				<view class="item__wrap">
					<input v-model="form.companyBrand" placeholder="请输入公司简称或品牌名称，如：青瓜传媒" placeholder-class="plac" />
				</view>
			</form-item>
			<form-item label="部门" required>
				<view class="item__wrap">
					<input v-model="form.companyDepartment" placeholder="请输入部门" placeholder-class="plac" />
				</view>
			</form-item>
			<form-item label="职位" required>
				<view class="item__wrap">
					<input v-model="form.companyJob" placeholder="请输入职位" placeholder-class="plac" />
				</view>
			</form-item>
			<form-item label="提供类型" required>
				<select-item v-model="form.support" :options="['支付宝', '微信','银行卡']"></select-item>
			</form-item>
			<form-item label="需求类型" required>
				<select-item v-model="form.needs" :options="['支付宝', '微信','银行卡']"></select-item>
			</form-item>
			<form-item label="需求描述" required>
				<view class="need-desc">
					<textarea v-model="form.introduce" placeholder-class="plac" placeholder="为了提高合作对接的效率，请尽可能详细描述您的需求，包括但不限于项目背景、当前问题、其他个性化需求等。500字以内"></textarea>
				</view>
			</form-item>
			<form-item label="公司logo" desc="（最佳尺寸为200*200像素，大小限制800kb)">
				<view class="upload">
					<g-upload ref='gUpload' :mode="form.logo" @chooseFile='chooseFile' @imgDelete='imgDelete' :columnNum="3"></g-upload>
				</view>
			</form-item>
			<view class="primary-btn">下一步</view>
		</form>
		<simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm"></simple-address>
	</view>
</template>

<script>
	import HeadTitle from "@/components/title/index.vue"
	import FormItem from "@/components/form-item/index.vue"
	import SelectItem from "@/components/select/index.vue"
	import GUpload from "@/components/g-upload/g-upload.vue"
	import simpleAddress from '@/components/simple-address/simple-address.vue';
	export default {
		data() {
			return {
				form: {
					imgs: [{
						url: 'http://pics.sc.chinaz.com/files/pic/pic9/201912/hpic1886.jpg',
					}],
					account: '',
					name: '',
					addr: '',
					belong: '',
					phone: '',
					wechat: '',
					qq: '',
					companyName: '',
					companyBrand: '',
					companyDepartment: '',
					companyJob: '',
					support: '',
					needs: '',
					introduce: '',
					logo: []
				},
				province: ['福建省', '浙江省'],
				city: ['漳州', '天津'],
				cityPickerValueDefault: [0, 0, 1],
				pickerText: ''
			}
		},
		methods: {
			showCity() {
				// 根据 label 获取
				var index = this.$refs.simpleAddress.queryIndex(['湖北省', '随州市', '曾都区'], 'label');
				console.log(index);
				this.cityPickerValueDefault = index.index;
				this.$refs.simpleAddress.open();
			},
			imgDelete(list, eq) {
				console.log("删除图片_list：", list)
				console.log("删除图片_eq：", eq)
			},
			chooseFile(list, v) {
				console.log("上传图片_list：", list)
				console.log("上传图片_v：", v)
			},
			onConfirm(e) {
				this.form.addr = e.label;
			}
		},
		components: {
			HeadTitle,
			FormItem,
			SelectItem,
			GUpload,
			simpleAddress
		}
	}
</script>

<style lang="scss">
	.edit-info {
		padding: 30rpx 40rpx;

		.special-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 22rpx 0;
			border-bottom: 2rpx solid #ededed;
			&__box{
				.u-preview-image{
					border-radius: 50%;
				}
			}
			&__label {
				font-size: 28rpx;
				color: #999999;
			}

			input {
				text-align: right;
			}

			&__rz {
				font-size: 28rpx;
				font-weight: 500;
				color: #2EB79E;
			}
		}
		.item-tx{
			width: 176rpx;
			height: 176rpx;
			image{
				width: 100%;
			}
		}
		
		.item__wrap {
			display: flex;
			align-items: center;
			height: 80rpx;
			background: #F6F7F9;
			border-radius: 8rpx;
			padding-left: 20rpx;

			input {
				width: 100%;
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

		.time {
			display: flex;
			align-items: center;

			.space {
				display: inline-block;
				padding: 0 20rpx;
				margin: 0 20rpx;
			}
		}

		.comm-time {
			display: flex;
			align-items: center;
			height: 80rpx;
			padding: 0 28rpx;
			background: #F6F7F9;
			border-radius: 8rpx;
			box-sizing: border-box;

			input {
				flex: 1;
				padding-right: 30rpx;
			}

			image {
				width: 16rpx;
			}
		}

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

	}
</style>
