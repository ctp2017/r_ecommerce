import React, { Component, Fragment, useState } from 'react'
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap'

import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const StarRating = (props) => {
    
     const [rating , setRating] = useState(null);
     const [hover , setHover] = useState(null);

     return (
       <Fragment>
       <form>
       {[...Array(5)].map((star , i)=>{
           const ratingValue = i + 1 ;
        return (
            <label>
           
            <FontAwesomeIcon
            className="star"
             icon={faStar}
             color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
             onMouseEnter={() => setHover(ratingValue)}
             onMouseLeave={() => setHover(null)}

             onClick={() => setRating(ratingValue)}

             name="rating"
             id='rate'
             value={ratingValue} 
            
           
             />
            </label>
        );
       })} 
       <p className='text-center mt-2'>your rating is  :{rating} </p>
        
       </form>
       </Fragment>
     )
     };
  



export class OrderList extends Component {

     constructor() {
          super();
          this.state = {
               show: false,
          }
     }

     handleClose = () => {
          this.setState({ show: false })
     };
     handleShow = () => {
          this.setState({ show: true });
     };


     render() {




          return (
               <Fragment>
                    <Container className="text-center" fluid={true}>
                         <div className="section-title text-center mb-55"><h2> User Profile </h2>
                         </div>
                    </Container>
                    <Container  >
                         <Row className="justify-content-center">
                              <Col lg={6} md={6} sm={12}  >
                                   <ul className="list-group">
                                        <li className="list-group-item">Name :  nezar </li>
                                        <li className="list-group-item">Email :  nezar@gmail.com </li>
                                   </ul>
                              </Col>
                         </Row>
                    </Container>
                    <Container >
                         <div className="section-title text-center mb-55"><h2> order history by(Nizar ) </h2>
                         </div>
                         <Card >
                              <Card.Body>
                                   <Row md={2} lg={2} sm={6} xs={6}>
                                        <div>
                                             <Col md={12} lg={12} sm={6} xs={6}>
                                                  <h5 className="product-name">Product Name </h5>
                                                  <h6> Quantity = 7 </h6>
                                                  <p>large | red</p>
                                                  <h6>Price = 10 x 7 = 70$</h6>
                                                  <h6>Stauts = pending </h6>
                                             </Col>
                                             <Button onClick={this.handleShow} className="btn btn-danger">Post Review </Button>
                                             <hr></hr>
                                        </div>


                                        <div>
                                             <Col md={12} lg={12} sm={6} xs={6}>
                                                  <h5 className="product-name">Product Name </h5>
                                                  <h6> Quantity = 7 </h6>
                                                  <p>large | red</p>
                                                  <h6>Price = 10 x 7 = 70$</h6>
                                                  <h6>Stauts = pending </h6>
                                             </Col>
                                             <Button className="btn btn-danger">Post Review </Button>
                                             <hr></hr>
                                        </div>

                                   </Row>

                                   <Row md={2} lg={2} sm={6} xs={6}>
                                        <div>
                                             <Col md={12} lg={12} sm={6} xs={6}>
                                                  <h5 className="product-name">Product Name </h5>
                                                  <h6> Quantity = 7 </h6>
                                                  <p>large | red</p>
                                                  <h6>Price = 10 x 7 = 70$</h6>
                                                  <h6>Stauts = pending </h6>
                                             </Col>
                                             <Button className="btn btn-danger">Post Review </Button>
                                             <hr></hr>
                                        </div>


                                        <div>
                                             <Col md={12} lg={12} sm={6} xs={6}>
                                                  <h5 className="product-name">Product Name </h5>
                                                  <h6> Quantity = 7 </h6>
                                                  <p>large | red</p>
                                                  <h6>Price = 10 x 7 = 70$</h6>
                                                  <h6>Stauts = pending </h6>
                                             </Col>
                                             <Button className="btn btn-danger">Post Review </Button>
                                             <hr></hr>
                                        </div>

                                   </Row>
                              </Card.Body>
                         </Card>

                    </Container>



                    <Modal show={this.state.show} onHide={this.handleClose}>
                         <Modal.Header closeButton>
                              <Modal.Title>Add your review</Modal.Title>
                         </Modal.Header>
                         <Modal.Body>


                         <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                         <label className="form-label">Your Name</label>
                         <input className="form-control" type="text" placeholder="Nizar" />
                    </div>

                    <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                         <label className="form-label">Your Comment</label>
                         <textarea rows={2} className="form-control" type="text" placeholder="Your Comment" />
                    </div>
                    <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                    <label className="form-label">Your review </label>

                    <StarRating/>
                   
                    </div>


                             



                         </Modal.Body>
                         <Modal.Footer>
                              <Button onClick={this.handleShow} variant="secondary" onClick={this.handleClose}>
                                   Close
                              </Button>
                         </Modal.Footer>
                    </Modal>


               </Fragment>
          )
     }
}
export default OrderList