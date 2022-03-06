import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import '../../assets/css/custom.css'
export class Contact extends Component {
     render() {
          return (
               <Fragment>
                    <Container>
                         <Row className="p-2">

                              <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                                   <Row className="text-center">
                                   
                                        <Col className="p-0 m-0" md={6} lg={6} sm={6} xs={6}>
                                             <br></br><br></br>
                                             <p>  meram, Sarayköy Mahallesi, 42155 Meram/Konya, Turkey  <br></br>
                                                  email : Support@ctp.com
                                             </p>
                                             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201549.65020671624!2d32.36639610609625!3d37.87869451502662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d08568d615f745%3A0x240dd0fc08060967!2sKonya!5e0!3m2!1snl!2str!4v1646560022419!5m2!1snl!2str" width="600" height="450" styles="border:0;" allowfullscreen="" loading="lazy"></iframe>
                                        </Col>

                                        <Col className="justify-content-center d-flex" md={6} lg={6} sm={12} xs={12}>
                                             <Form id="contactForm" className="onboardForm" rows="4" cols="50" >
                                                  <h4 className="section-title-login">CONTACT WITH US </h4>
                                                  <h6 className="section-sub-title">Please Contact With Us </h6>
                                                  <input className="form-control m-2" type="text" placeholder="Enter Your Name" />
                                                  <input className="form-control m-2" type="email" placeholder="Enter Email" />
                                                  <Form.Control className="form-control m-2" as="textarea" rows={3} placeholder="your Message" />
                                                  <Button id="sendBtn" type="submit" className="btn btn-block m-2 site-btn-login"> Send </Button>
                                             </Form>
                                        </Col>

                                   </Row>
                              </Col>
                         </Row>
                    </Container>
               </Fragment>
          )
     }
}
export default Contact