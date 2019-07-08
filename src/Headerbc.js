import React, {Component} from 'react'
import logo from './jimage1.png'
import logo1 from './image/jimage2.png'
import logo2 from './image/jimage4.png'
import './jumiabc.css'

class Headerbc extends Component {
  render () {
    return (
      <div className='headerbc'>
        <div className='head1bc'>
          <p>IN PARTNERSHIP WITH</p>
          <img src={logo} width='20px' height='20px' alt='logo'/>
          <p>&</p>
          <img src={logo1} width='50px' height='20px' alt='logo'/>
        </div>
        <div className='head2bc'>
          <img src={logo2} width='60px' height='20px' alt='logo'/>
          <p>FOOD</p>
          <p>TRAVEL</p>
          <p>FLIGHTS</p>
          <p>DEALS</p>
          <p>HOUSE</p>
          <p>PARTY</p>
          <p>ONE</p>

        </div>

      </div>
    )
  }
}
export default Headerbc