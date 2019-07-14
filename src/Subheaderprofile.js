import React, { Component } from "react";
import basket from "./image/jimage4.png";
import cart from './image/cart.png'
import {BrowserRouter,Link, NavLink,Redirect} from 'react-router-dom'

class Subheaderprofile extends Component {
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
              <div className="next">
          <Link to='/login'><a>My Account</a><br/></Link>
          <Link to='/login'><a>My Orders</a><br/></Link>
          <Link to='/login'><a>My Saved Items</a><br/></Link>
         <hr/>
          </div>
          
          <div className="tradme">
            
          <Link to='/Register'><a>LOGOUT</a></Link>
          </div>
          </div>

        </div>
         <img src={cart} alt='cart'/>

        </div>
       
      </div>
      
    
    );
  }
}

export default Subheaderprofile;
