<template>
    <!-- 
        @Author:Training
        @desc: 类似于html中的tr标签
        @warning: 注意  此标签一般和对应的目录下的table  td一起使用  使用方法类似html
        @prams:none
     -->
    <view :class="['t-tr',iclass]">
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
			"iclass":''
		}
	}
</script>

<style scoped>
	.t-tr{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		border-bottom: 1px solid #ddd;
	}
</style>
