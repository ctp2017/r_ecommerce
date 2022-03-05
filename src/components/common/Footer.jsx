import React, { Component, Fragment } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import '../../assets/css/custom.css'
export class Footer extends Component {
     render() {
          return (
               <Fragment>
                    <div className="footerback  m-0 mt-4 pt-2 shadow-sm">
                         <Container>
                              <Row>
                                   <Col className="p-2" lg={3} md={3} sm={6} >
                                        <h5 className="footer-menu-title" >Contact us </h5>
                                        <a className='facebook social'><i className="fab mt-4 m-2 h4 fa-facebook"></i></a>
                                        <a className='facebook social'><i className="fab m-2 h4 fa-instagram"></i></a>
                                        <a className='facebook social'><i className="fab m-2 h4 fa-twitter"></i></a>
                                        <a className='facebook social'><i className="fab m-2 h4 fa-linkedin"></i></a>
                                        <a className='facebook social'><i className="fab m-2 h4 fa-youtube"></i></a>
                                   </Col>
                                   <Col className="p-2" lg={3} md={3} sm={6} >
                                        <h5 className="footer-menu-title">More Information </h5>
                                        <a className="footer-link" >purchase policy</a ><br></br>
                                        <a className="footer-link"> Privcey policy</a ><br></br>
                                        <a className="footer-link" > Refund Policy </a ><br></br>
                                   </Col>
                                   <Col className="p-2" lg={3} md={3} sm={6} >
                                        <h5 className="footer-menu-title">About Company </h5>
                                        <a className="footer-link" >About us</a ><br></br>
                                        <a className="footer-link">Company</a ><br></br>
                                        <a className="footer-link" >Contact us </a ><br></br>
                                   </Col>
                                   <Col className="p-2" lg={3} md={3} sm={6} >
                                        <h5 className="footer-menu-title">Company Address </h5>
                                        <p className='address' >1765 Zafer Street - near the city of center </p>
                                        <span className='address'> <i className="fa fa-envelope"></i> info@ctp.com </span>
                                   </Col>
                              </Row>
                              <h5 className='address'> Change Your Language </h5> <br></br>
                              <div id="google_translate_element">  </div>
                         </Container>
                         <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
                              <Container>
                                   <Row>
                                        <h6 className="address">All Rights is reserved for ctp 2022 </h6>
                                   </Row>
                              </Container>
                         </Container>
                    </div>
               </Fragment>
          )
     }
}
export default Footer