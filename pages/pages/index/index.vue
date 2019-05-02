
<!-- @author Training  -->
<!-- @description 首页 -->
<template>
	<view>
		<!--index.wxml 商品展示-->
		<!-- 客户页面布局 -->
		<view class="commodityList" v-if="userGroup == 0" >
		    <view class="commodityItem" v-for="item in commodity"  :data-path="item.path" @tap='toInfo'>
		       <view class="left">
		           <image :src="item.img" />
		       </view>
		       <view class="right"><text >{{item.title}}</text></view>
		   </view>
		   <i-load-more tip="加载更多" /> 
		   <i-load-more :loading="false" tip="没有数据啦" /> 
		</view>
		<!-- 技术员页面布局 -->
		<view class="engineer commBox" v-else>
		    <view class="engineerItem" v-for="item in engineerList" :data-id="item.number" @tap='goDetail'>
		        <listItem tkey="订单编号" :value="item.number"></listItem>
		        <listItem tkey="客户名称" :value="item.name"></listItem>
		        <listItem tkey="故障设备" :value="item.sendDate"></listItem>
		        <listItem tkey="待接订单" valueColor="#f53532" :value="item.orderNum"></listItem>
		    </view>
		    <i-load-more tip="加载更多" />  
		    <i-load-more :loading="false" tip="没有数据啦" /> 
		    <view class="zw"></view>
		</view>
		<!-- tabBar 通用  如需修改参数 请到组件内部修改对应data值 -->
		<!-- #ifdef MP-WEIXIN -->
			<tab-bar selected='0' />
		<!-- #endif -->
		<!-- #ifdef H5 -->
			<tabBar selected="0"></tabBar>
		<!-- #endif -->
	</view>
</template>
<script>
	import "./index.css"
	// import {space,listItem,tabBar} from "../../../components/index.js"
	import space from "../../../components/space/space.vue"
	import listItem from "../../../components/listItem/item.vue"
	import tabBar from "../../../components/tabBar/index.vue"
	import loadMore from "../../../components/loadMore/index"
	export default {
		data() {
		  return{
			  userGroup:this.$store.state.globalData.userGroup,
			  paper:1,
			  /**
			   * 客户页面展示数据
			   */
			  commodity:[
			    {
			      img:"/static/commodity_03.png",
			      title:"xxxxxxxxxxxxxxxxxxxxxxxxx",
			      path:"/pages/articleDetails/index"
			    },
			    {
			      img:"/static/commodity_06.png",
			      title:"ccccccccccccccccccccccc",
			      path:"/pages/videoDetails/index"
			    },
			    {
			      img:"/static/commodity_08.png",
			      title:"aaaaaaaaaaaaaaaaaaaaaaaaaa",
			      path:"/pages/machineDetails/index"
			    },
			    {
			      img:"/static/commodity_03.png",
			      title:"xxxxxxxxxxxxxxxxxxxxxxxxx",
			      path:"/pages/logs/index"
			    },
			    {
			      img:"/static/commodity_06.png",
			      title:"ccccccccccccccccccccccc",
			      path:"/pages/logs/index"
			    },
			    {
			      img:"/static/commodity_08.png",
			      title:"aaaaaaaaaaaaaaaaaaaaaaaaaa",
			      path:"/pages/logs/index"
			    }
			  ],
			  /**
			   * 技术员页面展示数据
			   */
			  engineerList:[
			    {
			      number:6435165,                   //订单编号
			      name:"深圳腾讯网络",              //客户名
			      sendDate:"2019-04-24 14:30:25",   //故障报备
			      orderNum:"1/2"                     //待接订单
			    },
			    {
			      number:6435165,                   //订单编号
			      name:"深圳腾讯网络",              //客户名
			      sendDate:"2019-04-24 14:30:25",   //故障报备
			      orderNum:"1/2"                     //待接订单
			    },
			    {
			      number:6435165,                   //订单编号
			      name:"深圳腾讯网络",              //客户名
			      sendDate:"2019-04-24 14:30:25",   //故障报备
			      orderNum:"1/2"                     //待接订单
			    },
			    {
			      number:6435165,                   //订单编号
			      name:"深圳腾讯网络",              //客户名
			      sendDate:"2019-04-24 14:30:25",   //故障报备
			      orderNum:"1/2"                     //待接订单
			    }
			  ]
		  }
		},
		components:{
			"space":space,
			"listItem":listItem,
			"tabBar":tabBar,
			"i-load-more":loadMore
		},
		methods:{
			/**
			 * 技术员页面
			 * 前往订单详情
			 */
			goDetail(e){
				let number = e.currentTarget.dataset.id; 
				uni.navigateTo({
					url: '/pages/engineerPages/getOrder/index?number=' + number,
				})
			},
			/**
			 * 跳转到详情页
			 * @param {*} e event; 
			 */
			toInfo(e){
				let path = e.currentTarget.dataset.path;
				wx.navigateTo({
					url:"/pages"+path
				})
			},
		},
		/**
		 * @description 页面上拉触底事件处理函数
		 */
		onReachBottom(){
			console.log("上拉触底")
		}
	}
</script>
<style>
	
</style>