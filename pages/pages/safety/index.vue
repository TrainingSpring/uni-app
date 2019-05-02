<template>
  <!-- 安全中心 safety : 安全 -->
  <view class="safetyBox commBox">
       <i-cell-group i-class="other">    
              <i-cell title="修改密码" :is-link="true" ></i-cell>
              <i-cell title="修改绑定手机号" :is-link="true"  :value="phoneNumber"></i-cell>
          </i-cell-group>
  </view>
  
</template>

<script>
	import cellGroup from "../../../components/cell/cell-group.vue"
	import cell from "../../../components/cell/index.vue"
	export default {
		data(){
			return{
				phoneNumber:12345618915
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

</style>
