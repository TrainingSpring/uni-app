<template>
    <view>
		<!-- 机器详情 machine -->
		<space></space>
		<view class="machineDetails">
		    <view class="machineBox">
		        <view class="machineImg">
		            <image :src="img" />
		        </view>
		        <view class="details">
		            <view class="detail-title"><text >机器详情</text></view>
		                <view class="detail-info" v-for="(item,index) in details" v-if="index<4">
		                    <text class="key">{{item.key}} : </text>
		                    <text class="value">{{item.value}}</text>
		                </view>
		            <moreInfo :isMore="false" >
		               <view class="detail-info" v-for="(item,index) in details" v-if="index>=4">
		                    <text class="key">{{item.key}} : </text>
		                    <text class="value">{{item.value}}</text>
		                </view>
		            </moreInfo>
		        </view>
		        <view class="otherInfo">
		            <view class="dataSheet" data-params="0" @tap='downloadFile'>
		                <view class="left">操作说明书</view>
		                <view class="right">零件说明书</view>
		            </view>
		            <view class="server" data-params="1" @tap='downloadFile'>
		                <view class="left">服务商官网</view>
		                <view class="right">http://www.tajima.com.lk</view>
		            </view>
		            <view class="server">
		                <view class="left">销售热线</view>
		                <view class="right">0752-2653808</view>
		            </view>
		            <view class="server">
		                <view class="left">售后服务热线</view>
		                <view class="right">0752-2648808</view>
		            </view>
		        </view>
		    </view>
		    <space></space>
		    <view class="menu">
		            <i-cell title="申请维修" :is-link="true" url="../repair/index">
		                <text class="iconfont icon-weixiu" slot="icon"></text>
		            </i-cell>
		            <i-cell title="维修记录" :is-link="true" url="../record/index">
		                <text class="iconfont icon-weixiujilu" slot="icon"></text>
		            </i-cell>
		            <i-cell title="进度查询" :isLastCell="true" :is-link="true" url="../query/index">
		                <text class="iconfont icon-jinduchaxun" slot="icon"></text>
		            </i-cell>
		        
		    </view>
		</view>
    </view>
</view>
</template>

<script>
	import "./index.css"
	import icell from "../../../components/cell/index.vue";
	import space from '../../../components/space/space.vue';
	import moreInfo from "../../../components/moreInfo/index.vue"
	export default {
		data(){
			return{
				img:"/static/machine_03.jpg",
				details:[
				  {
				    key:"机器名称",
				    value:"This is machine name!"
				  },
				  {
				    key:"机器编号",
				    value:"MC0003"
				  },
				  {
				    key:"机器品牌",
				    value:"神州田岛"
				  },
				  {
				    key:"机器种类",
				    value:"平绣机"
				  },
				  {
				    key:"机器针数",
				    value:"12针"
				  }
				
				]
			}
		},
		components:{
			"i-cell":icell,
			"space":space,
			"moreInfo":moreInfo
		},
		props:{
			
		},
		methods:{
			  /**
			 * 前往文件下载
			 */
			downloadFile(e){
			  let params = e.currentTarget.dataset.params;
			  uni.navigateTo({
			    url: '/pages/pages/downloadFile/index?'+params,
			  })
			}
		}
	}
</script>

<style scoped>

</style>
