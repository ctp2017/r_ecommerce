import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'

export class Notification extends Component {
     render() {
          return (
               <Fragment>
                    <Container>
                         <Row>
                              <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                                   <Card>
                                        <Card.Body>
                                             <h6>Notification title</h6>
                                             <p className="py-1  px-0 text-primary m-0"><i className="fa fa-bell"></i>   Date: 06-3-2022 | Status: Unread</p>

                                             <Button className="btn btn-danger">Details </Button>
                                        </Card.Body>
                                   </Card>




                              </Col>

                              <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                                   <Card>
                                        <Card.Body>
                                             <h6>Notification title</h6>
                                             <p className="py-1  px-0 text-primary m-0"><i className="fa fa-bell"></i>   Date: 06-3-2022 | Status: Unread</p>

                                             <Button className="btn btn-danger">Details </Button>
                                        </Card.Body>
                                   </Card>




                              </Col>


                         </Row>


                         <Row>
                         <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                              <Card>
                                   <Card.Body>
                                        <h6>Notification title</h6>
                                        <p className="py-1  px-0 text-primary m-0"><i className="fa fa-bell"></i>   Date: 06-3-2022 | Status: Unread</p>

                                        <Button className="btn btn-danger">Details </Button>
                                   </Card.Body>
                              </Card>




                         </Col>

                         <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                              <Card>
                                   <Card.Body>
                                        <h6>Notification title</h6>
                                        <p className="py-1  px-0 text-primary m-0"><i className="fa fa-bell"></i>   Date: 06-3-2022 | Status: Unread</p>

                                        <Button className="btn btn-danger">Details </Button>
                                   </Card.Body>
                              </Card>




                         </Col>


                    </Row>


                    </Container>


               </Fragment>
          )
     }
}

export default Notification