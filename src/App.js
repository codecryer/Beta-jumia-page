import React, {Component} from 'react'
import Headerbc from './Headerbc'
import Subheaderbc from './Subheaderbc'
import './Rowa.css'
import Rowa from "./Rowa"

class App extends Component {
  render () {
    return (
      <div>
        <Headerbc/>
        <Subheaderbc/>
        <Rowa/>
      </div>
    )
  }
}

export default App;
