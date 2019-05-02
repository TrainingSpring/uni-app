<template>
	<view :class="['tabs',iclass]" :style="{'background':bgColor,'font-size':size?size+'upx':'24upx',position:fixed?'fixed':'relative'}" v-on:getCurrent="handle"
	 sargetSetCurrent="targetCurrent">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				testData: "测试数据",
			};
		},
		props: {
			iclass:"",
			'bgColor': "",
			'current':"",
			'size':"",
			"fixed":false,
			'direction':{
				default:"horizontal"
			}
		},
		mounted: function() {
			this.channgeCurrent(this.current);
		},
		watch:{
			current:function(newVal){
				this.channgeCurrent(newVal);
			}
		},
		methods: {
			handle(data) {
				this.$emit("changeTab", {detail:data});
				this.channgeCurrent(data.key);
			},
			/**
			 * @param {Object} d
			 * 更改tab的状态
			 */
			channgeCurrent(d) {
				let tab = this.$children[0].$children;
				let len = tab.length;
				for (let i in tab) {
					let data = {
						isTarget: false,
						isLast: false,
						direction: this.direction
					}
					if (tab[i].tkey == d) {
						data.isTarget = true;
					} else {
						data.isTarget = false;
					}
					if (i == len - 1) {
						data.isLast = true;
					}
					tab[i].$emit("changeTarget", data)
				}
			},
			targetCurrent(data) {
				console.log("target Current ", data);
			}
		}
	}
</script>

<style>
	.tabs {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		width: 100%;
		background: #fff;
		padding: 20upx;
		border-bottom: 1px solid #eee;
		z-index: 999;
	}
</style>
