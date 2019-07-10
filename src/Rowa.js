import React, {Component} from 'react'
// import {Link, Redirect, BrowserRouter} from "react-router-dom"
import logo from './images/row1.png';
import logo2 from "./images/dealafter.png";
import logo3 from "./images/deal1.png";
import logo4 from "./images/deal2.png";
import logo5 from "./images/deal3.png";
import logo6 from "./images/deal4.png";
import logo7 from "./images/deal5.png";
import logo8 from "./images/deal6.png";
import logo9 from "./images/fridge.png";
import logo10 from "./images/fan.png";
import logo11 from "./images/dealafter1.png";
import logo12 from "./images/deodorant.png";
import logo13 from "./images/deodorantafter1.png"
import logo14 from "./images/deodorantafter2.png"
import logo15 from "./images/TV.png"
import logo16 from "./images/tvafter1.png"
import logo17 from "./images/tvafter2.png"
import logo18 from "./images/rainydays.png"
import logo19 from "./images/rainydaysafter.png"
import logo20 from "./images/rainaft.png"
import logo21 from "./images/rainaft2.png"
import "./Rowa.css"


class Rowa extends Component {
    render(){
        return (
            <div>
            <div className="rowc">
              <img src={logo} alt = "images"/> 
            </div> 
            <div className = "rowb">
          <p>Deals of the Day
              <a>See All ></a>
          </p>
            </div>
            <div className = "rowc">
             <img src ={logo2} alt = "images" /><img src ={logo11} alt = "images" />
            </div>
            <div className="rowc">
                <img src ={logo3} alt = "images"/><img src ={logo4} alt = "images"/><img src ={logo5} alt = "images"/>
                <img src ={logo6} alt = "images"/><img src ={logo7} alt = "images"/><img src ={logo8} alt = "images"/>
            </div>
            <div className="rowc">
             <img src ={logo9} alt = "images"/><img src ={logo10} alt = "images"/>
             </div>
             <div className="rowc">
             <img src ={logo12} alt = "images"/>
             </div>
             <div className="rowc">
              <img src ={logo13} alt = "images" /><img src ={logo14} alt = "images" />
             </div>
             <div className="rowc">
             <img src ={logo15} alt = "images" />
             </div>
             <div className="rowc">
             <img src ={logo16} alt = "images" /><img src ={logo17} alt = "images" />
             </div>
             <div>
             <img src ={logo18} alt = "images" />
             </div>
             <div>
             <img src ={logo20} alt = "images" /> <img src ={logo21} alt = "images" />
             </div>
             <div>
             <img src ={logo19} alt = "images" />
             </div>
             <div>
                 <p></p>
             </div>
             
            </div>
          
        )
    }
}

export default Rowa