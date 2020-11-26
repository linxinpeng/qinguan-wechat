<template>
	<view class="jf">
		<form>
			<form-item label="公司简称" required>
				<view class="pure-input">
					<input v-model="form.gsjc" placeholder-class="plac" placeholder="请输入公司简称或品牌名称，如：青瓜传媒"/>
				</view>
			</form-item>
			<form-item label="公司全称" required>
				<view class="pure-input">
					<input v-model="form.gsqc" placeholder-class="plac" placeholder="请填写公司营业执照的注册名称"/>
				</view>
			</form-item>
			<form-item label="所属行业" required>
				<select-input v-model="form.sshy" :options="['支付宝', '微信','银行卡']"></select-input>
			</form-item>
			<form-item label="所在地址">
				<view class="end-time comm-time" @click="showCity">
					<input placeholder="请选择地址" placeholder-class="plac" disabled v-model="form.gsszd" />
					<image src="../../static/jtxx.png" mode="widthFix"></image>
				</view>
			</form-item>
			<form-item label="详细地址">
				<view class="pure-input">
					<input v-model="form.xxdz" placeholder-class="plac" placeholder="请填写公司营业执照的注册名称"/>
				</view>
			</form-item>
			<form-item label="公司网址" required>
				<view class="pure-input">
					<input v-model="form.gswz" placeholder-class="plac" placeholder="请填写公司营业执照的注册名称"/>
				</view>
			</form-item>
			<form-item label="公司介绍" required>
				<view class="need-desc">
					<textarea v-model="form.gsjs" placeholder-class="plac" placeholder="为了提高合作对接的效率，请尽可能详细描述您的需求，包括但不限于项目背景、当前问题、其他个性化需求等。500字以内"></textarea>
				</view>
			</form-item>
			<form-item label="公司logo" desc="（最佳尺寸为200*200像素，大小限制800kb)">
				<view class="upload">
					<u-upload :custom-btn="true" max-count="1">
						<view slot="addBtn" class="slot-btn"  hover-class="slot-btn__hover" hover-stay-time="150">
							<view class="item-tx">
								<image src="../../static/sczp.png" mode="widthFix"></image>
							</view>
						</view>
					</u-upload>
				</view>
			</form-item>
			<view class="primary-btn" style="margin-top: 50rpx;" @click="handleNext">下一步</view>
		</form>
		<simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm"></simple-address>
	</view>
	
</template>

<script>
	import SelectInput from "@/components/select/index"
	import FormItem from "@/components/form-item/index"
	import simpleAddress from '@/components/simple-address/simple-address.vue';
	export default {
		data() {
			return {
				form:{
					gsjc:'',
					gsqc:'',
					sshy:'',
					gsszd:'',
					xxdz:'',
					gswz:'',
					gsjs:'',
					gslg:''
				},
				cityPickerValueDefault: [0, 0, 1],
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
			handleNext(){
				uni.navigateTo({
					url: '../jfgsrz3/jfgsrz3'
				})
			},
			onConfirm(e) {
				this.form.gsszd = e.label;
			}
		},
		components:{
			SelectInput,
			FormItem,
			simpleAddress,
		}
	}
</script>

<style lang="scss">
	.jf{
		padding: 30rpx 40rpx;
	}
	.pure-input{
		display: flex;
		align-items: center;
		height: 80rpx;
		background: #F6F7F9;
		border-radius: 8rpx;
		padding: 0 30rpx;
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
	.item-tx{
		width: 216rpx;
		height: 216rpx;
		image{
			width: 100%;
		}
	}
</style>
