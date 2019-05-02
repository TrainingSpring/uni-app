<template>
    <view>
		<!-- 评价 -->
		<space></space>
		<view class="evalute">
		    <view class="handleStatus">维修已完成</view>
		    <view class="eval">请对本次服务作出评价</view>
		    <view class="rate">
		        <i-rate 
		            size="26"
		            @change="changeStar" 
		            :value="starIndex">
		    </i-rate>
		    </view>
		    <view class="other">
		        <textarea placeholder="写其他意见和建议" @input="changeText">
		
		        </textarea>
		    </view>
		    <view class="submit" @tap="submit">
		        匿名提交
		    </view>
		
		</view>
    </view>
</template>

<script>
	import space from "../../../components/space/space.vue";
	import rate from "../../../components/uni-rate/uni-rate.vue"
	export default {
		data(){
			return{
				starIndex:0,
				text:""
			}
		},
		props:{
			
		},
		components:{
			space,
			"i-rate":rate
		},
		methods:{
			/**
			 * 更改星星数量
			 */
			changeStar({detail}){
				this.starIndex = detail.index;
			},
			/**
			 * 更改评价内容
			 * @param {*} e 
			 */
			changeText({detail}){
				this.text = detail.value;
			},
			/**
			 * 提交评价
			 * @param {*} 
			 */
			submit(){
			
			
			
			  console.log(this.starIndex,this.text)
			
			
			
			  
			},
		}
	}
</script>

<style scoped>
/* pages/evalute/index.wxss */
	.evalute{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.evalute .handleStatus{
		margin-top: 50rpx;
		color: #666;
		font-size: 30rpx;
	}
	.evalute .eval{
		font-size: 26rpx;
		color: #999;
		padding: 20rpx 0;
		border-bottom: 1px #999 dashed;
	}
	.evalute .rate{
		margin-top: 30rpx;
	}
	.evalute .other{
		padding: 20rpx;
		margin-top: 60rpx;
	}

	.evalute .other textarea{
		border: 1px solid #eee;
		height: 290rpx;
		font-size: 26rpx;
		color: #666;
		padding: 20rpx;
	}
	.evalute .submit{
		width: 640rpx;
		height: 95rpx;
		background: #4a4c59;
		color: #fff;
		font-size: 32rpx;
		text-align: center;
		line-height: 95rpx;
		border-radius: 10rpx;
		position: fixed;
		bottom: 20rpx;
	}

</style>
