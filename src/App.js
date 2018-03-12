import React, { Component } from 'react'
import TheMovieDbApi from './TheMovieDbApi.js'
import 'bootstrap/dist/css/bootstrap.css'
import Card, { CardBody, CardImg } from './components/card'
import SelectMovieTv from './components/select/selectMovieTv.js'



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
      });
    })
  }
  render() {
    this.state.items.pop() // la última posición que trae está vacia, por lo tanto hay que sacarla
    const lista = this.state.items.map( (item, i) =>
      <Card className="col-md-6 col-sm-12 col-xl-4" key={i}>
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
            <SelectMovieTv />
          </div>
          <div className="row">
            {lista}
         </div>
        </div>
      )
    }
}

export default App;
