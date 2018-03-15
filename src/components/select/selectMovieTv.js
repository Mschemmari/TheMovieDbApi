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
          this.setState({
            items: item
          })
        })
        console.log(this.state.items);
     }
  render() {
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
        {this.state.loading && <div>Loading...</div>}
        {this.state.items.length > 0 &&
          <Card className="col-md-6 col-sm-12 col-xl-4">
               <CardImg src={'https://image.tmdb.org/t/p/w500'+this.state.items.backdrop_path}/>
            <CardBody>
              <h5 className="card-title">{this.state.items.title}</h5>
              <p className="card-text">{this.state.items.overview}</p>
            </CardBody>
           </Card>
        }
      </div>
      )
    }
}

export default SelectMovieTv
