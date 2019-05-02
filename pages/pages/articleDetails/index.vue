<template>
	<commdetails title="这里是标题" date="云绣网  2019-04-24  08:38:25">
		<rich-text :nodes="html"></rich-text>
	</commdetails>
</template>

<script>
	import commdetails from"../../../components/commdetails/index.vue";
	import "./index.css"
	export default {
		data() {
			return {
				 html:"<div style='text-indent:2em;'>假如把犯得起的错<div><p style='color:blue;text-indent:0;'>能错的都错过</p>"
			}
		},
		components:{
			"commdetails":commdetails
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
