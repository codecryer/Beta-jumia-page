import React, { Component } from "react";
import Subheaderbc from "./Subheaderbc";
import "./App.css";
import Signup from "./signup";
import Futmeter from "./Futmeter";
import Lamda from "./Lamda";
import Subheaderlogin from './Subheaderlogin'
import Footerloginem from './Footerem'


class Login extends Component {
  render() {
    return (
      <div>
        
            <Signup />
        
        
          <Subheaderlogin/>
      
      
          <Lamda/>
          <Futmeter />
      
      
      </div>
    )
  }
}

export default Login;
