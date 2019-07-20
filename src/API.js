import axios from 'axios'

export const API_URL = 'https://api.themoviedb.org/3'
export const API_KEY = '?api_key=5a865e7ef16821bd8055d8b0960230eb'

export default {
  getPopularMovies (pagenum) {
    return axios.get(`${API_URL}/movie/popular${API_KEY}&page=${pagenum}`).then(response => {
      return response.data.results
    }, e => { return e })
  },
  searchMovie (query) {
    return axios.get(`${API_URL}/search/movie${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`).then(response => {
      return response.data.results
    }, e => { return e })
  },
  getMovieDetails (id) {
    return axios.get(`${API_URL}/movie/${id}${API_KEY}&append_to_response=videos`).then(response => {
      return response.data
    }, e => { return e })
  }
}
