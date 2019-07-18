import React, { Component } from "react";
import Headerbc from "./Headerbc";
import Subheaderpme from "./Subheaderpme";
import Rowa from "./Rowa";
import Footerem from "./Footerem";
import Onfooterme from './Onfooterme'
import Tophead from "./Tophead";
import Navigationbc from './Navigationbc'

class Home extends Component {
  render() {
    return (
      <div>
        <Tophead/>
        <Headerbc />
        <Subheaderpme />
        <Navigationbc/>
        <Rowa />
        <Onfooterme />
        <Footerem />
      </div>
    );
  }
}
export default Home;
