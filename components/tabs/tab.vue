<template>
	<view :class="['tab',isTarget?'tab-active':'']"
		:style="{color:isTarget?color:'#666'}"  v-on:click="targetParent"
			@setCurrent="setCurrent"
		>
		{{title}}
		<view :class="['tabs-line',(direction=='vertical' && !isLast)?'tabs-line-right':
												(direction=='horizontal' && isTarget)?'tabs-line-bottom':'']"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isTarget:false,
				direction:"vertical",
				isLast:false
			};
		},
		props:['title','color','tkey'],
		mounted() {
			console.log(this.$props.title);
			this.$on("changeTarget",(res)=>{
				for(let key in res){
					this[key] = res[key];
				}
			})
		},
		methods:{
			targetParent:function(){
				let data={
					key:this.$props.tkey
				}
				this.$parent.$emit('getCurrent',data);
			},
			setCurrent(data){
				console.log("tab 子组件",data);
			}
		}
	}
</script>

<style>
	.tab{
		flex: 1;
		text-align: center;
		align-self: center;
		position: relative;
	}
	.tab-active{
		color: #007AFF !important;
	}
	
	.tab .tabs-line{
		background: #ccc;
		position: absolute;
	}
	.tab .tabs-line-right{
		width: 2px;
		height: 80%;
		top: 10%;
		right: 0;
	}
	.tab .tabs-line-bottom{
		left: 15%;
		width: 70%;
		bottom: -20upx;
		height: 1px;
		background: #007AFF !important;
	}
</style>
