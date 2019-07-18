import React, {Component} from 'react'
import {BrowserRouter, Link} from 'react-router-dom'
import photo1 from './image/jumia anim1.png'
import photo from './image/Jumiaprime.jpg'
import photo2 from './image/jumiatiny1.png'
import photo3 from './image/jumiatiny2.png'

class Navigationbc extends Component {
  render () {
    return (
      <div className='navcontainerbc'>
      <div className='subnav1'>
       <div className='no1bc'>
       <p className='mainno1bc'>FREE DELIVERY</p>
        <div className='subno1bc'>
        <ul>
         <li>Jumia Prime</li>
         <li>Other Services</li>
         <li>Electricity Bills</li>
         <li>Internet Bills</li>
         <li>TV Subscription</li>
        </ul>
         
        </div>

       </div>
       <div className='no2bc'>
       <p className='mainno2bc'>PHONES & TABLETS</p>
        <div className='subno2bc'>

        </div>

       </div>
       <div className='no3bc'>
       <p className='mainno3bc'>COMPUTING</p>
        <div className='subno3bc'>

        </div>

       </div>
       <div className='no4bc'>
       <p className='mainno4bc'>ELECTRONICS</p>
        <div className='subno4bc'>

        </div>

       </div>
       <div className='no5bc'>
       <p className='mainno5bc'>HOME & OFFICE</p>
        <div className='subno5bc'>

        </div>

       </div>
       <div className='no6bc'>
       <p className='mainno6bc'>FASHION</p>
        <div className='subno6bc'>

        </div>

       </div>
       <div className='no7bc'>
       <p className='mainno7bc'>HEALTH & BEAUTY</p>
        <div className='subno7bc'>

        </div>

       </div>
       <div className='no8bc'>
       <p className='mainno8bc'>GAMING</p>
        <div className='subno8bc'>

        </div>

       </div>
       <div className='no9bc'>
       <p className='mainno9bc'>GROCERY</p>
        <div className='subno9bc'>

        </div>

       </div>
       <div className='no10bc'>
       <p className='mainno10bc'>GLOBAL STORE</p>
        <div className='subno10bc'>

        </div>

       </div>
       <div className='no11bc'>
       <p className='mainno11bc'>BABY PRODUCTS</p>
        <div className='subno11bc'>

        </div>

       </div>
       <div className='no12bc'>
       <p className='mainno12bc'>OTHER CATEGORIES</p>
        <div className='subno12bc'>

        </div>

       </div>
       </div>

       <div className='subnav2'>
       <img src={photo1}></img>
       </div>
       <div className='subnav3'>
       <div className='sub1'>
       <img src={photo2} height='20px'/>
       <h5>SELL ON JUMIA <br></br>Millions Of Monthly Visitors</h5>
       </div>
       <div className='sub2'>
       <img src={photo3} height='24px'></img>
       <h5>PAY ON DELIVERY<br></br>After Checking the Product</h5>
       </div>
       <div className='sub2'>
       <img src={photo3} height='24px'></img>
       <h5>EASY RETURN<br></br>Quick Refund</h5>
       </div>
       <img src={photo} height='194px' width='199px'></img>
       
       </div>
        
      </div>
    )
  }
}

export default Navigationbc