import React, { Component } from 'react';
// import GenresList from '../../GenresList.js'
import TheMovieDbApi from '../../TheMovieDbApi.js'
import Select from './select.js'

class SelectMovieTv extends Component{
  constructor() {
    super()
    this.api = new TheMovieDbApi()
    this.state = {
      moviesList: [],
      seriesList: [],
      inputValue:''
    }
    console.log(this.state.inputValue)
  }

  handleChange = e => {
    this.setState({inputValue:e.target.value});
  }

  changeType = (event) => {
    console.log(event.target.value)
    this.setState({
      inputValue:event.target.value
    })
    if(event.target.value === 'peliculas'){
      this.getMovies()
    }else{
      this.getSeries()
    }
  }

  getMovies(){
    this.api.getMoviesList().then(res => {
          const genres = res.data.genres
          genres.map(genre =>(
            this.setState({
              moviesList: [...genres, this.state.genres],
              seriesList: []
            })
          ));
          // console.log(this.state.moviesList);
        })
  }

  getSeries(){
    this.api.getSeriesList().then(res => {
          const genres = res.data.genres
          // const genre = genres.forEach();
          genres.map(genre =>(
            this.setState({
              seriesList: [...genres, this.state.genres],
              moviesList: []
            })
          ));
          // console.log(this.state.seriesList);
        })
  }

  handleApi(){
    this.api.getMoviesList().then(res => {
          const genres = res.data.genres
          // genres.map(genre =>(
            this.setState({
              moviesList: [...genres, this.state.genres],
              seriesList: []
            })
          // ));
          console.log(this.state.moviesList);
        })
  }


  render() {
    this.state.moviesList.pop()
    const movie = this.state.moviesList.map((genre, i) => (
        <option key={i} value={genre.name}>{genre.name}</option>
    ))
    this.state.seriesList.pop()
    const serie = this.state.seriesList.map((genre, i) => (
        <option key={i} value={genre.name}>{genre.name}</option>
    ))
    return (
      <div>
        <Select handleChange={this.changeType} value={this.state.inputValue}>
          <option onSelect={this.getMovies} value="peliculas" >Peliculas</option>
          <option onSelect={this.getSeries} value="series">Series</option>
        </Select>
        {this.state.moviesList.length > 0 &&
          <Select handleChange={this.changeType} onChange={this.handleApi} value={this.state.inputValue}>
            {movie}
          </Select>
        }
        {this.state.seriesList.length > 0 &&
          <Select handleChange={this.changeType}  onChange={this.handleApi} value={this.state.inputValue}>
            {serie}
          </Select>
        }

        {/* <p>{this.state.inputValue}</p> */}
      </div>
      )
    }
}

export default SelectMovieTv
