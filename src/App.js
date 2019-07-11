import React, { Component } from "react";
import Headerbc from "./Headerbc";
import Login from "./slogin";
import Register from "./Register";
import Profile from "./Profile";
import Futmeter from "./Futmeter";
import "./App.css";
import Footerem from "./Footerem";
import Rowa from "./Rowa";
import Subheaderbc from "./Subheaderbc";
import { Link, Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route path="/Home" component={Home} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Register" component={Register} />
          <Route path="/Futmeter" component={Futmeter} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
