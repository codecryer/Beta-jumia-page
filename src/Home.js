import React, { Component } from "react";
import Headerbc from "./Headerbc";
import Subheaderbc from "./Subheaderbc";
import Rowa from "./Rowa";
import Footerem from "./Footerem";

class Home extends Component {
  render() {
    return (
      <div>
        <Headerbc />
        <Subheaderbc />
        <Rowa />
        <Footerem />
      </div>
    );
  }
}
export default Home;
