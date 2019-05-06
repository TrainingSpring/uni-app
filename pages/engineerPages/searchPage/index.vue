<template>
    <view>
		<!--engineerPages/searchPage/index.wxml-->
		<view class="search">
		    <view class="searchBox">
		         <input 
				 class="searchInput" 
				 type="text" 
				 focus 
				 placeholder="请输入要搜索的内容" 
				 @confirm="search" 
				 confirm-type="search"
				  />
		    </view>
			 <view class="searchBtn" @tap="search">
				搜索
			 </view>
		</view>
		<view class="allOrder commBox">
		    <view class="orderItem" 
		        v-for="item in searchData" 
		        :data-id="item.number" 
		        @tap='goDetail'
		        v-if="state == item.status || state == -1"
		        >
		
		        <listItem tkey="订单编号" i-class="orderLi" :value="item.number"></listItem>
		        <listItem tkey="客户名称" i-class="orderLi" :value="item.name"></listItem>
		        <listItem tkey="故障报备" i-class="orderLi" :value="item.sendDate"></listItem>
		        <listItem :tkey="item.status == 0 ?'订单受理':item.status == 1?'处理结束':'完成评价'" i-class="orderLi" :value="item.status == 0 ?item.acceptDate:item.status == 1?item.accepted:item.comment"></listItem>                
		        <listItem :tkey="item.status == 0 ?'订单受理':'等待付款'" valueColor="#f53532"  v-if="item.status != 2"  i-class="orderLi" :value="item.status == 0 ?item.orderNum:'￥ '+item.RMB"></listItem>                
		        <listItem tkey="已付金额" v-if="item.status == 2" i-class="orderLi" :value="item.RMB"></listItem>
		            <i-rate
		            style="padding-left:20upx;" 
		            v-if="item.status == 2"
		            size="18"
		            :value="item.starIndex"
		            disabled>
		        
		        </i-rate>
		    </view>
		</view>
    </view>
</template>

<script>
	import listItem from "../../../components/listItem/item.vue"
	import rate from "../../../components/uni-rate/uni-rate.vue"
	export default {
		data(){
			return{
				 state:-1,
				searchData:[],
				isFocus:true
			}
		},
		components:{
			listItem,
			"i-rate":rate
		},
		methods:{
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
			/**
			 * 点击键盘上的回车触发搜索功能
			 * @param {*} options 
			 */
			search({detail}){
			  let val = detail.value;
				console.log(val);
			  //  此处调用搜索接口  搜索就是val
			  this.searchData=[
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
			    ];
			  console.log(this.searchData);
			  
			  
			},
		},
		props:{
			
		}
	}
</script>

<style scoped>
	.search{
		transition: 1s all inherit;
	    position: fixed;
		z-index: 9;
	    /* #ifndef H5 */
			top: 0;
	    /* #endif */
		/* #ifdef H5 */
			top: 44px;
		/* #endif */
		display: flex;
		flex-direction: row;
	    font-size: 24upx;
	    color: #666;
	    text-align: center;
		justify-content: space-between;
	    padding: 20upx;
	    width: calc(100vw - 40upx);
	    background: #f5f5f5;
	}
	.search .searchBox{
		background: #fff;
	    height: 60upx;
	    line-height: 60upx;
	    border-radius: 10upx 0 0 10upx;
	    padding-left: 20upx;
		flex: 4;
	}
	.search .searchBtn{
	    height: 60upx;
	    line-height: 60upx;
		flex: 1;
		background: #19BE6B;
		color: #fff;
	}
	.search .searchBox .searchInput{
		width: 100%;
	}
	.searchBox input{
	    text-align: left;
	    height: 100%;
	    width: 100%;
	    border-radius: 10upx;
	}
	.commBox{
	    padding: 100upx 0 0;
	    min-height: calc(100vh - 100upx)
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
