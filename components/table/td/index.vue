<template>
    <!-- 
        @Author:Training
        @desc: 类似于html中的td标签
        @warning: 注意  此标签一般和对应的目录下的table  tr一起使用  使用方法类似html
                  需要在页面的引入处 在标签中定义flex
                  如: 引入名为:t-td
                    <t-td style="flex:1"></t-td>
        @prams:none
     -->
    <view :class="['t-td ',iclass]">
        <slot></slot>
    </view>
    
</template>

<script>
	export default {
		data(){
			return{

			}
		},
		props:{
			"iclass":""
		}
	}
</script>

<style scoped>
	.t-td {
		display: flex;
		border-right: 1px solid #ddd;
		text-align: center;
		padding: 20upx;
		font-size: 24upx;
	}
</style>
