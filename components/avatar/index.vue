<template>
    <view :class="['i-class','i-avatar','i-avatar-'+shape,'i-avatar-'+ size,src ? 'i-avatar-image' : '']">
        <image :src=" src " v-if=" src !== '' "></image>
        <view class="i-avatar-string" v-else><slot></slot></view>
    </view>
</template>

<script>
	import "./index.css"
	export default {
		
		data(){
			return{
				
			}
		},
		props:{
			 // circle || square
			shape: {
			    default: 'circle'
			},
			// small || large || default
			size: {
			    default: 'default'
			},
			src: {
			    default: ''
			}
		}
	}
</script>

<style scoped>

</style>
