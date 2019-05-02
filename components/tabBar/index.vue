<template>
	<view>
		<!-- <view class='tab-bar-space'></view> -->
		<!-- 
		    @Author:Training
		    @desc: 页面的tabBar
		    @warning:   注意  这里tabBar的参数不能配置在引用页面中 
		                请到此页面的js文件中配置对应参数
		    @params: 参数请查看.js文件中的注释信息
		 -->
		<view class="tab-bar">
		    <view class="tab-item-box" v-for="(item,index) in (userGroup == 0 ? list:engineerList)" >
		        <view :class="['tab-bar-item',selected == index?'tab-bar-active':'']" @tap='switchTab' v-if="item.main == false" :data-path="item.pagePath">
		            <view class="tab-bar-icon"><text :class="['iconfont',item.icon]"></text></view>
		            <view class="tab-bar-text"><text>{{item.text}}</text></view>
		        </view>
		        <view class="tab-bar-item" @tap='scanCode' v-if="item.main == true" >
		            <view class="tab-bar-icon tab-main">
		                <text class="iconfont icon-scancode"></text>
		            </view>
		            <view class="tab-main-bg"></view>
		            <view class="tab-bar-icon"><text decode style="visibility: hidden;">&nbsp;&nbsp;&nbsp;123&nbsp;&nbsp;</text></view>
		            
		            <view class="tab-bar-text">
		                <text>{{item.text}}</text>
		            </view>
		        </view>
		    </view>
		 
		</view>
	</view>
</template>

<script>
	export default{
		/**
		 * color: 未选中时的颜色
		 * selectedColor: 选中后的颜色
		 * userGroup: 当前用户属于哪个组
		 * list: 导航页列表
		 *  pagePath: 导航页地址
		 *  icon: 该导航标签图标
		 *  text: 导航栏标题
		 *  main: 是否为主要的__ 这里是扫一扫
		 */
		data(){
			return{
				color: "#7A7E83",
				  selectedColor: "#3cc51f",
				  userGroup:this.$store.state.globalData.userGroup,
				  list: [{
				    pagePath: "/pages/pages/index/index",
				    icon:"icon-zhuye",
				    text: "主页",
				    main:false
				  },
				   {
				      pagePath: "/pages/pages/logs/logs",
				      icon:"icon-scancode",
				      text: "扫一扫",
				      main:true
				  },
				  {
				    pagePath: "/pages/pages/my/index",
				      icon:"icon-wodedangxuan",
				      text: "我的",
				      main:false
				  }
				],
				engineerList:[
				  {
				    pagePath: "/pages/pages/index/index",
				    icon:"icon-daijiedingdan",
				    text: "待接订单",
				    main:false
				  },{
				    pagePath:"/engineerPages/accepted/index?params=accepted",
				    icon:"icon-xiuli",
				    text: "已接订单",
				    main:false
				  },
				  {
				     pagePath: "/pages/pages/logs/logs",
				     icon:"icon-scancode",
				     text: "扫一扫",
				     main:true
				 },
				 {
				   pagePath: "/engineerPages/allOrder/index",
				    icon:"icon-quanbudingdan1",
				    userGroup:1,
				    text: "全部订单",
				    main:false
				  },{
				    pagePath: "/pages/pages/my/index",
				      icon:"icon-wodedangxuan",
				      text: "我的",
				      main:false
				  }
				],
			}
		},
		props:["selected",],
		methods:{
			switchTab(e) {
			    const data = e.currentTarget.dataset;
			    const url = data.path;
			    uni.switchTab({ url })
			  
			},
			scanCode(){
			  uni.scanCode();
			}
		}
	}
</script>
<style>
	/* @import "/app.wxss"; */
	.tab-bar {
	  position: fixed;
	  bottom: 0;
	  left: 0;
	  right: 0;
	  font-size:18upx;
	  height: 100upx;
	  color:#b3b3b3;
	  background: white;
	  display: flex;
	  padding-bottom: env(safe-area-inset-bottom);
	  border-top:1px solid #b3b3b3;
	}
	.tab-bar-item.tab-bar-active{
	  color:#008cff;
	}
	.tab-item-box{
	   display: flex;
	   flex-direction: row;
	   justify-content: center;
	   flex: 1;
	}
	
	.tab-bar-item {
	  flex: 1;
	  text-align: center;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  flex-direction: column;
	  position: relative;
	}
	/*扫码背景*/
	.tab-bar-item .tab-main-bg{
	  width:100upx;
	  height: 50upx;
	  position: absolute;
	  top: -60upx;
	  padding: 10upx;
	  background: #fff;
	  left: calc((100% - 120upx)/2);
	  border-radius: 60upx 60upx 0 0 ;
	  border-top: #b3b3b3 1px solid;
	  z-index:0;
	}
	/**
	*扫码
	*/
	.tab-bar-icon.tab-main{
	  display: flex;
	  flex-direction: row;
	  justify-content: center;
	  width:80upx;
	  height:80upx;
	  position: absolute;
	  z-index: 9;
	  font-size: 64upx;
	  top: -40upx;
	  left: calc((100% - 80upx)/2);
	  border-radius:50%;
	  color:white !important;
	  text-align: center;
	  align-items: center;
	  background: #1e89e0;
	}
	/**tabBar占位*/
	.tab-bar-space{
	  height: 150upx;
	}
</style>
