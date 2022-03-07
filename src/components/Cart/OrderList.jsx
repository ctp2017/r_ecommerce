import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
export class OrderList extends Component {
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
               </Fragment>
          )
     }
}
export default OrderList