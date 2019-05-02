<template>
    <view class="t-steps" :style="{
		'flex-direction':direction 
	}">
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
			direction:{
				default:"column"
			}
		},
		mounted() {
		// #ifndef MP-WEIXIN
			let child = this.$children[0].$children;
			let len = child.length;
			child[len-1].$emit("changeLast");
		// #endif
			
		}
	}
</script>

<style scoped>
	.t-steps{
		width: 100%;
		display: flex;
		align-items: center;
	}
</style>
