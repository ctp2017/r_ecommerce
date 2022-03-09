import React, { Component,Fragment } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export class ResetPassword extends Component {
  render() {
    return (
     <Fragment>

     <Container>
     <Row>
          <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
               <Row className="text-center">

                    <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                         <Form className="onboardForm" >
                              <h4 className="section-title-login"> Reset Password  </h4>
                             
                              <input className="form-control m-2" type="text" placeholder="Enter pincode" />
                              <input className="form-control m-2" type="email" placeholder="Enter Your Email" />
                              <input className="form-control m-2" type="password" placeholder="Enter Your New Password " />
                              <input className="form-control m-2" type="password" placeholder="Confirm your Password" />
                             
                          
                              <Button type="submit" className="btn btn-block m-2 site-btn-login"> Reset Password </Button>
                             
                         </Form>
                    </Col>

                    <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                         <img className='onboardBanner' src="https://img.freepik.com/free-vector/reset-password-concept-illustration_114360-7866.jpg?w=740" />
                    </Col>

               </Row>
          </Col>
     </Row>
</Container>
     
     
     
     
     </Fragment>
    )
  }
}

export default ResetPassword