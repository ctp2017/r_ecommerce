import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../assets/css/custom.css'
import Cat1 from '../../assets/images/categories/lights.png'
export class Categories extends Component {



     render() {
          return (
               <Fragment>
                    <Container className="text-center" fluid={true}>
                         <div className="section-title text-center mb-55"><h2> CATEGORIES</h2>
                              <p>Some Of Our Exclusive Collection, You May Like</p>
                         </div>
                    </Container>
                    <Row>

                         <Col lg={2} md={2} sm={6}>
                         <Link to="/category">
                              <Card className="h-100 w-100 text-center" >
                                   <Card.Body>
                                        <img className="center" src={Cat1} />
                                        <h4 className="category-name">Living Room </h4>
                                   </Card.Body>
                              </Card>
                              </Link>
                         </Col>


                         <Col lg={2} md={2} sm={6}>
                         <Link to="/category">
                              <Card className="h-100 w-100 text-center" >
                                   <Card.Body>
                                        <img className="center" src={Cat1} />
                                        <h4 className="category-name">Living Room </h4>
                                   </Card.Body>
                              </Card>
                              </Link>
                         </Col>

                         <Col lg={2} md={2} sm={6}>
                         <Link to="/category">
                              <Card className="h-100 w-100 text-center" >
                                   <Card.Body>
                                        <img className="center" src={Cat1} />
                                        <h4 className="category-name">Living Room </h4>
                                   </Card.Body>
                              </Card>
                              </Link>
                         </Col>

                         <Col lg={2} md={2} sm={6}>
                         <Link to="/category">
                              <Card className="h-100 w-100 text-center" >
                                   <Card.Body>
                                        <img className="center" src={Cat1} />
                                        <h4 className="category-name">Living Room </h4>
                                   </Card.Body>
                              </Card>
                              </Link>
                         </Col>

                         <Col lg={2} md={2} sm={6}>
                         <Link to="/category">
                              <Card className="h-100 w-100 text-center" >
                                   <Card.Body>
                                        <img className="center" src={Cat1} />
                                        <h4 className="category-name">Living Room </h4>
                                   </Card.Body>
                              </Card>
                              </Link>
                         </Col>

                         <Col lg={2} md={2} sm={6}>
                         <Link to="/category">
                              <Card className="h-100 w-100 text-center" >
                                   <Card.Body>
                                        <img className="center" src={Cat1} />
                                        <h4 className="category-name">Living Room </h4>
                                   </Card.Body>
                              </Card>
                              </Link>
                         </Col>





                    </Row>
               </Fragment>
          )
     }
}
export default Categories