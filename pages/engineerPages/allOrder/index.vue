<template>
    <view>
		<!--engineerPages/allOrder/index.wxml-->
		<view class="search">
		    <view class="searchBox" @tap="toSearch">
		         <!-- #ifndef H5 -->
					<icon type="search" size="12" />  搜索
		         <!-- #endif -->
				 <!-- #ifdef H5 -->
					<i-icon type="search" size="24" />  搜索
				 <!-- #endif -->
		    </view>
		</view>
		<view class="allOrder commBox">
		    <view class="orderItem" 
		        v-for="item in allOrder" 
		        :data-id="item.number" 
		        wx:key="item" 
		        @tap='goDetail'
		        v-if="state == item.status || state == -1"
		        >
		
		        <listItem tkey="订单编号" i-class="orderLi" :value="item.number"></listItem>
		        <listItem tkey="客户名称" i-class="orderLi" :value="item.name"></listItem>
		        <listItem tkey="故障报备" i-class="orderLi" :value="item.sendDate"></listItem>
		        <listItem :tkey="item.status == 0 ?'订单受理':item.status == 1?'处理结束':'完成评价'" i-class="orderLi" :value="item.status == 0 ?item.acceptDate:item.status == 1?item.accepted:item.comment"></listItem>                
		        <listItem :tkey="item.status == 0 ?'订单受理':'等待付款'" valueColor="#f53532"  v-if="item.status != 2"  i-class="orderLi" :value="item.status == 0 ?item.orderNum:'￥ '+item.RMB"></listItem>                
		        <listItem tkey="已付金额" v-if="item.status == 2" i-class="orderLi" :value="item.RMB"></listItem>
		        <view style="padding-left: 20upx;">
					<i-rate
					 v-if="item.status == 2"
					 size="18"
					 :value="item.starIndex"
					 disabled />
				</view>
		    </view>
		</view>
		<!-- #ifdef MP-WEIXIN || APP-PLUS -->
			<tab-bar selected="3"></tab-bar>
		<!-- #endif -->
		<!-- #ifndef MP-WEIXIN || APP-PLUS -->
			<tabBar selected='3'></tabBar>
		<!-- #endif -->
    </view>
</template>

<script>
	
	import listItem from "../../../components/listItem/item.vue"
	import icon from "../../../components/icon/index.vue"
	import rate from "../../../components/uni-rate/uni-rate.vue"
	import tabBar from "../../../components/tabBar/index.vue"
	
	export default {
		data(){
			return{
				state:-1,
				allOrder:[
				  /**
				   * status 
				        0  进行中
				        1  待付款
				        2  完成
				   */
				  {
				    number:165465,
				    name:"客户名称",
				    sendDate:"xxxxxxxxx",
				    acceptDate:"2019-04-25 18:00:00",
				    orderNum:"1/2",
				    status:0
				  },
				  {
				    number:165465,
				    name:"客户名称",
				    sendDate:"xxxxxxxxx",
				    accepted:"2019-04-25 18:00:00",
				    RMB:"125.00",
				    status:1
				  },
				  {
				    number:165465,
				    name:"客户名称",
				    sendDate:"xxxxxxxxx",
				    comment:"2019-04-25 18:00:00",
				    RMB:"256.00",
				    starIndex:3,
				    status:2
				  },
				  {
				    number:165465,
				    name:"客户名称",
				    sendDate:"xxxxxxxxx",
				    accepted:"2019-04-25 18:00:00",
				    RMB:"125.00",
				    status:1
				  },
				]
			}
		},
		props:{
			
		},
		components:{
			listItem,
			// #ifndef APP-PLUS || MP-WEIXIN
				tabBar,
			// #endif
			"i-rate":rate,
			// #ifdef H5
				"i-icon":icon
			// #endif
		},
		methods:{
			/**
			 * 
			 * @param {*} options 
			 */
			toSearch(){
			  uni.navigateTo({
			    url:"/pages/engineerPages/searchPage/index"
			  })
			},
			 /**
			 * 技术员页面
			 * 前往订单详情
			 */
			goDetail(e){
			  let number = e.currentTarget.dataset.id; 
			  uni.navigateTo({
			    url: '/pages/engineerPages/getOrder/index?number=' + number+"&accepted=1",
			  })
			},
		}
	}
</script>

<style scoped>
	/* engineerPages/allOrder/index.wxss */
	.search{
	    position: fixed;
	    font-size: 24upx;
		/* #ifdef H5 */
		top: 44px;
		/* #endif */
		/* #ifndef H5 */
		top: 0upx;
		/* #endif */
	    color: #666;
	    text-align: center;
	    padding: 20upx;
	    width: calc(100vw - 40upx);
	    background: #f5f5f5;
	}
	.search .searchBox{
	    background: #fff;
	    height: 60upx;
	    line-height: 60upx;
	    border-radius: 10upx;
	}
	.search icon{
	    margin-right: 10upx;
	}
	.commBox{
	    padding: 100upx 0 50px;
	    min-height: calc(100vh - 50px - 100upx)
	}
	.allOrder {
	
	}
	.allOrder .orderItem{
	    background: #fff;
	    font-size: 24upx;
	    margin-bottom: 20upx;
	    padding-bottom: 20upx;
	}
	.allOrder .orderItem .orderLi{
	    padding: 15upx 20upx;
	}
</style>
