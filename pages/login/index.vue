<template>
	<view class="login">
		<view class="logo">
			<image src="/static/logo.png" mode="widthFix"></image>
		</view>
		<view class="info">
			<view class="username">
				<input type="text" v-model="username" placeholder="账号/手机" />
			</view>
			<view class="password">
				<input type="password" v-model="password" placeholder="密码" />
			</view>
			<view @tap="submit" class="submit">
				登录
			</view>
			<view class="idServer">
				<view class="forget">
					忘记密码?
				</view>
				<view class="register">
					账号注册
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:"",
				password:""
			}
		},
		onLoad() {

		},
		methods: {
			submit(){
				uni.reLaunch({
					url:"/pages/pages/index/index"
				})
			}
		}
	}
</script>

<style>
	.logo{
		width: 217px;
		margin: 64upx auto;
	}
	.info{
		padding: 20upx;
		display: flex;
		flex-direction: column;
		font-size: 24upx;
	}
	.info input{
		width: 100%;
		border-bottom: 1px solid #ccc;
		padding: 32upx;
		width: calc(100% - 64upx);
	}
	.info .submit{
		width: calc(100% - 48upx);
		text-align: center;
		color: #fff;
		font-size: 28upx;
		background: #008CFF;
		border-radius: 10upx;
		margin-top: 32upx;
		padding: 24upx;
	}
	.info .idServer{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 32upx;
		color: #999;
		font-size: 24upx;
	}
</style>
