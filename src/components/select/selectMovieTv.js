import React, { Component } from 'react';
// import GenresList from '../../GenresList.js'
import TheMovieDbApi from '../../TheMovieDbApi.js'
import Select from './select.js'




class SelectMovieTv extends Component{
  constructor() {
    super()
    this.api = new TheMovieDbApi()
    this.state = {
      genresList: [], // vos tenías esta propiedad como un string vacío y debe ser un array vacio
      inputValue: ""
    };

  }
  componentDidMount(){
    this.api.getGenres().then(res => {

      const genres = res.data.genres
      // const genre = genres.forEach();
      genres.map(genre =>(
        this.setState({
          genresList: [...genres, this.state.genres],
          // src: items.poster_path
        })
      ));
      console.log(this.state.genresList);
    })
  }
  handleChange = e => {
    this.setState({
      inputValue: e.target.inputValue
    })
    console.log(this.state.inputValue)
  }

  render() {
      this.state.genresList.pop() // la última posición que trae está vacia, por lo tanto hay que sacarla
      const listOfGenres = this.state.genresList.map((genre, i) => (
        // <li className="breadcrumb-item" key={i}> Genre name: {genre.name} | Genre ID: {genre.id} </li>
          <option>{genre.name}</option>
      ))

      return (
        <div>
          <Select>
            {listOfGenres}
          </Select>
          <p>{this.state.inputValue}</p>
        </div>
      )
    }
}

export default SelectMovieTv
