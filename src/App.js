import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import SelectMovieTv from './components/select/selectMovieTv.js'



class App extends Component {
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
