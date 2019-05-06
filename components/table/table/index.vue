<template>
    <!-- 
        @Author:Training
        @desc: 类似于html中的table标签
        @warning: 注意  此标签一般和对应的目录下的tr  td一起使用  使用方法类似html
        @prams:none
     -->
    <view :class="[iclass,'t-table']"  >
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
	.t-table{
		border:1px solid #ddd;
		display: flex;
		flex-direction: column;
	}
</style>
