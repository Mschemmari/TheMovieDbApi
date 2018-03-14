import React, { Component } from 'react'
import TheMovieDbApi from './TheMovieDbApi.js'
import 'bootstrap/dist/css/bootstrap.css'
import Card, { CardBody, CardImg } from './components/card'
import SelectMovieTv from './components/select/selectMovieTv.js'



class App extends Component {
  // constructor() {
  //   super()
  //   this.api = new TheMovieDbApi()
  //   this.state = {
  //     items: []
  //   };
  // }
  // componentDidMount() {
  //   this.api.getPopularMovies().then(res => {
  //     console.log(res.data.results)
  //     const items = res.data.results
  //     this.setState({
  //       items: [...items, this.state.items],
  //     });
  //   })
  // }
  render() {

      return (
        <div className="container">
          <div className="row">
            <SelectMovieTv />
          </div>

        </div>
      )
    }
}

export default App;
