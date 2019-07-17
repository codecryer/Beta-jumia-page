import React, { Component } from "react";
import basket from "./image/jimage4.png";
import cart from './image/cart.png'
import {BrowserRouter,Link, NavLink,Redirect} from 'react-router-dom'

class Subheaderpme extends Component {
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
          <p className='menubuttonbc'>Hello<br/><b>Admin</b></p>
          <div className='dropdownmenu'>
              <div className="TROD">
         
          <Link to='/login'><a>LOGIN</a><br/></Link>
         
          </div>
          
          <div className="TROD2">
            
          <Link to='/Register'><a>Signup</a></Link>
          </div>
          </div>

        </div>
         <img src={cart} alt='cart'/>

        </div>
       
      </div>
      
    
    );
  }
}

export default Subheaderpme;
