import React, {Component} from 'react'

class Dropdown extends Component {
  render () {
    return (
      <div className='menubc'>
       <button className='menubuttonbc'>Button</button>
        <div className='dropdownmenu'>
          <a href=''>Home</a>
          <a href=''>Login</a>
          <a href=''>Sign up</a>
          
        </div>

      </div>
    )
  }
  }