import React, { Component } from 'react'
import'../../assets/css/custom.css'


export class SideBarMenu extends Component {
  render() {
    return (

      <div className="accordionMenuDiv">
                    <div className="accordionMenuDivInside">


                         <button className="accordion">
                              <img className="accordionMenuIcon" src="test.png" /> Living Room
                         </button>
                         <div className="panel">
                              <ul>
                                   <li><a href="#" className="accordionItem" > Sofa</a></li>
                                   <li><a href="#" className="accordionItem" > Beds</a></li>
                                   <li><a href="#" className="accordionItem" > Tv Units </a></li>
                              </ul>
                         </div>


                         <button className="accordion">
                         <img className="accordionMenuIcon" src="test.png" /> Living Room
                    </button>
                    <div className="panel">
                         <ul>
                              <li><a href="#" className="accordionItem" > Sofa</a></li>
                              <li><a href="#" className="accordionItem" > Beds</a></li>
                              <li><a href="#" className="accordionItem" > Tv Units </a></li>
                         </ul>
                    </div>


                      

                    </div>

               </div>





    )
  }
}

export default SideBarMenu