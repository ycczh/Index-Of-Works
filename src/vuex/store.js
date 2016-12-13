import Vue from 'vue'
import Vuex from 'vuex'
import  actions from './actions'
// import * as getters from './getters'
import mutations from './mutations'

const state = {
	 billboards: [],
	 nowPlayingFilms: [],
	 comingSoonFilms : [],
	 cinemalist:[],
	 detail: {},
	 coverimg:'',
	 cinemadetail:{},
	 leftNavState:false

	}
Vue.use(Vuex)
export default new Vuex.Store({
	actions,
	mutations,
	state,

})