<template>
    <view>
		<!--engineerPages/getOrder/index.wxml-->
		<view class="tabs">
			<!-- #ifdef MP-WEIXIN -->
				<t-tabs iclass="self-tabs" :current=" current " fixed @change="handleChange">
				    <t-tab tkey="order" title="订单信息"></t-tab>
				    <t-tab tkey="record" title="维修记录"></t-tab>
				    <t-tab tkey="machine" title="机器信息"></t-tab>
				</t-tabs>
			<!-- #endif -->
			<!-- #ifndef MP-WEIXIN -->
				<tabs iclass="self-tabs" :current=" current " :fixed="true" @changeTab="handleChange">
					<tab tkey="order" title="订单信息"></tab>
					<tab tkey="record" title="维修记录"></tab>
					<tab tkey="machine" title="机器信息"></tab>
				</tabs>
			<!-- #endif -->
		</view>
		<view class="content commBox">
		    <view class="order" v-if="current == 'order'">
		        <t-list iclass="self-list" tkey="订单编号" :value="orderInfo.number" ></t-list>
		        <t-list iclass="self-list" tkey="客户名称" :value="orderInfo.name" ></t-list>
		        <t-list iclass="self-list" tkey="联系人" :value="orderInfo.connect" ></t-list>
		        <t-list iclass="self-list" tkey="联系电话" :value="orderInfo.phoneNumber" ></t-list>
		        <t-list iclass="self-list" tkey="联系地址" :value="orderInfo.address" ></t-list>
		        <t-list iclass="self-list" tkey="报障时间" :value="orderInfo.sendDate" ></t-list>
		        <t-list iclass="self-list" tkey="设备编号" :value="orderInfo.machineNum" ></t-list>
		        <t-list iclass="self-list" tkey="故障原因" :value="orderInfo.cause" ></t-list>
		        <t-list iclass="self-list" tkey="图片/视频" :row="false" >
		            <view class="value">
		                <view :class="['img',(mask == 0 && maskIndex == 0)?'fixedMask':'']" data-index="0" @tap="showMask">
		                    <image src="/static/icon_API_HL.png" mode="widthFix" />
		                </view>
		                <view :class="['img' ,mask == 0&& maskIndex == 1?'fixedMask':'']" data-index="1" @tap="showMask">
		                    <image src="/static/icon_API_HL.png" mode="widthFix"  />
		                </view>
		                <view :class="['img',mask == 0&& maskIndex == 2?'fixedMask':'']" data-index="2" @tap="showMask">
		                    <image src="/static/icon_API.png" mode="widthFix"  />
		                </view>
		            </view>
		        </t-list>
				<button type="primary" @tap="orderHandle">{{orderInfo.accept?"开始处理":"接单"}}</button>
		        <!-- <i-button type="primary" long="true" bind:click="orderHandle">{{orderInfo.accept?"开始处理":"接单"}}</i-button> -->
		    </view>
		    <view class="record " v-else-if="current == 'record'">
		         <view class="recordItem" v-for="item in recordList">
		            <t-list iclass="self-record-list" tkey="订单编号" :value="item.number" ></t-list>
		            <t-list iclass="self-record-list" tkey="报障时间" :value="item.sendDate" ></t-list>
		            <t-list iclass="self-record-list" tkey="故障说明" :value="item.errorMsg" ></t-list>
		            <t-list iclass="self-record-list" tkey="处理方法" :value="item.solv" ></t-list>
		            <t-list iclass="self-record-list" tkey="处理结果" :value="item.result" ></t-list>
		         </view>
		    </view>
		    <view class="machineInfo" v-else>
		        <view class="head">
		            <view class="img">
		                <image src="/static/machine_03.jpg" />
		            </view>
		            <view class="title">{{machine.name}}</view>
		        </view>
		        <view class="machineDetail">
		            <!-- #ifdef MP-WEIXIN -->
						<t-tabs iclass="detail-tabs" :current=" machine.current " @change="changeMachine">
						    <t-tab tkey="basic" title="基本信息"></t-tab>
						    <t-tab tkey="buy" title="购买信息"></t-tab>
						    <t-tab tkey="register" border="none" title="机器登记卡"></t-tab>
						</t-tabs>
		            <!-- #endif -->
					<!-- #ifndef MP-WEIXIN -->
						<tabs iclass="detail-tabs" :current=" machine.current " @changeTab="changeMachine">
						    <tab tkey="basic" title="基本信息"></tab>
						    <tab tkey="buy" title="购买信息"></tab>
						    <tab tkey="register" border="none" title="机器登记卡"></tab>
						</tabs>
					<!-- #endif -->
		            <view class="basic" v-if="machine.current == 'basic'">
		                <t-table>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            机器编号
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            MGIJKBJHG165DFAD
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            机器品牌
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            神田
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            机器种类
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            平绣机
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            机器型号
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            56465
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            机器识别码
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            as54da448
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            机头数
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            5
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            机头针数
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            15
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            最高转数
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            200
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            最低转数
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            20
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            刺绣面积
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            30
		                        </t-td>
		                    </t-tr>
		                    <t-tr iclass="self-tr-bottom">
		                        <t-td class="key" iclass="self-td">
		                            站机人员
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            name
		                        </t-td>
		                    </t-tr>
		                </t-table>
		            </view>
		            <view class="buy" v-if="machine.current == 'buy'">
		                <t-table>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            生产商
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            田岛
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            供应商
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            神田
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            合同号
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            AS46487964
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            制造日期
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            2018-05-09
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            购买日期
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            2018-05-09
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            安装日期
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            2018-05-09
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            价格
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            1500
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            购买途径
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            未知
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            免费保养次数
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            20
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            保养截止时间
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value-value">
		                            2018-05-09
		                        </t-td>
		                    </t-tr>
		                    <t-tr iclass="self-tr-bottom">
		                        <t-td class="key" iclass="self-td">
		                            保修截止日
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            2018-05-09
		                        </t-td>
		                    </t-tr>
		                </t-table>
		            </view>
		            <view class="register" v-if="machine.current == 'register'">
		                    <t-table>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            机种及刺绣范围
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            TDHI165123148641
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            机器编号
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            1321231231
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            机器规格
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                             
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            电源
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            2018-sada-09
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            旋梭种类
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            2018-05-09
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            针种类
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            2018-05-09
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            驱动基板
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            1500
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            电源基板
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            未知
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            噪音过滤器
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            20
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            扩张基板
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            2018-05-09
		                        </t-td>
		                    </t-tr>
		                    <t-tr>
		                        <t-td class="key" iclass="self-td">
		                            操作盘
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            2018-05-09
		                        </t-td>
		                    </t-tr>
		                    <t-tr >
		                        <t-td class="key" iclass="self-td">
		                            管咀
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            2018-05-09
		                        </t-td>
		                    </t-tr>
		                    <t-tr >
		                        <t-td class="key" iclass="self-td">
		                            操作盘USB基板
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            2018-05-09
		                        </t-td>
		                    </t-tr>
		                    <t-tr >
		                        <t-td class="key" iclass="self-td">
		                            变压器
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            2018-05-09
		                        </t-td>
		                    </t-tr>
		                    <t-tr >
		                        <t-td class="key" iclass="self-td">
		                            针板
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            2018-05-09
		                        </t-td>
		                    </t-tr>
		                    <t-tr >
		                        <t-td class="key" iclass="self-td">
		                            编码器
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            2018-05-09
		                        </t-td>
		                    </t-tr>
		                    <t-tr >
		                        <t-td class="key" iclass="self-td">
		                            系统级别
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            2018-05-09
		                        </t-td>
		                    </t-tr>
		                    <t-tr >
		                        <t-td class="key" iclass="self-td">
		                            选购件
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            2018-05-09
		                        </t-td>
		                    </t-tr>
		                    <t-tr iclass="self-tr-bottom">
		                        <t-td class="key" iclass="self-td">
		                            其他规格
		                        </t-td>
		                        <t-td  class="value" iclass="self-td-value">
		                            2018-05-09
		                        </t-td>
		                    </t-tr>
		                </t-table>
		            </view>
		        </view>
		    </view>
		</view>
		
    </view>
