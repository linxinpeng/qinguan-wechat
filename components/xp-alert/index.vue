<template>
	<view class="xp-alert" v-show="visible" @click.self="handleClose">
		<view class="xp-alert__content">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			visible:{
				type: Boolean,
				default: false
			}
		},
		methods:{
			handleClose(){
				this.$emit('update:visible',false)
			}
		}
	}
</script>

<style lang="scss">
	.xp-alert{
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		background-color: rgba(0,0,0,0.65);
		&__content{
			
		}
	}
</style>
