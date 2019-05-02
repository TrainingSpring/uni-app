<template>
    <view class="orderList">
		<!--pages/myOrder/index.wxml-->
		<!-- 
		    @description: 我的订单页面
		
		    evalute : 评价
		-->
		<view class="tabs">
		    <!-- #ifndef MP-WEIXIN || APP-PLUS -->
				<tabs :current=" current " :fixed="true" @changeTab="handleChange">
				    <tab tkey="all" title="全部"></tab>
				    <tab tkey="wait" title="待付款"></tab>
				    <tab tkey="evaluate" title="待评价"></tab>
				    <tab tkey="finished" title="已完成"></tab>
				</tabs>
		    <!-- #endif -->
			<!-- #ifdef MP-WEIXIN || APP-PLUS -->
				<t-tabs :current=" current " fixed @change="handleChange">
				    <t-tab tkey="all" title="全部"></t-tab>
				    <t-tab tkey="wait" title="待付款"></t-tab>
				    <t-tab tkey="evaluate" title="待评价"></t-tab>
				    <t-tab tkey="finished" title="已完成"></t-tab>
				</t-tabs>
			<!-- #endif -->
		</view>
		<view class="content">
		    <!-- 所有订单 -->
		    <view class="all" v-if="current == 'all'">
		        <listItem-group v-for="item in allOrder"  iclass="order" tkey="订单编号" :value="item.number" :status="item.status == 0?'进行中':item.status == 1?'交易成功':item.status == 2?'等待付款':'交易失败'">
		            <listItem tkey="报障时间" :value="item.sendDate"></listItem>
		            <listItem tkey="设备编号" :value="item.machineNum"></listItem>
		            <listItem tkey="故障描述" :value="item.errorDesc"></listItem>
		            <listItem tkey="处理结果" v-if="item.status != 0" :value="item.result"></listItem>
		            <listItem tkey="付款金额" v-if="item.status != 0" :value="'￥ '+item.payNum"></listItem>
		            <view class="handle" >
		                <navigator url="/pages/pages/query/index">
							<view :class="['btn',item.status == 0?'mainBtn':'']">查看进度</view>
						</navigator>
						<navigator v-if="item.status != 0 && item.status != -1" :url="item.status == 2?'/pages/pages/pay/index':'/pages/pages/evalute/index'">
							<view  class="mainBtn btn">{{item.status == 2?"付款":"评价"}}</view>
						</navigator>
		                
		            </view>
		        </listItem-group>
		    </view>
		    <!-- 待付款 -->
		    <view class="wait" v-else-if="current == 'wait'">
		        <listItem-group 
		            v-for="item in allOrder"
		            iclass="order" 
		            tkey="订单编号" 
		            :value="item.number" 
		            v-if="item.status == 2"
		            :status="item.status == 0?'进行中':item.status == 1?'交易成功':item.status == 2?'等待付款':'交易失败'">
		            <listItem tkey="报障时间" :value="item.sendDate"></listItem>
		            <listItem tkey="设备编号" :value="item.machineNum"></listItem>
		            <listItem tkey="故障描述" :value="item.errorDesc"></listItem>
		            <listItem tkey="处理结果" v-if="item.status != 0" :value="item.result"></listItem>
		            <listItem tkey="付款金额" v-if="item.status != 0" :value="'￥'+item.payNum"></listItem>
		            <view class="handle" >
		                <navigator url="/pages/pages/query/index">
		                	<view :class="['btn',item.status == 0?'mainBtn':'']">查看进度</view>
		                </navigator>
		                <navigator v-if="item.status != 0 && item.status != -1" :url="item.status == 2?'/pages/pages/pay/index':'/pages/pages/evalute/index'">
		                	<view  class="mainBtn btn">{{item.status == 2?"付款":"评价"}}</view>
		                </navigator>
		            </view>
		        </listItem-group>
		    </view>
		    <!-- 待评价 -->
		    <view class="evaluate" v-else-if="current == 'evaluate'">
		        <listItem-group 
		            v-for="item in allOrder"
		            iclass="order" 
		            tkey="订单编号" 
		            :value="item.number" 
		            v-if="item.status == 1 && item.evaluate == 0"
		            :status="item.status == 0?'进行中':item.status == 1?'交易成功':item.status == 2?'等待付款':'交易失败'">
		            <listItem tkey="报障时间" :value="item.sendDate"></listItem>
		            <listItem tkey="设备编号" :value="item.machineNum"></listItem>
		            <listItem tkey="故障描述" :value="item.errorDesc"></listItem>
		            <listItem tkey="处理结果" v-if="item.status != 0" :value="item.result"></listItem>
		            <listItem tkey="付款金额" v-if="item.status != 0" :value="'￥'+item.payNum"></listItem>
		            <view class="handle" >
		                <navigator url="/pages/pages/query/index">
							<view :class="['btn',item.status == 0?'mainBtn':'']">查看进度</view>
						</navigator>
		                <navigator v-if="item.status != 0 && item.status != -1" :url="item.status == 2?'/pages/pages/pay/index':'/pages/pages/evalute/index'">
		                	<view  class="mainBtn btn">{{item.status == 2?"付款":"评价"}}</view>
		                </navigator>
		            </view>
		        </listItem-group>
		    </view>
		    <!-- 已完成 -->
		    <view class="finished" v-else-if="current == 'finished'">
		        <listItem-group 
		            v-for="item in allOrder"
		            
		            iclass="order" 
		            tkey="订单编号" 
		            :value="item.number" 
		            v-if="item.status == 1 && item.evaluate == 1"
		            :status="item.status == 0?'进行中':item.status == 1?'交易成功':item.status == 2?'等待付款':'交易失败'">
		            <listItem tkey="报障时间" :value="item.sendDate"></listItem>
		            <listItem tkey="设备编号" :value="item.machineNum"></listItem>
		            <listItem tkey="故障描述" :value="item.errorDesc"></listItem>
		            <listItem tkey="处理结果" v-if="item.status != 0" :value="item.result"></listItem>
		            <listItem tkey="付款金额" v-if="item.status != 0" :value="'￥'+item.payNum"></listItem>
		            <view class="handle" >
						<navigator url="/pages/pages/query/index">
							<view :class="['btn',item.status == 0?'mainBtn':'']">查看进度</view>
						</navigator>
		                <navigator v-if="item.status != 0 && item.status != -1" :url="item.status == 2?'/pages/pages/pay/index':'/pages/pages/evalute/index'">
		                	<view  class="mainBtn btn">{{item.status == 2?"付款":"评价"}}</view>
		                </navigator>
		            </view>
		        </listItem-group>
		    </view>
		</view>
		
    </view>
