import React, { Component, Fragment } from 'react'
import'../../assets/css/custom.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
export class Collection extends Component {
  render() {
    return (
     <Fragment>
     <Container className="text-center" fluid={true}>
                         <div className="section-title text-center mb-55"><h2> Collection</h2>
                              <p>Some Of Our Exclusive Collection, You May Like</p>
                         </div>
                         <Row>

                        <Col className="p-0" lg={3} md={3} sm={6} >
                             <div>
                             <Link to="/productdetails">
                                  <Card className="image-box card w-100" >
                                       <img className="center w-75" src="http://127.0.0.1:8000/upload/product/1725816573871097.jpeg" />
                                       <Card.Body>
                                            <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                            <p className="product-price-on-card">price : 100$</p>
                                       </Card.Body>
                                  </Card>
                                  </Link>
                             </div>
                         </Col>


                         <Col className="p-0" lg={3} md={3} sm={6} >
                         <div>
                         <Link to="/productdetails">
                              <Card className="image-box card w-100" >
                                   <img className="center w-75" src="http://127.0.0.1:8000/upload/product/1724908814860957.jpeg" />
                                   <Card.Body>
                                        <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                        <p className="product-price-on-card">price : 100$</p>
                                   </Card.Body>
                              </Card>
                              </Link>
                         </div>
                     </Col>

                     <Col className="p-0" lg={3} md={3} sm={6} >
                     <div>
                     <Link to="/productdetails">
                          <Card className="image-box card w-100" >
                               <img className="center w-75" src="http://127.0.0.1:8000/upload/product/1724919421062484.jpeg" />
                               <Card.Body>
                                    <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                    <p className="product-price-on-card">price : 100$</p>
                               </Card.Body>
                          </Card>
                          </Link>
                     </div>
                 </Col>

                 <Col className="p-0" lg={3} md={3} sm={6} >
                 <div>
                      <Card className="image-box card w-100" >
                           <img className="center w-75" src="http://127.0.0.1:8000/upload/product/1725816573871097.jpeg" />
                           <Card.Body>
                                <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                <p className="product-price-on-card">price : 100$</p>
                           </Card.Body>
                      </Card>
                 </div>
             </Col>


             <Col className="p-0" lg={3} md={3} sm={6} >
             <div>
                  <Card className="image-box card w-100" >
                       <img className="center w-75" src="http://127.0.0.1:8000/upload/product/1724919421062484.jpeg" />
                       <Card.Body>
                            <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                            <p className="product-price-on-card">price : 100$</p>
                       </Card.Body>
                  </Card>
             </div>
         </Col>

         <Col className="p-0" lg={3} md={3} sm={6} >
         <div>
              <Card className="image-box card w-100" >
                   <img className="center w-75" src="http://127.0.0.1:8000/upload/product/1724908814860957.jpeg" />
                   <Card.Body>
                        <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                        <p className="product-price-on-card">price : 100$</p>
                   </Card.Body>
              </Card>
         </div>
     </Col>
     <Col className="p-0" lg={3} md={3} sm={6} >
     <div>
          <Card className="image-box card w-100" >
               <img className="center w-75" src="http://127.0.0.1:8000/upload/product/1724919421062484.jpeg" />
               <Card.Body>
                    <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                    <p className="product-price-on-card">price : 100$</p>
               </Card.Body>
          </Card>
     </div>
 </Col>

 <Col className="p-0" lg={3} md={3} sm={6} >
 <div>
      <Card className="image-box card w-100" >
           <img className="center w-75" src="http://127.0.0.1:8000/upload/product/1724908814860957.jpeg" />
           <Card.Body>
                <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                <p className="product-price-on-card">price : 100$</p>
           </Card.Body>
      </Card>
 </div>
</Col>

                         </Row>
                    </Container>
     </Fragment>
    )
  }
}
export default Collection