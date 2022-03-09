import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import LoginImg from '../../assets/images/login.webp'
export class Register extends Component {
     render() {
          return (
               <Fragment>
                    <Container>
                         <Row>
                              <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                                   <Row className="text-center">

                                        <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                             <Form className="onboardForm" >
                                                  <h4 className="section-title-login"> USER REGISTER </h4>
                                                  <input className="form-control m-2" type="text" placeholder="Enter Your Name" />
                                                  <input className="form-control m-2" type="email" placeholder="Enter Your Email" />
                                                  <input className="form-control m-2" type="password" placeholder="Enter Your Password" />
                                                  <input className="form-control m-2" type="password" placeholder="Confirm Your Password" />
                                                  <Button type="submit" className="btn btn-block m-2 site-btn-login"> Sing Up </Button>
                                                  <br></br> <br></br>
                                                  <hr />
                                                  <p> <b> Forget My Password? </b><a ><b> Froget Password </b> </a> </p>
                                                  <p> <b> Already Have An Account ? </b><a><b> Login </b> </a> </p>
                                             </Form>
                                        </Col>

                                        <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                             <img className='onboardBanner' src={LoginImg} />
                                        </Col>

                                   </Row>
                              </Col>
                         </Row>
                    </Container>
               </Fragment>
          )
     }
}
export default Register