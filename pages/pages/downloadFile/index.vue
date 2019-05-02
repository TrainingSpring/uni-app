<template>
	<view>
		<space></space>
		<view class="download">
		    <view class="downloadIcon">
		        <text class="iconfont icon-PDFtubiao"></text>
		    </view>
		    <view class="title">
		        <text >
		            {{title}}
		        </text>
		    </view>
		    <view class="button" @tap="download"><text class="iconfont icon-download"></text>立即下载</view>
		</view>
	</view>
</template>

<script>
	import space from "../../../components/space/space.vue"
	import "./index.css"
	export default {
		data() {
			return {
				title:"-------操作说明书"
			}
		},
		components:{
			space
		},
		methods: {
			download(){
			  /*
			   wx.downloadFile({
			    url:"",
			    success:()=>{
			
			    }
			  })
			   */
			},
		}
	}
</script>

