<template>
    <!-- 进度查询  query -->
    <view class="query">
        <space></space>
        <view class="padding"></view>
        <steps direction="column">
            <step icon="\a" status="process">
                <view slot="title">
                      11:00AM
                </view>
                <view slot="content">
                    申请已提交...
                </view>
            </step>
            <step icon="\a" status="error">
                <view slot="title">
                      11:00AM
                </view>
                <view slot="content">
                    申请已提交...
                </view>
            </step>
            <step icon="\a"  status="finish">
                <view slot="title">
                      11:00AM
                </view>
                <view slot="content">
                    申请已提交...
                </view>
            </step>
            <step icon="\a"  status="wait" :isLast="true">
                <view slot="title">
                      11:00AM
                </view>
                <view slot="content">
                    申请已提交...
                </view>
            </step>
        </steps>
    </view>
</template>

<script>
	import space from "../../../components/space/space.vue"
	import steps from "../../../components/steps/steps.vue"
	import step from "../../../components/steps/step.vue"
	// "steps": "/Components/steps/steps/index",
	// "step": "/Components/steps/step-child/index",
	export default {
		data(){
			return{

			}
		},
		props:{
			
		},
		components:{
			space,
			steps,
			step
		}
	}
</script>

<style scoped>
	.padding{
		height: 45rpx;
	}
</style>
