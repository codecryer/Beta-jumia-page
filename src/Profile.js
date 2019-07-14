import React, { Component } from "react";
import Subheaderprofile from "./Subheaderprofile";
import Headerbc from "./Headerbc";
import Rowa from './Rowa'
import Onfooterme from './Onfooterme'
import Footerem from './Footerem'

class Profile extends Component {
  render() {
    return (
      <div>
         <Headerbc />
        <Subheaderprofile />
        <Rowa/>
        <Onfooterme/>
        <Footerem />
      </div>
    );
  }
}
export default Profile;
