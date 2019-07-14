import React, { Component } from "react";
import Subheaderbc from "./Subheaderbc";
import "./App.css";
import Signup from "./signup";
import Futmeter from "./Futmeter";
import Lamda from "./Lamda";

class Login extends Component {
  render() {
    return (
      <div>
        
            <Signup />
        
        
            <Subheaderbc />
      
      
    
          <Lamda />
      
        <Futmeter />
      </div>
    )
  }
}

export default Login;
