<template>
    <view class="infoBox">
        <view class="infoItem">
            <i-cell-group>    
                <i-cell title="头像" :is-link="true"  :avatar="true">
                    <i-avatar slot="avatar" src="http://img.52z.com/upload/news/image/20180212/20180212084623_32086.jpg" ></i-avatar>
                </i-cell>
                <i-cell title="会员名" :is-link="true"  :value="userinfo.username"></i-cell>
                <i-cell title="昵称" :is-link="true"  :value="userinfo.nick"></i-cell>
                <i-cell title="手机号" :is-link="true"  :value="userinfo.phoneNumber"></i-cell>
            </i-cell-group>
            <i-cell-group i-class="other">    
                <i-cell title="邮箱" :is-link="true"  :value="userinfo.email"></i-cell>
                <i-cell title="真实姓名" :is-link="true"  :value="userinfo.realName"></i-cell>
                <i-cell title="身份证号" :is-link="true"  :value="userinfo.idCard"></i-cell>
                <i-cell title="详细地址" :is-link="true" ></i-cell>
            </i-cell-group>
        </view>
    
    </view>
</template>

<script>
	import cellGroup from "../../../components/cell/cell-group.vue"
	import cell from "../../../components/cell/index.vue"
	import avatar from "../../../components/avatar/index.vue"
	export default {
		data(){
			return{
				userinfo:{
				  username:"Training",
				  nick:"Training",
				  phoneNumber:"13418815621",
				  email:"1341881562@qq.com",
				  realName:"王春琳",
				  idCard:"5130000000000000000"
				}
			}
		},
		components:{
			'i-cell-group':cellGroup,
			'i-cell':cell,
			'i-avatar':avatar
		},
		props:{
			
		}
	}
</script>

<style scoped>
	.infoBox{
		background: #f5f5f5;
		min-height: calc(100vh - 20rpx);
		padding: 20rpx 0 0 0;
	}
	.infoBox .other{
		margin-top: 20rpx;
	}
</style>
