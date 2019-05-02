<template>
	<view>
		<!--Components/CommTitle/index.wxml-->
		<space></space>
		<view class="details">
			<view class="title">{{title}}</view>
			<view class="date"><text space="nbsp">{{date}}</text></view>
			<view class="content">
			   <slot></slot>
				
			</view>
		</view>
	</view>
</template>

<script>
	import space from "../space/space"
	export default {
		props:['date','title'],
		components:{
			'space':space
		}
	}
</script>

<style scoped>
	.details{
		padding: 0 20rpx;
	}
	.details .title{
		font-size: 32rpx;
		font-weight: bold;
		margin-top: 22rpx;
		margin-left: 18rpx;
	}
	.details .date{
		color:#989898;
		font-size: 22rpx;
		margin-left: 18rpx;
	}
	.details .content{
		margin-top: 55rpx;
		font-size: 22rpx;
	}
</style>