import axios from 'axios'

const API_KEY = 'f259c936af962a17bb148cc941b8de9b';

class TheMovieDbApi {
 constructor() {
   this.axios = axios.create({
     baseURL: 'https://api.themoviedb.org/3',
     params: {
       api_key: API_KEY,
       language: 'es-AR',
         },
    })
  }

  getPopularMovies = (page = 1) => (
     this.axios.get(`/movie/popular`, {
       params: {page: page}
     })
  )
  getMoviesList = (page = 1) => (
     this.axios.get(`/genre/movie/list`, {
       params: {page: page}
     })
  )
  getSeriesList = (page = 1) => (
     this.axios.get(`/genre/tv/list`, {
       params: {page: page}
     })
  )
  getMovies = (genre_id) => (
    this.axios.get(`genre/${genre_id}/movies`, {
      params: {genre_id: genre_id}
    })
  )
  getSeries = (genre_id) => (
     this.axios.get(`/tv/popular/${genre_id}`, {
       params: {genre_id: genre_id}
     })
  )
  getMovie = (movie_id) => (
    this.axios.get(`/movie/${movie_id}`)
  )
}

export default TheMovieDbApi;
