<template>
	<!-- 列表通用组件  外层 -->
	<!-- 
		@params:
			tkey : 头部标题 如: "订单编号"
			value : 值  如: 34632165746
			status : 状态
	-->
	<view :class="['listBox',iclass]">
		<view class="list">
			<view class="status">
				<view class="left">{{tkey}}: {{value}}</view>
				<view class="right">{{status}}</view>
			</view>
		<!-- 处理信息 dispose -->
			<view class="disposeInfo">
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			"iclass":"",
			tkey:{
				default:"订单编号"
			},
			value:null,
			status:{
				default:"已完成"
			},
		}
	}
</script>

<style>
	.listBox .list{
		background: #fff;
		padding: 10rpx;
		color:#333;
		font-size: 24rpx;
	}
	.listBox .list .status{
		padding: 30rpx 20rpx;
		border-bottom:1px solid #ccc;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.listBox .list .status .right{
		color:#f53530;
	}
	.listBox .list .disposeInfo{
		display: flex;
		flex-direction: column;
	}
</style>
