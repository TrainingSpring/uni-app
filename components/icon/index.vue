<template>
	<view :class="['i-class','i-icon', type == '' ? '' : 'i-icon-' + type ,custom]" 
	:style="{'font-size': size+'upx', color:color ? color : 'inherit'}"></view>
	<!-- color:color ? color : 'inherit' -->
	</view>
</template>

<script>
	import "./index.css"
	export default {
		props: {
		type: {
            default: ''
        },
        custom: {
            default: ''
        },
        size: {
            default: 28
        },
        color: {
            default: ''
        }
		}
	}
</script>

<style scoped>

</style>
