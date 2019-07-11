import React, { Component } from "react";
import Subheaderbc from "./Subheaderbc";
import "./App.css";
import Signup from "./signup";
import Futmeter from "./Futmeter";
import Lamda from "./Lamda";

class Login extends Component {
  render() {
    return (
      <div className="alpha">
        <div className="beta">
          <div className="gamma">
            <Signup />
          </div>
          <div className="tango">
            <Subheaderbc />
          </div>
        </div>
        <div className="bodyzeta">
          <Lamda />
        </div>
        <Futmeter />
      </div>
    );
  }
}

export default Login;
