import React, { Component } from "react";
import "./App.css";
import logo3 from "./images/jumialogo.svg";
import foodimage from "./images/foodicon.png";
import travelimage from "./images/travelo.png";
import flightimage from "./images/travel.jpeg";
import dealimage from "./images/dealsimage.jpeg";
import houseimage from "./images/houseimage.png";
import oneimage from "./images/oneimage.png";
import partyimage from "./images/partyimage.png";


class Signup extends Component {
  render() {
    return (
      <div id="jumia">
        <div className="jumia1">
          <div className="jumia2">
            <a href="#" className="marketplace" target="_blank">
              Sell on Jumia
            </a>
          </div>
          <div className="jumia3">
            <div classname="lists" />
            <ul>
              <li>
                <img src={logo3} width="60px" height="13vh" />
              </li>
              <li>
                <a href="#">
                  <img src={foodimage} width="15px" height="10vh" />
                  FOOD
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={travelimage} width="15px" height="11vh" />
                  TRAVEL
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={flightimage} width="15px" height="11vh" />
                  FLIGHT
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={dealimage} width="15px" height="11vh" />
                  DEALS
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={houseimage} width="15px" height="11vh" />
                  HOUSE
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={partyimage} width="15px" height="11vh" />
                  PARTY
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={oneimage} width="15px" height="11vh" />
                  ONE
                </a>
              </li>
            </ul>
          </div>
        </div>
        <header className="header">
          <section className="wrapper">
            <form />
          </section>
        </header>
      </div>
    );
  }
}

export default Signup;
