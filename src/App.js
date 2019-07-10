import React, {Component} from 'react'
import Headerbc from './Headerbc'
import './App.css'
import Footerem from './Footerem';
import Rowa from './Rowa';
import Subheaderbc from './Subheaderbc'

class App extends Component {
  render () {
    return (
      <div className="main">
        <Headerbc/>
        <Subheaderbc/>
        <Rowa/>
        <Footerem />
      </div>
    )
  }
}

export default App;
