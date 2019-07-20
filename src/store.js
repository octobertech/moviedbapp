import Vue from 'vue'
import Vuex from 'vuex'

import api from './API'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    moviesNowPopular: [],
    search: [],
    moviesDeatils: [],
    isloading: false,
    pagenum: 1,
    searchActive: false,
    nullSearch: false
  },
  mutations: {
    setPopularMovies (state, movies) {
      state.moviesNowPopular.push(...movies)
      state.pagenum++
    },
    setSearchMovie (state, query) {
      state.search = query
    },
    setMovieDetails (state, movies) {
      state.moviesDeatils = movies
    },
    setSearchActive (state, value) {
      state.searchActive = value
    },
    setNullSearchValue (state, value) {
      state.nullSearch = value
    }
  },
  actions: {
    async getPopularMovies ({ commit }) {
      const results = await api.getPopularMovies(this.state.pagenum)
      commit('setPopularMovies', results)
    },
    async searchMovie ({ commit }, query) {
      const results = await api.searchMovie(query)
      commit('setSearchMovie', results)
    },
    async getMovieDetails ({ commit }, movieId) {
      const results = await api.getMovieDetails(movieId)
      commit('setMovieDetails', results)
    },
    actionSearchActive ({ commit }, value) {
      const searchActiveValue = value
      commit('setSearchActive', searchActiveValue)
    },
    actionNullSearch ({ commit }, value) {
      const nullSearchValue = value
      commit('setNullSearchValue', nullSearchValue)
    }
  }
})
