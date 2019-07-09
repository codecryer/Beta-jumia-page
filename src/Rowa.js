import React, {Component} from 'react'
// import {Link, Redirect, BrowserRouter} from "react-router-dom"
import logo from './images/row1.png'


class Rowa extends Component {
    render(){
        return (
            <div>
            <div>
              <img src={logo} /> 
            </div>
            <br/>
            <br/>
            <div activeClassName = "rowb">
            <h2>Deals Of The Day</h2>
            <a>SEE ALL  ></a>
            </div>
          
            </div>
          
        )
    }
}

export default Rowa