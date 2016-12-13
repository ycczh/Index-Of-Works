import { FETCH_COMING_SOON_SUCCESS,FETCH_NOW_PLAYING_SUCCESS,FETCH_DETAIL_SUCCESS,FETCH_BANNER_SUCCESS,CHANGE_LEFTNAV_STATE,FETCH_CINEMA_SUCCESS,CHANGE_CINEMA_STATE,FETCH_CINEMADETAIL_SUCCESS } from './mutation-type'
 const mutations = {
 	// 获取广告列表
 	[FETCH_BANNER_SUCCESS] (state, data) {
 	  state.billboards = data.billboards
 	},
 	// 获取即将上映电影列表
 	[FETCH_COMING_SOON_SUCCESS] (state, data) {
 	  state.comingSoonFilms = data.films
 	},
 	// 获取即将上映电影列表
 	[FETCH_NOW_PLAYING_SUCCESS] (state, data) {
 	  state.nowPlayingFilms = data.films
 	},
 	// 获取影院列表
 	[FETCH_CINEMA_SUCCESS] (state, data) {
 	  state.cinemalist = data.cinemas
 	},
 	// 获取电影详情
 	[FETCH_DETAIL_SUCCESS] (state, data) {
 	  state.detail = data.film
 	  state.coverimg=data.film.cover.origin
 	},
 	// 获取影院详情
 	[FETCH_CINEMADETAIL_SUCCESS] (state, data) {
 	  state.cinemadetail = data.cinema
 	},

 	// 切换左侧导航的显示状态
 	[CHANGE_LEFTNAV_STATE] (state, isShow) {
 	  state.leftNavState = isShow
 	}


 } 

 export default mutations