<template>
    <commDetail :title="title" :date="date">
        <video class="video-detail" :title="title" :src="video" :poster="poster" />
    </commDetail>
</view>
</template>

<script>
	import commDetail from '../../../components/commdetails/index.vue';
	import "./index.css"
	export default {
		data(){
			return{
				video:"http://pgc.cdn.xiaodutv.com/3223172442_2440371060_2019022419133920190224194113.mp4?Cache-Control=max-age%3D8640000&responseExpires=Tue%2C+04+Jun+2019+19%3A46%3A06+GMT&xcode=80a7fdac436f92357c75cc01b031ebfdd693047669b689fe&time=1556609256",
				title:"这里是标题",
				date:"云绣网 2019-04-24 8:48:05",
				poster:"http://vorcdn.xiaodutv.com/44ef1cb077304ffbe26633cec2267504"
			}
		},
		components:{
			"commDetail":commDetail
		},
		props:{
			
		}
	}
</script>

<style scoped>

</style>
