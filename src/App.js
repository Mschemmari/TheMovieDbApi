import React, { Component } from 'react';
import TheMovieDbApi from './TheMovieDbApi.js'
import GenresList from './GenresList.js'
import Card, { CardBody, CardImg } from './components/card'
import 'bootstrap/dist/css/bootstrap.css'


class App extends Component {
  constructor() {
    super()
    this.api = new TheMovieDbApi()
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    this.api.getPopularMovies().then(res => {
      console.log(res.data.results)
      const items = res.data.results
      this.setState({
        items: [...items, this.state.items],
        src: items.poster_path
      });
    })



  }
  render() {
    const lista = this.state.items.map((item, genres)=>
      <Card className="col-md-6 col-sm-12 col-xl-4" key={item.id}>
        <CardImg src={'https://image.tmdb.org/t/p/w500'+item.backdrop_path}/>
        <CardBody>
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.overview}</p>
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
