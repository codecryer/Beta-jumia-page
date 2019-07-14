import React, { Component } from "react";
import Headerbc from "./Headerbc";
import Subheaderbc from "./Subheaderbc";
import Rowa from "./Rowa";
import Footerem from "./Footerem";
import Onfooterme from './Onfooterme'
import Tophead from "./Tophead";

class Home extends Component {
  render() {
    return (
      <div>
        <Tophead/>
        <Headerbc />
        <Subheaderbc />
        <Rowa />
        <Onfooterme />
        <Footerem />
      </div>
    );
  }
}
export default Home;
