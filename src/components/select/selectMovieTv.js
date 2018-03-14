import React, { Component } from 'react';
// import GenresList from '../../GenresList.js'
import TheMovieDbApi from '../../TheMovieDbApi.js'
import Select from './select.js'
import Card, { CardBody, CardImg } from '../card'


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
      itemSelected: null,
      items: []
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
  changeGenre = (event) => {
    this.setState({
      genreSelected: event.target.value,
      itemsList: [],
      itemSelected: null,
    })
    const genreId = event.target.value
    this.api.getMovies(genreId).then(res => {
          const genres = res.data.results
          console.log(genres);
          this.setState({
            itemsList: genres
          })
        })
  }
  changeItem = (event) =>{
    const itemSelected = event.target.value
    this.api.getMovie(itemSelected).then(res => {
          const item = res.data
          console.log(item)
          // const genre = genres.forEach();
          this.setState({
            itemSelected: itemSelected,
            items: item
          })
        })
        console.log(this.state.items);
  }
  render() {
    // this.state.moviesList.pop()
    // const movie = this.state.itemList.map((genre, i) => (
    // <option  key={i} value={genre.name}>{genre.name}</option>
    // ))
    // this.state.seriesList.pop()
    // const serie = this.state.itemList.map((genre, i) => (
    //     <option key={i} value={genre.name}>{genre.name}</option>
    // ))
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
              <option key={item.name} value={item.id}>{item.title}</option>
            ))}
          </Select>
        }
        {this.state.items.map( (item, i) =>
          <Card className="col-md-6 col-sm-12 col-xl-4" key={i}>
               <CardImg src={'https://image.tmdb.org/t/p/w500'+item.backdrop_path}/>
            <CardBody>
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.overview}</p>
            </CardBody>
           </Card>
        )
        }

          {/* <p>{this.state.inputValue}</p> */}
      </div>
      )
    }
}

export default SelectMovieTv
