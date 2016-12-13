import vue from 'vue'

import {FETCH_BANNER_SUCCESS} from './mutation-type.js'

const _get = ({ url, query }, commit) => {
	let _url
	if (query) {
	  _url = `http://m.maizuo.com/v4/api${url}?${query}`
	} else {
	  _url = `http://m.maizuo.com/v4/api${url}`
	}

	return vue.http.get(_url)
	  .then((res) => {
	    if (res.status >= 200 && res.status < 300) {
	      return res.data
	    }
	    return Promise.reject(new Error(res.status))
	  })
}

 const fetchBillboards = ({commit}) => {
  const url = '/billboard/home'
  const query = '_t=' + new Date().getTime()
  return _get({ url, query }, commit)
    .then((json) => {
      if (json.status === 0) {
        return commit('FETCH_BANNER_SUCCESS', json.data)
      }
      return Promise.reject(new Error('FETCH_BANNER_SUCCESS failure'))
    })
    .catch((error) => {
      // commit('FETCH_TOPIC_LISTS_FAILURE', topicTab, page)
      return Promise.reject(error)
    })
}

/**
 * 获取正在热映电影列表
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} page             页数
 * @param  {Number} count             每页数量
 * @return {Promise}                  Promise
 */
 const fetchNowPlayingLists = ({ commit },count, page) => {
  const url = '/film/now-playing'
  const query = `count=${count}&page=${page}&_t=` + new Date().getTime()
  return _get({ url, query }, commit)
    .then((json) => {
      if (json.status === 0) {
        return commit('FETCH_NOW_PLAYING_SUCCESS', json.data)
      }
      return Promise.reject(new Error('FETCH_NOW_PLAYING failure'))
    })
    .catch((error) => {
      // commit('FETCH_TOPIC_LISTS_FAILURE', topicTab, page)
      return Promise.reject(error)
    })
}

/**
 * 获取电影详情
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} id             电影id
 * @return {Promise}                  Promise
 */
export const fetchFilmDetail = ({commit}, id) => {
  const url = '/film/' + id
  const query = '_t=' + new Date().getTime()
  return _get({ url, query }, commit)
    .then((json) => {
      if (json.status === 0) {
        console.log(json.data.film.cover.origin)
        return commit('FETCH_DETAIL_SUCCESS', json.data)
      }
      return Promise.reject(new Error('FETCH_DETAIL failure'))
    })
    .catch((error) => {
      // commit('FETCH_TOPIC_LISTS_FAILURE', topicTab, page)
      return Promise.reject(error)
    })
}

/**
 * 获取影院详情
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} id             电影id
 * @return {Promise}                  Promise
 */
export const fetchCinemaDetail = ({commit}, id) => {
  const url = '/cinema/' + id
  // const query = '_t=' + new Date().getTime()
  return _get({ url }, commit)
    .then((json) => {
      if (json.status === 0) {
        return commit('FETCH_CINEMADETAIL_SUCCESS', json.data)
      }
      return Promise.reject(new Error('FETCH_CINEMADETAIL failure'))
    })
    .catch((error) => {
      // commit('FETCH_TOPIC_LISTS_FAILURE', topicTab, page)
      return Promise.reject(error)
    })
}

/**
 * 获取即将开始电影列表
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} page             页数
 * @param  {Number} count             每页数量
 * @return {Promise}                  Promise
 */
export const fetchComingSoonLists = ({ commit }, count, page) => {
  const url = '/film/coming-soon'
  const query = `count=${count}&page=${page}&_t=` + new Date().getTime()
  return _get({url, query}, commit)
    .then((json) => {
      if (json.status === 0) {

        return commit('FETCH_COMING_SOON_SUCCESS', json.data)
      }
      return Promise.reject(new Error('fetchFilmsLists failure'))
    })
    .catch((error) => {
      // commit('FETCH_TOPIC_LISTS_FAILURE', topicTab, page)
      return Promise.reject(error)
    })
}

/**
 * 获取影院列表
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} page             页数
 * @param  {Number} count             每页数量
 * @return {Promise}                  Promise
 */
export const fetchCinemaLists = ({ commit },count,page) => {
  const url = '/cinema'
  const query = `count=${count}&page=${page}&_t=` + new Date().getTime()
  return _get({url, query}, commit)
    .then((json) => {
      if (json.status === 0) {
        console.log(json.data)
        return commit('FETCH_CINEMA_SUCCESS', json.data)
      }
      return Promise.reject(new Error('fetchCinemaLists failure'))
    })
    .catch((error) => {
      // commit('FETCH_TOPIC_LISTS_FAILURE', topicTab, page)
      return Promise.reject(error)
    })
}

// 切换导航
const changeLeftNavState = ({commit}, isShow) => {
  commit('CHANGE_LEFTNAV_STATE', isShow)
}


export default{
	fetchBillboards,
	fetchNowPlayingLists,
  fetchFilmDetail,
  fetchComingSoonLists,
  changeLeftNavState,
  fetchCinemaLists,
  fetchCinemaDetail 
}