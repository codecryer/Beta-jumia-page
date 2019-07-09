import React, {Component} from 'react'
import basket from './image/jimage4.png'
import { NavLink, BrowserRouter} from 'react-router-dom'

class Subheaderbc extends Component {
  render () {
    return (
      <BrowserRouter>
      <div className='subcontainerbc'>
        <div className='containbc'>
          <div className='jumiabasketbc'>
            <div className='box1'></div>
            <div className='box1'></div>
            <div className='box1'></div>

          </div>
          <img src={basket} alt='basket' height='38px'/>
        </div>
        <div className='searchbc'>
          <input type='text' placeholder='Search for products, brands and categories'/>
          <button>SEARCH</button><NavLink></NavLink>
        </div>
      </div>
      </BrowserRouter>
    ) 
  }
}

export default Subheaderbc