import React, { Component } from "react";
import "./App.css";

class Lamda extends Component {
  render() {
    return (
      <div className="la">
        <div className="looh">
          <form>
            <div className="rust">
              <h2>Login</h2>
            </div>
            <div className="xas">
              <input type="text/number" placeholder="E-mail" />
              <br />
              <br />
              <input type="password" placeholder="Password" />
            </div>
            <div className="ui">
              <button className="ut1">LOGIN</button>

              <br />
              <button className="ut2">LOGIN WITH FACEBOOK</button>
            </div>
          </form>
        </div>
        <div className="lin" />
        <div className="cra">
          <form>
            <div className="art">
              <h2>Create Your Jumia Account</h2>
            </div>
            <div className="joy">
              <button className="b1">CREATE AN ACCOUNT VIA E-MAIL</button>

              <br />

              <button className="b2">REGISTER WITH FACEBOOK</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Lamda;
