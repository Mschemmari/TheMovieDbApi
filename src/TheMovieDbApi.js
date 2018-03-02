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
}) }

getPopularMovies = (page = 1) => (
   this.axios.get(`/movie/popular`, {
     params: {page: page}
   })
); }

export default TheMovieDbApi
