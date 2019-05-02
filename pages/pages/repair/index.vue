<template>
    <!-- 维修申请 repair : 修理  -->
    <view class="repairBg">
        <view class="hint">请完善以下信息, 以便更好的为您服务</view>
        <view class="userinfo">
            <i-input i-class="inputHandle" name="username" @change="changeValue($event)"  type="text" placeholder="联系人" />
            <i-input i-class="inputHandle" name="userPhoneNumber" @change="changeValue"  type="number" placeholder="联系方式" />
            <i-input i-class="inputHandle" name="companyName" @change="changeValue"  type="text" placeholder="公司名称" />
            <i-input i-class="inputHandle" name="companyAddress" @change="changeValue" type="text" placeholder="公司地址" />
            <i-input i-class="inputHandle" name="cause" @change="changeValue" type="text" placeholder="故障原因" />
            <view class="upLoadImg" @tap="uploadImg">
                <i-input i-class="inputHandle" type="text" placeholder="上传图片" disabled />
                <view class="avatar" v-if="imgPath.length <= 0" >
                    <text class="iconfont icon-xiangji"></text>
                </view>
                <view class='imagesFlex'>
                  <view class='avatar' v-if="imgPath.length>0" v-for="item in imgPath">
                    <image :src='item'></image>
                  </view>
                </view>
            </view>
            <view class="upLoadImg" @tap="uploadVideo">
                <i-input i-class="inputHandle" type="text" placeholder="上传视频(可选)" disabled />
                <view class="avatar" v-if="!video" >
                    <text class="iconfont icon-xiangji"></text>
                </view>
                <view class='videoFlex' v-else>
                  <view class='avatar' >
                    <video :src='video' />
                  </view>
                </view>
            </view>
            <view class="button" @tap="submit">
                确认申请
            </view>
        </view>
    </view>
    
</template>

<script>
	import "./index.css"
	import tinput from '../../../components/input/index.vue';
	export default {
		data(){
			return{
				username:"",
				userPhoneNumber:"",
				companyName:"",
				companyAddress:"",
				cause:"",
				imgPath:[],
				video:""
			}
		},
		components:{
			"i-input":tinput
		},
		props:{
			
		},
		methods:{
						/**
			 * 上传图片功能
			 */
			uploadImg(){
			  let self = this;
			  uni.chooseImage({
			    count:9,
			    success: function(res) {
					console.log(res);
			      self.imgPath =res.tempFilePaths
			    },
			  })
			},
			/**
			 * 上传视频功能
			 */
			uploadVideo(){
			  let self = this;
			  uni.chooseVideo({
			    success(res){
			      self.video = res.tempFilePath;
			    }
			  })
			},
			/**
			 *input 内容绑定修改 
			 */
			changeValue(data){
			  let name = data.name;
			  let value = data.value;
			  this[name] = value;
			  console.log(this[name],name);
			},
			/**
			 * 确认提交
			 */
			submit(){
			  let username = this.username,
			  userPhoneNumber = this.userPhoneNumber,
			  companyName = this.companyName,
			  companyAddress = this.companyAddress,
			  cause = this.cause,
			  imgPath = this.imgPath
			  if(!username || !userPhoneNumber ||!companyName ||!companyAddress ||!cause ||!imgPath ){
			    uni.showToast({
			      title:"请检查信息是否填写完整",
			      icon:"none"
			    })
			    return;
			  }
			  /**
			   * 上传数据
			   */
			  // wx.request({
			  //   url:"",
			  //   data:{
			  //     username:usernamne,
			  //     userPhoneNumber,userPhoneNumber,
			  //     companyName,companyName,
			  //     companyAddress,companyAddress,
			  //     cause,cause
			  //   },
			  //   success(res){
			
			  //   }
			  // })
			  /**
			   * 上传图片
			   */
			//   wx.uploadFile({
			//     url:"",
			//     name:"repair",
			//     filePath:res.tempFilePaths[0],
			//     success:function(res){
			//       wx.showToast({
			//         title:"上传成功",
			//         icon:'success',
			//       })
			//       wx.navigateBack({
			//         delta:1
			//       })
			//     },
			//     fail:function(){
			//       wx.showToast({
			//         title:"上传失败",
			//         icon:'none',
			//       })
			//     }
			//  })
			},
		}
	}
</script>

<style scoped>

</style>
