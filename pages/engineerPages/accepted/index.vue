<!-- 已接订单 -->
<template>
    <view>
		 <!-- 顶部tab -->
		<view class="tab">
		    <!-- #ifndef APP-PLUS || MP-WEIXIN -->
				<tabs iclass="detail-tabs" :fixed="true" :current="current" @changeTab="changeHandle">
				    <tab tkey="accepted" title="已接单"></tab>
				    <tab tkey="underway" title="进行中"></tab>
				    <tab tkey="waitPay"  title="待付款"></tab>
				    <tab tkey="finished" title="完成"></tab>
				</tabs>
		    <!-- #endif -->
		</view>
		<view class="acceptBox commBox">
			<!-- #ifdef APP-PLUS || MP-WEIXIN -->
				<t-tabs i-class="detail-tabs"  :current=" current " fixed @change="changeHandle">
				    <t-tab tkey="accepted" title="已接单"></t-tab>
				    <t-tab tkey="underway" title="进行中"></t-tab>
				    <t-tab tkey="waitPay" title="待付款"></t-tab>
				    <t-tab tkey="finished" title="已完成"></t-tab>
				</t-tabs>
			<!-- #endif -->
		    <view class="content">
		        <!-- 
		            status 
		            0  进行中
		            1  待付款
		            2  完成
		         -->
		        <!-- 全部已接受 -->
		        <view class="accept">
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
		                 	    disabled>
		                 	
		                 	</i-rate>
		                 </view>
		            </view>
		        </view>
		           
		    </view>
		</view>
		<!-- #ifdef MP-WEIXIN || APP-PLUS -->
			<tab-bar selected="1"></tab-bar>
		<!-- #endif -->
		<!-- #ifndef MP-WEIXIN || APP-PLUS -->
			<tabBar selected='1'></tabBar>
		<!-- #endif -->
    </view>
</template>

<script>
	import tabBar from "../../../components/tabBar/index.vue"
	import rate from "../../../components/uni-rate/uni-rate.vue"
	import listItem from "../../../components/listItem/item.vue"
	import listItemGroup from "../../../components/listItem/item-group.vue"
	// #ifndef MP-WEIXIN || APP-PLUS
		import tabs from "../../../components/tabs/tabs.vue"
		import tab from "../../../components/tabs/tab.vue"
	// #endif
	export default {
		data(){
			return{
				current:'accepted',
				state:-1, //展示页面的代值  -1  全部  0 进行中  1 待付款  2 完成
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
		components:{
			tabBar,
			listItem,
			"i-rate":rate,
			// #ifndef MP-WEIXIN || APP-PLUS
				"tabs":tabs,
				"tab":tab,
			// #endif
		},
		props:{
			
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function (options) {
			
		},
		onShow() {
			let current = this.$store.state.tabBarAcceptedCurrent;
			this.changeHandle({detail:{key:current}})
		},
		onHide() {
			this.$store.commit("setTabBarAcceptedCurrent",'accepted');
		},
		methods:{
			/**
			 * tab点击操作函数
			 * @param {*} options 
			 */
			  changeHandle({detail}){
				  console.log(detail,"changehandle")
			    let state = -1;  
			    if(detail.key == "accepted"){
			      state = -1;
			    }else if(detail.key == "underway"){
			      state = 0;
			    }else if(detail.key == "waitPay"){
			      state = 1;
			    }else{
			      state = 2;
			    }
				this.state = state;
				this.current = detail.key;
			   
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
/* engineerPages/accepted/index.wxss */
	.acceptBox{
		min-height: calc(100vh - 40px);
	}
	.acceptBox .detail-tabs{
		background: #f5f5f5;
	}

	.commBox{
		padding-top: 40px;
	}
	.acceptBox t-tab{
		flex: 1;
	}
	.acceptBox .content{
		padding-bottom: 50px;
	}
	.acceptBox .content .orderItem .orderLi{
		padding: 15upx 20upx !important;
	}
	.acceptBox .orderItem{
		font-size: 24upx;
		background: #fff;
		margin-bottom: 20upx;
		padding-bottom: 20upx;
	}
</style>
