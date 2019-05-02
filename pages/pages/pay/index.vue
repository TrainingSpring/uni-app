<template>
    <view>
		<view class="title">
		    请选择支付方式
		</view>
		<view class="payMode">
		    <!-- 支付模式 -->
		    <view class="mode">
		        <view class="icon">
		            <text class="iconfont icon-weixinzhifu"></text>
		        </view>
		        <view class="text">微信支付</view>
		        <view class="select">
		            <radio-group bindchange="selectPay">
		                <radio :value="payMode" :checked="true" color="#017eff"  />
		            </radio-group>
		        </view>
		    </view>
		    <!-- 确认支付按钮 -->
		    <view class="btn">微信支付{{rmb}}元</view>
		</view>
    </view>
</template>

<script>
	export default {
		data(){
			return{
				payMode:"wechat",
				rmb:525
			}
		},
		props:{
			
		}
	}
</script>

<style scoped>
	.title{
		background: #f5f5f5;
		padding: 20rpx;
		font-size: 22rpx;
		color: #999;
	}
	.payMode .mode{
		font-size: 26rpx;
		padding:30rpx 55rpx;
		display: flex;
		flex-direction: row;
		align-self: center;
	}
	.payMode .mode .icon .iconfont{
		font-size: 40rpx;
		color: #3fb53a;
	}
	.payMode .mode .text{
		margin-left: 25rpx;

	}
	.payMode .mode .select{
		flex: 1;
		display: flex;
		flex-direction: row-reverse;
	}
	.payMode .btn{
		width: 100%;
		height: 100rpx;
		text-align: center;
		line-height: 100rpx;
		color: #fff;
		font-size: 26rpx;
		background: #3398ff;
		position: fixed;
		bottom: 0;
	}
</style>
