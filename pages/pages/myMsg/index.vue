<template>
  <!-- 我的消息 -->
  <view class="myMsgBox">
      <view class="msgItem">
          <i-cell-group>
              <i-cell title="站内消息" :is-link="true" url="../repair/index"></i-cell>
              <i-cell title="未读消息" :is-link="true" url="../record/index"></i-cell>
              <i-cell title="推送消息" :is-link="true" url="../query/index"></i-cell>
              <i-cell title="发送消息" :is-link="true" url="../query/index"></i-cell>
          </i-cell-group>
      </view>
  </view>
  
</template>

<script>
	import cellGroup from "../../../components/cell/cell-group.vue"
	import cell from "../../../components/cell/index.vue"
	export default {
		data(){
			return{

			}
		},
		props:{
			
		},
		components:{
			'i-cell-group':cellGroup,
			'i-cell':cell
		},
	}
</script>

<style scoped>
	.myMsgBox{
		background: #f5f5f5;
		min-height: calc(100vh - 20rpx);
		padding: 20rpx 0 0 0;
	}
	.myMsgBox .msgItem{
		background: #fff;
	}
</style>
