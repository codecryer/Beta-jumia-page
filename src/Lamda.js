import React, { Component } from "react";
import "./App.css";
import {Redirect} from 'react-router-dom'


class Lamda extends Component {

  constructor(){
    super()
    let loggedIn = false;
    this.state = {
      email:"",
      password:"",
      loggedIn
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
handleChange(e){
let target = e.target;
let value = target.type === "checkbox" ? target.checked : target.value;
let name = target.name;

this.setState({
  [name] : value
})
}
handleSubmit(e){
  e.preventDefault()
  
  if(this.state.email==="Admin" && this.state.password==="Admin1234"){
    return  <Redirect to="/Home" />
  }else{
    alert ("incorrect password")
  }
  
}
  render() {



    return (
      <div className="la">
        <div className="looh">
          <form onSubmit={this.handleSubmit}>
            <div className="rust">
              <h2>Login</h2>
            </div>
            <div className="xas">
              <input type="text" placeholder="E-mail" name="email" value={this.state.email} onChange={this.handleChange} />
              <br />
              <br />
              <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
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
