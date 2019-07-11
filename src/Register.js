import React, { Component } from "react";
import Subheaderbc from "./Subheaderbc";
import "./App.css";
import Signup from "./signup";

class Register extends Component {
  render() {
    return (
      <div className="go">
        <div className="signup">
          <Signup />
        </div>
        <div>
          <div className="subheader">
            <Subheaderbc />
          </div>
          <div className="pop">
            <h3>Create Account</h3>
          </div>
          <div className="inputx">
            <input placeholder="First Name" type="text" />
            <input placeholder="Last Name" type="text" />
            <input placeholder="E-mail" type="text" />
            <input placeholder="Password" type="text/number" />
            <input placeholder="phone number" type="number" />
            <br />
            <br />
            <br />
            <p>I want to receive Jumia Newsletters and the best offers</p>
            <br />
            <div className="btns">
              <div>
                <button className="btn1">CREATE ACCOUNT</button> <br />
              </div>
              <div>
                <input placeholder="." type="text" className="or" />

                <input placeholder="." type="text" className="or" />
              </div>
              <div>
                <button className="btn2">REGISTER WITH FACEBOOK</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
