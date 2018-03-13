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
      inputValue: '',
      genreList: [],
      genreSelected: null,
      itemsList: [],
      itemSelected: null
    }
    console.log(this.state.inputValue)
  }

  changeType = (event) => {
    console.log(event.target.value)
    this.setState({
      inputValue: event.target.value,
      genreList: [],
      genreSelected: null,
      itemsList: [],
      itemSelected: null,
    })
    if(event.target.value === 'peliculas'){
      this.getMovies()
    }else{
      this.getSeries()
    }
  }
  changeGenre = (event) => {
    this.setState({
      genreSelected: event.target.value,
      itemsList: [],
      itemSelected: null,
    })
    const genreId = event.target.value
    this.api.getSeries(genreId).then(res => {
          const genres = res.data.results
          console.log(res.data);
          // const genre = genres.forEach();
          this.setState({
            itemsList: genres
          })
          // console.log(this.state.seriesList);
        })
    this.api.getMovies(genreId).then(res => {
          const genres = res.data.genres
          console.log(res.data);
          // const genre = genres.forEach();
          this.setState({
            itemsList: genres
          })
          // console.log(this.state.seriesList);
        })

  }
  getMovies(){
    this.api.getMoviesList().then(res => {
      const genres = res.data.genres
      this.setState({
        genreList: genres
      })
    })
  }

  getSeries(){
    this.api.getSeriesList().then(res => {
          const genres = res.data.genres
          this.setState({
            genreList: genres
          })
        })
  }
  showMovies(){
    console.log('pelis');
  }

  showSeries(){
    console.log('seriessss');
  }
  render() {
    this.state.moviesList.pop()
    const movie = this.state.moviesList.map((genre, i) => (
        <option  key={i} value={genre.name}>{genre.name}</option>
    ))
    this.state.seriesList.pop()
    const serie = this.state.seriesList.map((genre, i) => (
        <option key={i} value={genre.name}>{genre.name}</option>
    ))
    return (
      <div>
        <Select handleChange={this.changeType} value={this.state.inputValue}>
          <option value="peliculas" >Peliculas</option>
          <option value="series">Series</option>
        </Select>

        {this.state.genreList.length > 0 &&
          <Select handleChange={this.changeGenre}>
            {this.state.genreList.map(genre => (
              <option key={genre.name} value={genre.id}>{genre.name}</option>
            ))}
          </Select>
        }

        {this.state.itemsList.length > 0 &&
          <Select handleChange={this.changeItem}>
            {this.state.itemsList.map(item => (
              <option key={item.name} value={item.id}>{item.name}</option>
            ))}
          </Select>
        }

        {this.state.moviesList.length > 0 &&
          <Select handleChange={this.changeGenre}>
            {movie}
          </Select>
        }
        {this.state.seriesList.length > 0 &&
          <Select handleChange={this.changeItem} mostrar={this.showSeries}>
            {serie}
          </Select>
        }

        {/* <p>{this.state.inputValue}</p> */}
      </div>
      )
    }
}

export default SelectMovieTv
