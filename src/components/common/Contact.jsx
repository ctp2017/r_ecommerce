import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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