import React, { Component } from 'react';
import TheMovieDbApi from './TheMovieDbApi.js'
import Card, { CardBody, CardImg } from './components/card'


class App extends Component {
  constructor() {
    super()
    this.api = new TheMovieDbApi()
  }
  componentDidMount() {
    this.api.getPopularMovies().then(res => {
      console.log(res.data.results)
    })
  }
  render() {
      return (
        <div>

        </div>
      )
    }
}

export default App;
