<template>
	<picker @change="handleChange" :value="index" :range="options">
		<view class="select">
			<input :value="value" :placeholder="placeholder" placeholder-class="plac" disabled />
			<image src="../../static/jtxx.png" mode="widthFix"></image>
		</view>
	</picker>
</template>
<script>
	export default {
		props: {
			value: String,
			placeholder: {
				type: String,
				default: '请选择'
			},
			options: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data(){
			return{
				index: 0
			}
		},
		methods: {
			handleChange(e) {
				this.index = e.target.value;
				this.$emit('input',this.options[this.index])
			}
		}
	}
</script>

<style lang="scss">
	.select {
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
</style>
