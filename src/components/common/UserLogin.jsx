import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import LoginImg from '../../assets/images/login.webp'

export class UserLogin extends Component {
  render() {
    return (
      <Fragment>

      <Container>
      <Row>
           <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                <Row className="text-center">

                     <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                          <Form className="onboardForm" >
                               <h4 className="section-title-login"> USER Login </h4>
                              
                               <input className="form-control m-2" type="email" placeholder="Enter Your Email" />
                               <input className="form-control m-2" type="password" placeholder="Enter Your Password" />
                           
                               <Button type="submit" className="btn btn-block m-2 site-btn-login"> Login </Button>
                               <br></br> <br></br>
                               <hr />
                               <p> <b> Forget My Password? </b><a ><b> Froget Password </b> </a> </p>
                               <p> <b> New User ? </b><a><b> Register </b> </a> </p>
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

export default UserLogin