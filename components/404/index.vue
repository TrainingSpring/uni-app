<template>
	<view class='notfound'>
	  <view class='img'>
		<image :src='img'></image>
	  </view>
	  <view class='text'>
		<text>
		  {{text}}
		</text>
	  </view>
	</view>

</template>

<script>
	export default {
		props:{
			img:{
				default:"/static/404_03.jpg"
			},
			text:{
				default:"404 NOT FOUND!"
			}
		}
	}
</script>

<style scoped>
	
	.notfound{
		display: flex;
		flex-direction: column;
		width:100%;
		height: 100vh;
		align-items: center;
		justify-content: center;
	}
	image{
		width:100%;
		height: 100%;
	}
	.img{
		width: 333rpx;
		height: 216rpx;
	}
	.text{
		color:#ccc;
	}
</style>