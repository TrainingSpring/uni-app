<template>
    <view>
		<!--pages/my/index.wxml-->
		<!-- 个人中心 -->
		
		<view class="header">
		    <view class="avatar">
		        <image src="/static/icon_API_HL.png" />
		    </view>
		    <view class="username">MeiMei</view>
		    <view class="phoneNumber">13418815621</view>
		</view>
		<view class="content">
		    <!-- 技术员独有  综合评分 -->
		    <view class='eval' v-if="userGroup == 1">
		      <i-cell title="我的评分" />
		      <view class='rate'> 
		        <view class="num">综合评分</view>
		        <view>
		          <i-rate i-class="reloadSize"
		            size="20"
		            :value="rate"
		            disabled
		          />
		        </view>
		         <view>{{rate}}分</view>
		      </view>
		    </view>
		    <!-- 我的订单 -->
		    <i-cell-group>
		        <i-cell title="我的订单"></i-cell>
		        <!-- 用户界面 -->
		        <view class="box" v-if="userGroup == 0">
		            <view class="item">
		                <navigator url="/pages/pages/myOrder/index?params=all">
		                    <view class="icon"><text class="iconfont icon-quanbudingdan"></text></view>
		                    <view class="text">全部订单</view>
		                </navigator>
		            </view>
		            <view class="item">
		                <navigator url="/pages/pages/myOrder/index?params=wait">
		                    <view class="icon"><text class="iconfont icon-daifukuan"></text></view>
		                    <view class="text">待付款</view>
		                </navigator>
		            </view>
		            <view class="item">
		                <navigator url="/pages/pages/myOrder/index?params=evaluate">
		                    <view class="icon"><text class="iconfont icon-31daipingjia"></text></view>
		                    <view class="text">待评价</view>
		                </navigator>
		            </view>
		            <view class="item">
		                <navigator url="/pages/pages/myOrder/index?params=finished">
		                    <view class="icon"><text class="iconfont icon-yiwancheng"></text></view>
		                    <view class="text">已完成</view>
		                </navigator>
		            </view>
		        </view>
		        <!-- 技术员界面 -->
		        <view class="box" v-else>
		            <view class="item">
		                <view data-params="accepted" @tap="jump">
		                    <view class="icon"><text class="iconfont icon-quanbudingdan"></text></view>
		                    <view class="text">全部订单</view>
		                </view>
		            </view>
		            <view class="item">
		                <view data-params="underway" @tap="jump">
		                    <view class="icon"><text class="iconfont icon-weixiu"></text></view>
		                    <view class="text">进行中</view>
		                </view>
		            </view>
		            <view class="item">
		                <view data-params="waitPay" @tap="jump">
		                    <view class="icon"><text class="iconfont icon-daifukuan"></text></view>
		                    <view class="text">待付款</view>
		                </view>
		            </view>
		            <view class="item">
		                <view data-params="finished" @tap="jump">
		                    <view class="icon"><text class="iconfont icon-yiwancheng"></text></view>
		                    <view class="text">已完成</view>
		                </view>
		            </view>
		        </view>
		    </i-cell-group>
		    <!-- 设备管理 -->
		    <i-cell-group i-class="top">
		        <i-cell title="设备管理"></i-cell>
		        <view class="box box2">
		            <view class="item">
		                <navigator url="/pages/pages/myInfo/index">
		                    <view class="icon"><text class="iconfont icon-gerenziliao"></text></view>
		                    <view class="text">个人资料</view>
		                </navigator>
		            </view>
		            <view class="item">
		                <navigator url="/pages/pages/myMsg/index">
		                    <view class="icon"><text class="iconfont icon-xiaoxi"></text></view>
		                    <view class="text">我的消息</view>
		                </navigator>
		            </view>
		            <view class="item">
		                <navigator url="/pages/pages/safety/index">
		                    <view class="icon"><text class="iconfont icon-anquanzhongxin89"></text></view>
		                    <view class="text">安全中心</view>
		                </navigator>
		            </view>
		            <view class="item">
		                <navigator url="/pages/pages/settings/index">
		                    <view class="icon"><text class="iconfont icon-shezhi"></text></view>
		                    <view class="text">设置</view>
		                </navigator>
		            </view>
		        </view>
		    </i-cell-group>
		    <view style='height:40px;' v-if="userGroup == 1"></view>
		</view>
		<!-- #ifdef MP-WEIXIN || APP-PLUS -->
			<tab-bar :selected="userGroup == 0 ? 2 : 4"></tab-bar>
		<!-- #endif -->
		<!-- #ifndef MP-WEIXIN || APP-PLUS -->
			<tabBar :selected='userGroup == 0 ? 2 : 4'></tabBar>
		<!-- #endif -->
		
    </view>
</template>

<script>
	import "./index.css"
	import cellGroup from "../../../components/cell/cell-group.vue"
	import cell from "../../../components/cell/index.vue"
	import rate from "../../../components/uni-rate/uni-rate.vue"
	import tabBar from "../../../components/tabBar/index.vue"
	export default {
		data(){
			return{
				userGroup:this.$store.state.globalData.userGroup,
				rate: 4.4,
			}
		},
		components:{
			"i-cell-group":cellGroup,
			"i-cell":cell,
			"i-rate":rate,
			tabBar
		},
		methods:{
			jump(e){
				let self = this;
				let pram = e.currentTarget.dataset.params;
				self.$store.commit("setTabBarAcceptedCurrent",pram)
				uni.switchTab({
					url:"/pages/engineerPages/accepted/index",
				})
			}
		},
		props:{
			
		}
	}
</script>

<style scoped>

</style>
