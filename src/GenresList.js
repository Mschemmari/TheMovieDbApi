import React, { Component } from 'react';
import TheMovieDbApi from './TheMovieDbApi.js'


class GenresList extends Component {
  constructor() {
    super()
    this.api = new TheMovieDbApi()
    this.state = {
      genresList: ""
    };
  }

  componentDidMount(){
    this.api.getGenres().then(res => {
      const genres = res.data.genres
      // const genre = genres.forEach();
      genres.map(genre =>(
        this.setState({
          genresList: [...genres, this.state.genres]
          // src: items.poster_path
        })
      ));
      console.log(this.state.genresList);
    })
  }
  render() {
      return (
        <div>
          {GenresList}
        </div>
      )
    }
}

export default GenresList;
