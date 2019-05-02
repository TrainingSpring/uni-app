<template>
	<view>
		<!--Components/listItem/listItem/index.wxml-->
		<!-- 列表通用组件  内层 -->
		<view class="info i-class">
			<view>{{tkey}}:</view>
			<text :style="{color:valueColor?valueColor:'auto'}">{{value}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			
			};
		},
		props:['tkey','value','valueColor'],
		mounted() {
		}
	}
</script>

<style>
/* Components/listItem/listItem/index.wxss */
.info{
    padding:25rpx 20rpx;
    display: flex;
}
.info view{
    flex: 1;
}
.info text{
    flex: 4;
}
</style>
