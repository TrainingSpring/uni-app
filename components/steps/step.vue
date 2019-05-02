<template>
    <view class="t-step">
		<view class="left">
			<view :class="['t-circle',`t-circle-${status}`]"></view>
			<!-- #ifndef MP-WEIXIN -->
				<view :class="[ 
					't-line', 
					(status == 'process' || status == 'finish')?'t-line-active':status == 'error'?'t-line-error':''
				  ]" v-if="!isLast"></view>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
				<view :class="[ 
					't-line', 
					(status == 'process' || status == 'finish')?'t-line-active':status == 'error'?'t-line-error':''
				  ]" v-if="!isLast"></view>
			<!-- #endif -->
		</view>
		<view class="right">
			<view class="title">
				<slot name="title"></slot>
			</view>
			<view class="content">
				<slot name="content"></slot>
			</view>
		</view>
    </view>
</template>

<script>
	export default {
		data(){
			return{
				// #ifndef MP-WEIXIN
				isLast:false
				// #endif
			}
		},
		mounted() {
			// #ifndef MP-WEIXIN
				this.$on("changeLast",()=>{
					this.isLast = true;
				})
			// #endif
		},
		props:{
			status:{
				default:"process",
				// params val: process finish error wait
			},
			// #ifdef MP-WEIXIN
			isLast:{
				default:false
			}
			// #endif
		}
	}
</script>

<style scoped>
	.t-step{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 20upx;
		height: 150upx;
		width:calc(100vw - 40upx);
		font-size: 24upx;
	}
	.t-step .left{
		flex: 1;
		display: flex;
		justify-content: flex-end;
		position: relative;
	}
	.t-step .left .t-circle{
		width: 48upx;
		height: 48upx;
		border-radius: 50%;
		border: 1px solid #ccc;
		/* background: #2d8cf0 ; */
		margin-right: 30upx;
		text-align: center;
		line-height: 48upx;
		
	}
	.t-step .left .t-circle.t-circle-process{
		border: 1px solid #0088FF !important;
	}
	.t-step .left .t-circle.t-circle-finish{
		border: 1px solid #0088FF !important;
		background: #0088FF;
	}
	.t-step .left .t-circle.t-circle-error{
		border: 1px solid #FF1516 !important;
	}
	.t-step .left .t-line{
		position: absolute;
		right: 54upx;
		height: 100upx;
		top: 50upx;
		background: #ccc;
		width: 1px;
	}
	.t-step .left .t-line.t-line-active{
		background: #0088FF !important;
	}
	.t-step .left .t-line.t-line-error{
		background: #FF1516 !important;
	}
	.t-step .right{
		flex: 3;
	}
	.t-step .right .title{
		font-weight: 600;
		color: #0088FF;
		font-size: 36upx;
	}
	.t-step .right .content{
		color: #999;
		font-size: 32upx;
	}
	
</style>
