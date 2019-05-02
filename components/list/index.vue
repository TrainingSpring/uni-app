<template>
	<!-- 
    列表组件
    @params: 
        row 是否flex 横向布局
        size: 字体大小
        key:属性名
        value:属性值
	 -->
	<view class="list i-class" :style="{'flex-direction': row?'row':'column','font-size':size+'rpx'}">
		<view class="list-key">{{key}}</view>
		<view class="list-value">{{value}}</view>
		<view class="list-slot" v-if="!row">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			row:{
				default:true
			},
			size:{
				default:24
			},
			key:"",
			value:"",
			"i-class":""
		}
	}
</script>

<style scoped>
	.list{
		display: flex;
		padding: 42rpx 20rpx;
	}
	.list .list-key{
		flex: 1;
		margin-left: 10rpx;
		color:#999;
	}
	.list .list-value{
		flex: 2;
		color:#333;
	}

</style>