<template>
	<view class="staff-certification">
		<head-title title="职员认证"></head-title>
		<view class="staff-certification__form">
			<u-form :model="form" ref="uForm" label-position="top">
				<u-form-item label="头像" label-position="left">
					<view class="staff-certification__avatar-wrap" tap="chooseAvatar">
						<image class="staff-certification__img" :src="form.avatar" mode="aspectFill"></image>
					</view>
				</u-form-item>
				<u-form-item label="昵称">
					<u-input v-model="form.nickname" />
				</u-form-item>
				<u-form-item label="地址">
					<u-input :disabled="true" placeholder="选择地址" v-model="form.addr" @click="show = true"></u-input>
				</u-form-item>
				<u-form-item label="微信">
					<u-input v-model="form.wxid" />
				</u-form-item>
				<u-form-item label="QQ">
					<u-input v-model="form.qqid" />
				</u-form-item>
				<u-form-item label="个人简介">
					<u-input v-model="form.introduce" />
				</u-form-item>
			</u-form>
		</view>
		<u-picker mode="region" v-model="show" :area-code='["13", "1303", "130304"]' @confirm="handleChooseCity"></u-picker>
	</view>
</template>

<script>
	import HeadTitle from "@/components/title/index.vue"
	export default {
		data() {
			return {
				form: {
					avatar: '../../static/tx.png',
					nickname: '',
					introduce: '',
					addr:'',
					wxid: '',
					qqid: ''
				},
				show: false
			}
		},
		created() {
			// 监听从裁剪页发布的事件，获得裁剪结果
			uni.$on('uAvatarCropper', path => {
				this.form.avatar = path;
				// 可以在此上传到服务端
				uni.uploadFile({
					url: 'http://www.example.com/upload',
					filePath: path,
					name: 'file',
					complete: (res) => {
						console.log(res);
					}
				});
			})
		},
		methods: {
			handleChooseCity(){},
			/**
			 * 上传头像
			 */
			chooseAvatar() {
				// 此为uView的跳转方法，详见"文档-JS"部分，也可以用uni的uni.navigateTo
				uni.navigateTo({
					// 关于此路径，请见下方"注意事项"
					url: '/uview-ui/components/u-avatar-cropper/u-avatar-cropper',
					// 内部已设置以下默认参数值，可不传这些参数
					params: {
						// 输出图片宽度，高等于宽，单位px
						destWidth: 300,
						// 裁剪框宽度，高等于宽，单位px
						rectWidth: 200,
						// 输出的图片类型，如果'png'类型发现裁剪的图片太大，改成"jpg"即可
						fileType: 'jpg',
					}
				})
			},
		},
		components: {
			HeadTitle
		}
	}
</script>

<style lang="scss">
	.staff-certification {
		padding: 36rpx;

		&__avatar-wrap {
			overflow: hidden;
			text-align: right;
		}

		&__img {
			width: 120rpx;
			height: 120rpx;
			border-radius: 100rpx;
		}
	}
</style>
