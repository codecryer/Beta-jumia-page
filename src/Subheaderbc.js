import React, { Component } from "react";
import basket from "./image/jimage4.png";
import cart from './image/cart.png'
import {BrowserRouter,Link, NavLink,Redirect} from 'react-router-dom'

class Subheaderbc extends Component {
  render() {
    return (
      
      <div className="subcontainerbc">
        <div className="containbc">
          <div className="jumiabasketbc">
            <div className="box1" />
            <div className="box1" />
            <div className="box1" />
          </div>
          <img src={basket} alt="basket" height="38px" />
        </div>
        <div className="searchbc">
          <input
            type="text"
            placeholder="Search for products, brands and categories"
          />
          <button>SEARCH</button>
        </div>
        <div className='help'>
         <p>Need<br></br><b>Help?</b></p>
         <div className='menubc'>
          <p className='menubuttonbc'>Your<br></br><b>Account</b></p>
          <div className='dropdownmenu'>
          <Link to='/login'>Login</Link>
           
          <Link to='/Register'>Sign up</Link>
          
          </div>

        </div>
         <img src={cart} alt='cart'/>

        </div>
       
      </div>
      
    
    );
  }
}

export default Subheaderbc;