</template>

<script>
	import "./index.css"
	import listItemGroup from "../../../components/listItem/item-group.vue"
	import listItem from "../../../components/listItem/item.vue"
	// #ifndef MP-WEIXIN || APP-PLUS
		import tabs from "../../../components/tabs/tabs.vue"
		import tab from "../../../components/tabs/tab.vue"
	// #endif
	
	/**
	 * @desc 页面的初始数据
	 * @params {
	 *  current: 当前选中的标签  与tab组件key属性一致
	 *  allOrder:{ 所有订单
	 *    number:订单编号
	 *    status:订单状态   -1 == 交易失败  0 == 交易进行中  1 == 交易成功   2 == 等待付款
	 *    sendDate:报障时间
	 *    machineNum:设备编号
	 *    errorDesc:故障描述
	 *    result:处理结果     
	 *    payNum:付款金额
	 *  }     
	 * 
	 * }
	 *   
	 */
	export default {
		data(){
			return{
				current:"all",
				allOrder:[
				  {
					number:461654315,                      
					status:"0",                            
					sendDate:"2019-04-25 09:08:52",
					machineNum:"1646254ESC 456",
					errorDesc:"设备问题"
				  },
				  {
					number:461654312,
					status:"1",
					sendDate:"2019-04-25 09:08:52",
					machineNum:"1646254ESC 456",
					errorDesc:"设备问题1",
					result:"全都怪我,不该沉默时沉默,该勇敢时软弱, 如果不是我,误会自己洒脱,让我们难过,可当初的你,和现在的我,假如重来过",
					payNum:"178.00",
					evaluate:0
				  },
				  {
					number:461654312,
					status:"2",
					sendDate:"2019-04-25 09:08:52",
					machineNum:"1646254ESC 456",
					errorDesc:"设备问题1",
					result:"全都怪我,不该沉默时沉默,该勇敢时软弱, 如果不是我,误会自己洒脱,让我们难过,可当初的你,和现在的我,假如重来过",
					payNum:"178.00",
					evaluate:0
				  },
				  {
					number:461654312,
					status:"1",
					sendDate:"2019-04-25 09:08:52",
					machineNum:"1646254ESC 456",
					errorDesc:"设备问题1",
					result:"全都怪我,不该沉默时沉默,该勇敢时软弱, 如果不是我,误会自己洒脱,让我们难过,可当初的你,和现在的我,假如重来过",
					payNum:"178.00",
					evaluate:1
				  },
				  {
					number:461654312,
					status:"1",
					sendDate:"2019-04-25 09:08:52",
					machineNum:"1646254ESC 456",
					errorDesc:"设备问题1",
					result:"全都怪我,不该沉默时沉默,该勇敢时软弱, 如果不是我,误会自己洒脱,让我们难过,可当初的你,和现在的我,假如重来过",
					payNum:"178.00",
					evaluate:0
				  },
				]
			}
		},
		props:{
			
		},
		components:{
			"listItem-group":listItemGroup,
			"listItem":listItem,
			// #ifndef MP-WEIXIN || APP-PLUS
				"tabs":tabs,
				"tab":tab
			// #endif
			
		},
		onLoad(options) {
			if(!options.params){
				this.current = "all"
			}else{
				this.current = options.params;
			}
		},
		methods:{
			/**
			 * 操作tab标签更改函数
			 * @param {*} e  
			 */
			handleChange({detail}){
				this.current = detail.key;
				console.log(detail.key);
			},
		}
	}
</script>

<style scoped>

</style>
