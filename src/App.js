import React, { Component } from 'react';
import TheMovieDbApi from './TheMovieDbApi.js'
import Card, { CardBody, CardImg } from './components/card'
import 'bootstrap/dist/css/bootstrap.css'


class App extends Component {
  constructor() {
    super()
    this.api = new TheMovieDbApi()
    this.state = {
      items: [],
      genre_ids: [],
      src: "",
      overview: "",
      genres: ""
    };
  }
  componentDidMount() {
    this.api.getPopularMovies().then(res => {
      console.log(res.data.results)
      const items = res.data.results
      this.setState({
        items: items,
        src: items.poster_path
      });
    })
    this.api.getGenres().then(res => {
      console.log(res.data.genres)
      const genres = res.data.genres
      this.setState({
        genres: genres,
        // src: items.poster_path
      });
    })
  }

  render() {
    const lista = this.state.items.map((item, genres)=>
      <Card className="col-6" key={item.id}>
        <CardImg src={'https://image.tmdb.org/t/p/w500'+item.backdrop_path}/>
        <CardBody>
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.overview}</p>
          <p>{genres.name}</p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </CardBody>
      </Card>
    )
      return (

        <div className="container">
          <div className="row">
              {lista}
         </div>
        </div>
      )
    }
}

export default App;
