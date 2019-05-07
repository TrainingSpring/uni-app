<template>
    <view class='result'>
      <view class='textarea'>
        <textarea :value="cause" data-tkey="cause" @input='inputChange' placeholder='请填写故障原因'></textarea>
      </view>
      <view class='textarea'>
        <textarea :value="result" data-tkey="result" @input='inputChange' placeholder='请填写处理结果'></textarea>
      </view>
      <view class='details'>
        <view class='title'>费用明细</view>
         <i-input i-class='inputBorder' @change="inputChange" name="repair" :value=" repair " type="number" right title="维修费 :" placeholder="请输入金额" />
         <i-input i-class='inputBorder' @change="inputChange"  name="part" :value=" part " type="number" right title="零件费 :" placeholder="请输入金额" />
         <i-input i-class='inputBorder' @change="inputChange"  name="train" :value=" train " type="number" right title="培训费 :" placeholder="请输入金额" />
         <i-input i-class='inputBorder' @change="inputChange"  name="upkeep" :value=" upkeep " type="number" right title="维保费 :" placeholder="请输入金额" />
         <i-input i-class='inputBorder' @change="inputChange"  name="count" :value=" count " type="number" right title="合计 :" placeholder="0" />
      </view>
      <view class='textarea'>
        <textarea :value="remark" data-tkey="remark"  @input='inputChange' placeholder='备注 :'></textarea>
      </view>
      <view class='submit'>结束处理</view>
    </view>
</template>

<script>
	import input from "../../../components/input/index.vue"
	export default {
		data(){
			return{
				  repair: null,
				  part: null,
				  train: null,
				  upkeep: null,
				  remark: "",
				  result: "",
				  cause: ""
			}
		},
		components:{
			"i-input":input
		},
		props:{
			
		},
		computed:{
			//计算属性   计算合计值
			count(){
				let val =  Number(this.repair) + Number(this.part) + Number(this.train) + Number(this.upkeep);
				return val;
			}
		},
		methods:{
			/***
			 * 输入框数据改变触发函数
			 */
			inputChange(e){
			  console.log(e)
			  let key 
			  let value 
			  // let info = this.info;
			  if(e.type == "change"){
			    key = e.name;
			    value = e.value;
			  }else{
				key= e.currentTarget.dataset.tkey;
				value = e.detail.value;
			  }
			  // info[key] = value;
			  // count = Number(repair) + Number(part) + Number(train) + Number(upkeep);
			  this[key] = value;
			  
			},
		}
	}
</script>

<style scoped>
/* engineerPages/result/index.wxss */
.result{
  padding: 20rpx;
  width: calc(100% - 40rpx);
  min-height: calc(100vh - 40rpx);
}
.textarea{
  padding:7px 15px;
  font-size: 28rpx;
  border: 1px solid #eee;
  margin-bottom: 40rpx;
}
.details .title{
  padding-left: 15px;
  font-size: 32rpx;
  margin-bottom: 20rpx;
}
.inputBorder{
  border-bottom: 1px solid #eee;
}
.submit{
  width:100%;
  height: 80rpx;
  color: #fff;
  text-align: center;
  line-height: 80rpx;
  background: #008cff;
  margin-top: 50rpx;
  }
</style>
