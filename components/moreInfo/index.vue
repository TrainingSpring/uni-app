<template>
	<view class="moreInfo">
    <view :class="['infoContent',showMore?'isMore':'']" >
        <slot></slot>
    </view>
    <view class="button" @tap="infoMore">
        展开查看完整信息<i-icon :type="showMore?'packup':'unfold'" size="12" color="#454545"></i-icon>
    </view>
</view>
</template>

<script>
	import icon from "../icon/index"
	export default {
		data(){
			return {
				showMore:false
			}
		},
		components:{
			"i-icon":icon
		},
		props:{
			isMore:{
				default:false
			}
			
		},
		mounted() {
			this.showMore = this.$props.isMore;
		},
		methods:{
			/**
			 * 当显示更多按钮被点击
			 */
			infoMore(){
			  let ismore = this.showMore;  
				this.showMore = !ismore;
			  
			}
		}
	}
</script>

<style scoped>
	.moreInfo{
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
	}
	.infoContent{
		height: 0;
		width:100%;
		visibility: hidden;
	}
	.isMore{
		height: auto;
		visibility: initial !important;
	}
	.button{
		font-size: 18rpx;
		color: #c6c6c6;
		border: 1px solid #c6c6c6;
		padding:12rpx 20rpx;
		border-radius:19px;
	}
	i-icon{
		margin-left: 10rpx;
	}
</style>