<template>
    <!-- 维修记录 record -->
    <view class="commBox">
        <list-item-group v-for="item in disposeInfo" iclass="record" tkey="订单编号" :value="item.number" :status="item.status">
            <list-item tkey="报障时间" :value="item.sendDate"></list-item>
            <list-item tkey="维修时间" :value="item.disposeDate"></list-item>
            <list-item tkey="技术员" :value="item.technician"></list-item>
        </list-item-group>
    </view>
</template>

<script>
	// #ifndef MP-WEIXIN
	
	import listItem from "../../../components/listItem/item.vue"
	
	import listItemGroup from "../../../components/listItem/item-group.vue"
	// #endif
	export default {
		data(){
			return{
				disposeInfo:[
				  {
				    number:216514,            //订单编号
				    status:"未完成",          //维修状态
				    sendDate:"2019-04-24",    //报障时间
				    disposeDate:"2019-04-25", //维修时间
				    technician:"Training"     //技术员
				  },
				  {
				    number:216514,            //订单编号
				    status:"已完成",          //维修状态
				    sendDate:"2019-04-24",    //报障时间
				    disposeDate:"2019-04-25", //维修时间
				    technician:"Training"     //技术员
				  },
				  {
				    number:216514,            //订单编号
				    status:"已完成",          //维修状态
				    sendDate:"2019-04-24",    //报障时间
				    disposeDate:"2019-04-25", //维修时间
				    technician:"Training"     //技术员
				  },
				  {
				    number:216514,            //订单编号
				    status:"已完成",          //维修状态
				    sendDate:"2019-04-24",    //报障时间
				    disposeDate:"2019-04-25", //维修时间
				    technician:"Training"     //技术员
				  },
				  {
				    number:216514,            //订单编号
				    status:"已完成",          //维修状态
				    sendDate:"2019-04-24",    //报障时间
				    disposeDate:"2019-04-25", //维修时间
				    technician:"Training"     //技术员
				  },
				]
			}
		},
		// #ifndef MP-WEIXIN
		components:{
			"list-item":listItem,
			"list-item-group":listItemGroup
		},
		// #endif
		
		props:{
			
		}
	}
</script>

<style>
.record{
    margin-bottom:20rpx;
}
</style>
