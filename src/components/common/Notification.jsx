import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card, Button, Modal } from 'react-bootstrap'
export class Notification extends Component {
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
                    <Container className="TopSection">
                         <Row>
                              <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                                   <Card>
                                        <Card.Body>
                                             <h6>Notification title</h6>
                                             <p className="py-1  px-0 text-primary m-0"><i className="fa fa-bell"></i>   Date: 06-3-2022 | Status: Unread</p>
                                             <Button onClick={this.handleShow} className="btn btn-danger">Details </Button>
                                        </Card.Body>
                                   </Card>
                              </Col>

                              <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                                   <Card>
                                        <Card.Body>
                                             <h6>Notification title</h6>
                                             <p className="py-1  px-0 text-primary m-0"><i className="fa fa-bell"></i>   Date: 06-3-2022 | Status: Unread</p>
                                             <Button onClick={this.handleShow} className="btn btn-danger">Details </Button>
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
                                             <Button onClick={this.handleShow} className="btn btn-danger">Details </Button>
                                        </Card.Body>
                                   </Card>
                              </Col>

                              <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                                   <Card>
                                        <Card.Body>
                                             <h6>Notification title</h6>
                                             <p className="py-1  px-0 text-primary m-0"><i className="fa fa-bell"></i>   Date: 06-3-2022 | Status: Unread</p>
                                             <Button onClick={this.handleShow} className="btn btn-danger">Details </Button>
                                        </Card.Body>
                                   </Card>
                              </Col>
                         </Row>

                        
                    </Container>

                    <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                         <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
export default Notification