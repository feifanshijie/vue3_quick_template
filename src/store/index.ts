import {createStore} from 'vuex'

export default createStore({
	state: {
		refreshUserInfo: 0,
		userinfo: {},
		theme: "",
	},
	mutations: {
		refreshUserInfo(state, userInfo) {
			state.refreshUserInfo++
			state.userinfo = userInfo;
		},
		switchTheme(state, theme) {
			state.theme = theme;
		}
	},
	actions: {},
	modules: {},
	getters: {
		getRefreshHistoryList(state) {
			return state.refreshUserInfo
		}
	}
})
