import React, { Component, Fragment } from 'react'

export class ReviewList extends Component {
  render() {
    return (
     <Fragment>
     
     <h6 className="mt-2">REVIEWS</h6>

     <div>
          <p className=" p-0 m-0"><span className="Reviewer-name">Ahmed khaled</span>
           <span className="text-warning" >
           <i className="fa fa-star"></i> 
           <i className="fa fa-star"></i> 
           <i className="fa fa-star"></i> 
           <i className="fa fa-star"></i> 
           </span> </p>
          <p>this item is good</p>

     </div>

     <div>
     <p className=" p-0 m-0"><span className="Reviewer-name">Nizar Dumairieh</span>
      <span className="text-success" >
      <i className="fa fa-star"></i> 
      <i className="fa fa-star"></i> 
      <i className="fa fa-star"></i> 
      <i className="fa fa-star"></i> 
      <i className="fa fa-star"></i> 
      </span> </p>
     <p>this item is good</p>

</div>


    
     
     
     </Fragment>
    )
  }
}

export default ReviewList