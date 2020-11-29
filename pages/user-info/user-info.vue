<template>
	<view class="user-info">
		<head-title title="基本信息"></head-title>
		<view class="user-info__wrap">
			<view class="xp-cell">
				<label>姓名：</label>
				<text>{{userData.username}}</text>
			</view>
			<view class="xp-cell">
				<label>状态：</label>
				<text>{{userData.status | filterStatus}}</text>
			</view>
			<view class="xp-cell">
				<label>公司简称：</label>
				<text>{{userData.company_nickname}}</text>
			</view>
			<view class="xp-cell">
				<label>公司名：</label>
				<text>{{userData.company_name}}</text>
			</view>
			<view class="xp-cell">
				<label>部门：</label>
				<text>{{userData.department}}</text>
			</view>
			<view class="xp-cell">
				<label>岗位：</label>
				<text>{{userData.position}}</text>
			</view>
			<view class="xp-row">
				<label>证明文件：</label>
				<view class="">
					<image :src="userData.prove_image" mode="widthFix"></image>
				</view>
			</view>
			<button class="edit-info" @click="handleEdit">修改信息</button>
		</view>
	</view>
</template>

<script>
	import HeadTitle from "@/components/title/index.vue"
	import FormItem from "@/components/form-item/index.vue"
	import {
		APIGET
	} from "@/api/index.js"
	export default {
		data() {
			return {
				userData: {}
			}
		},
		filters: {
			filterStatus(data) {
				return data === 'Del' ? '已删除' : data === 'Verify' ? '审核中' : data === 'Failed' ? '审核失败' : data === 'Pushed' &&
					'审核通过'
			}
		},
		methods: {
			/**
			 * 查询用户信息
			 */
			queryUserData() {
				const vm = this;
				APIGET('/api/user/personal_auth', {
					token: '98c3b67f-b08d-4d8e-974a-6aa85f3a35fb'
				}, function(resp) {
					if (resp.data.code === 1) {
						vm.userData = resp.data.data;
					}
				})
			},
			
			/**
			 * 修改用户信息
			 */
			handleEdit(){
				uni.navigateTo({
					url:'../edit-info/edit-info'
				})
			}
		},
		onLoad() {
			this.queryUserData()
		},
		components: {
			HeadTitle,
			FormItem
		}
	}
</script>

<style lang="scss">
	.user-info {
		padding: 36rpx;

		&__wrap {
			padding: 12rpx;
		}
	}

	.xp-cell {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 90rpx;
		border-bottom: 1px solid #ebedf0;

		label {
			color: #666;
		}
	}

	.xp-row {
		padding: 24rpx 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #ebedf0;

		label {
			color: #666;
		}

		view {
			height: 120rpx;
			width: 120rpx;

			image {
				width: 100%;
			}
		}
	}

	.edit-info {
		margin-top: 24rpx;
		height: 80rpx;
		background: #2EB79E;
		border-radius: 50rpx;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		font-size: 32rpx;
		font-weight: 500;
		color: #FFFFFF;
	}
</style>
