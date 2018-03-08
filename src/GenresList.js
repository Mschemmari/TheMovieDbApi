import React, { Component } from 'react';
import TheMovieDbApi from './TheMovieDbApi.js'


class GenresList extends Component {
  constructor() {
    super()
    this.api = new TheMovieDbApi()
    this.state = {
      genresList: [] // vos tenías esta propiedad como un string vacío y debe ser un array vacio
    };
  }

  // componentDidMount(){
  //   this.api.getGenres().then(res => {
  //     const genres = res.data.genres
  //     // const genre = genres.forEach();
  //     genres.map(genre =>(
  //       this.setState({
  //         genresList: [...genres, this.state.genres]
  //         // src: items.poster_path
  //       })
  //     ));
  //     console.log(this.state.genresList);
  //   })
  // }
  render() {
      this.state.genresList.pop() // la última posición que trae está vacia, por lo tanto hay que sacarla
      const listOfGenres = this.state.genresList.map((genre, i) => (
        <li className="breadcrumb-item" key={i}> Genre name: {genre.name} | Genre ID: {genre.id} </li>
      ))

      return (
        <div>
          <ul className="breadcrumb">
            {listOfGenres}
          </ul>
        </div>
      )
    }
}

export default GenresList;
