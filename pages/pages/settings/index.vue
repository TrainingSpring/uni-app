<template>
	<view class="commBox">
		 <i-cell-group i-class="other">    
				<i-cell title="关于云服" :is-link="true" ></i-cell>
				<i-cell title="用户隐私策略" :is-link="true"></i-cell>
				<i-cell title="意见反馈" :is-link="true" ></i-cell>
				<view class="settings-exit">退出当前账号</view>
			</i-cell-group>
	</view>
</template>

<script>
	import cellGroup from "../../../components/cell/cell-group.vue"
	import cell from "../../../components/cell/index.vue"
	export default {
		data(){
			return{
				
			}
		},
		props:{
			
		},
		components:{
			'i-cell-group':cellGroup,
			'i-cell':cell
		},
	}
</script>

<style scoped>
	.settings-exit{
	 
	    padding:40rpx 0;
	    font-size: 26rpx;
	    color:#3398ff;
	    text-align: center;
	    background: #fff;
	    margin-top: 1px;   
	}
</style>