</template>

<script>
	import "./index.css"
	import tabs from "../../../components/tabs/tabs.vue"
	import tab from "../../../components/tabs/tab.vue"
	import list from "../../../components/list/index.vue"
	import table from "../../../components/table/table/index.vue"
	import tr from "../../../components/table/tr/index.vue"
	import td from "../../../components/table/td/index.vue"
	export default {
		data(){
			return{
				current:"order",
				mask:1,
				maskIndex:1,
				/**
				 * 订单信息
				 */
				orderInfo:{
				  number:"21564165",                  //订单编号
				  name:"惠州xx集团",                  //客户名称
				  connect:"李女士",                  //联系人
				  phoneNumber:"15211112222",        //联系方式
				  address:"惠州仲恺高新区",          //联系地址
				  sendDate:"2019-04-24 17:33:05",  //报障时间
				  machineNum:"FASF4151AS",        //设备编号
				  cause:"断线",                   //故障原因
				  accept:false                   //是否已接单
				},
				recordList:[
				  {
				    number:3545,                             //订单编号
				    sendDate:"2019-04-25 18:00:05",         //报障时间
				    errorMsg:"000000000000001111111111111",//故障说明
				    solv:"xxxxxxxxxxxxxxxxx",             //故障处理方法
				    result:"xxxxxxxxxxxxxx"              //处理结果
				  },
				  {
				    number:3545,                             //订单编号
				    sendDate:"2019-04-25 18:00:05",         //报障时间
				    errorMsg:"000000000000001111111111111",//故障说明
				    solv:"xxxxxxxxxxxxxxxxx",             //故障处理方法
				    result:"xxxxxxxxxxxxxx"              //处理结果
				  },
				  {
				    number:3545,                             //订单编号
				    sendDate:"2019-04-25 18:00:05",         //报障时间
				    errorMsg:"000000000000001111111111111",//故障说明
				    solv:"xxxxxxxxxxxxxxxxx",             //故障处理方法
				    result:"xxxxxxxxxxxxxx"              //处理结果
				  },
				  {
				    number:3545,                             //订单编号
				    sendDate:"2019-04-25 18:00:05",         //报障时间
				    errorMsg:"000000000000001111111111111",//故障说明
				    solv:"xxxxxxxxxxxxxxxxx",             //故障处理方法
				    result:"xxxxxxxxxxxxxx"              //处理结果
				  },
				  {
				    number:3545,                             //订单编号
				    sendDate:"2019-04-25 18:00:05",         //报障时间
				    errorMsg:"000000000000001111111111111",//故障说明
				    solv:"xxxxxxxxxxxxxxxxx",             //故障处理方法
				    result:"xxxxxxxxxxxxxx"              //处理结果
				  },
				  {
				    number:3545,                             //订单编号
				    sendDate:"2019-04-25 18:00:05",         //报障时间
				    errorMsg:"000000000000001111111111111",//故障说明
				    solv:"xxxxxxxxxxxxxxxxx",             //故障处理方法
				    result:"xxxxxxxxxxxxxx"              //处理结果
				  }
				],
				machine:{
				  current:"basic",
				  name:"机器名称"
				}
			}
		},
		props:{
			
		},
		components:{
			"t-table":table,
			"t-tr":tr,
			"t-td":td,
			tabs,
			tab,
			"t-list":list
		},
		  /**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function (options) {
		  let orderInfo = this.orderInfo;
		  this.orderInfo.accept = options.accepted==1?true:false;
		},
		methods:{
			/** 
			 * @description 放大图片
			 */
			showMask({currentTarget}){
			  let index = currentTarget.dataset.index;
			  this.mask = !this.mask;
			  this.maskIndex = index;
			},
			/**
			 * 顶部taps点击处理函数
			 * @param {*}  
			 */
			handleChange({detail}){
				this.current = detail.key;
			
			},
			/**
			 * 机器信息
			 * tab点击处理函数
			 * @param {*}  
			 */
			changeMachine({detail}){
				
			  this.machine.current = detail.key;
			},
			/**
			 * 接单     处理
			 *    通用函数
			 */
			orderHandle(){
			  let orderInfo = this.data.orderInfo;
			  //如果已经接单
			  if(this.data.orderInfo.accept){
			    //handle
			  }else{
			    //没有接单  点击执行接单函数
			    orderInfo.accept = true;
			    this.setData({
			      orderInfo:orderInfo
			    })
			  }
			},
		}
	}
</script>

<style>

</style>
