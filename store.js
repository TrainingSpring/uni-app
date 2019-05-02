import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
const store = new Vuex.Store({
	state:{
		globalData:{
			userGroup:1   //用户组 0  普通用户  1  技术员用户
		},
		tabBarAcceptedCurrent:"accepted"
	},
	mutations:{
		setTabBarAcceptedCurrent(state,val){
			state.tabBarAcceptedCurrent = val;
		}
	}
})
export default store;