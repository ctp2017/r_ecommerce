import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
export class CartList extends Component {
     render() {
          return (
               <Fragment>
                    <Container fluid={true}>
                         <Row>
                              <Col className="p-1" lg={7} md={7} sm={12} xs={12} >
                                   <Card >
                                        <Card.Body>
                                             <Row>
                                                  <Col md={3} lg={3} sm={6} xs={6}>
                                                       <img className="cart-product-img" src="http://127.0.0.1:8000/upload/product/1725828427740611.jpeg" />
                                                  </Col>
                                                  <Col className='product-name' md={6} lg={6} sm={7} xs={7} >
                                                       <h5>Home Sizzler 214 cm (7 ft)</h5>
                                                       <h6> Quantity = 7 </h6>
                                                       <p>large | Red</p>
                                                       <h6>Price = 10 x 7 = 10 $</h6>
                                                  </Col>
                                                  <Col md={3} lg={3} sm={2} xs={2}>
                                                       <Button className="btn mt-5 mx-1 btn-sm site-btn"><i className="fa fa-trash-alt"></i> </Button>
                                                       <Button className="btn mt-5 mx-1 btn-sm site-btn"><i className="fa fa-plus"></i> </Button>
                                                       <Button className="btn mt-5 mx-1 btn-sm site-btn"><i className="fa fa-minus"></i> </Button>
                                                  </Col>
                                             </Row>
                                        </Card.Body>
                                   </Card>
                                   <Card >
                                        <Card.Body>
                                             <Row>
                                                  <Col md={3} lg={3} sm={6} xs={6}>
                                                       <img className="cart-product-img" src="http://127.0.0.1:8000/upload/product/1725828427740611.jpeg" />
                                                  </Col>
                                                  <Col className='product-name' md={6} lg={6} sm={7} xs={7} >
                                                       <h5>Home Sizzler 214 cm (7 ft)</h5>
                                                       <h6> Quantity = 7 </h6>
                                                       <p>large | Red</p>
                                                       <h6>Price = 10 x 7 = 10 $</h6>
                                                  </Col>
                                                  <Col md={3} lg={3} sm={2} xs={2}>
                                                       <Button className="btn mt-5 mx-1 btn-sm site-btn"><i className="fa fa-trash-alt"></i> </Button>
                                                       <Button className="btn mt-5 mx-1 btn-sm site-btn"><i className="fa fa-plus"></i> </Button>
                                                       <Button className="btn mt-5 mx-1 btn-sm site-btn"><i className="fa fa-minus"></i> </Button>
                                                  </Col>
                                             </Row>
                                        </Card.Body>
                                   </Card>
                              </Col>
                              <Col className="p-1" lg={5} md={5} sm={12} xs={12} >
                                   <Card>

                                   <Card.Header>
                                   <h6 className="text-center">Your information</h6>
                                   </Card.Header>
                                 
                                        <Card.Body>
                                             <Container fluid={true}>
                                                  <Row>
                                                       <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                            <label className="form-label">Choose City</label>
                                                            <select className="form-control">
                                                                 <option value="" disabled>Choose</option>
                                                                 <option value="Istanbul">Istanbul</option>
                                                                 <option value="Bursa">Bursa </option>
                                                                 <option value="Konya">Konya </option>
                                                                 <option value="Izmir">Izmir </option>
                                                                 <option value="Ankara">Ankara </option>
                                                            </select>
                                                       </div>
                                                       <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                            <label className="form-label">Choose Payment Method</label>
                                                            <select className="form-control">
                                                                 <option value="" disabled>Choose</option>
                                                                 <option value="Istanbul">Cache</option>
                                                                 <option value="Bursa">Mastercard </option>
                                                            </select>
                                                       </div>

                                                       <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                       <label className="form-label">Your Name</label>
                                                       <input  className="form-control" type="text" placeholder="your name" />
                                                  </div>


                                                  <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                  <label className="form-label">Delivery Address</label>
                                                  <textarea  rows={2} className="form-control" type="text" placeholder="your Address" />
                                             </div>

                                             <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                             <button  className="btn  site-btn"> confirm order </button>
                                             </div>







                                                  </Row>
                                             </Container>
                                        </Card.Body>
                                   </Card>
                              </Col>
                         </Row>
                    </Container>
               </Fragment>
          )
     }
}
export default CartList