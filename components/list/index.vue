<template>
	<!-- 
    列表组件
    @params: 
        row 是否flex 横向布局
        size: 字体大小
        key:属性名
        value:属性值
	 -->
	<view :class="['list',iclass]" :style="{'flex-direction': row?'row':'column','font-size':size+'px'}">
		<view class="list-key">{{tkey}}</view>
		<view class="list-value" v-if="row">{{value}}</view>
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
				default:12
			},
			tkey:"",
			value:"",
			"iclass":""
		}
	}
</script>

<style scoped>
	.list{
		display: flex;
		padding: 42upx 20upx;
	}
	.list .list-key{
		flex: 1;
		margin-left: 10upx;
		color:#999;
	}
	.list .list-value{
		flex: 2;
		color:#333;
	}

</style>