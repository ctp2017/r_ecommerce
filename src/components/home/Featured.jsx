import React, { Component, Fragment } from 'react'
import'../../assets/css/custom.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export class Featured extends Component {
  render() {
    return (
    <Fragment>
    <Container className="text-center" fluid={true}>
    <div className="section-title text-center mb-55"><h2> Featured Products</h2>
         <p>Some Of Our Exclusive Collection, You May Like</p>
    </div>
    <Row >

   <Col className="p-1" lg={2} md={2} sm={6} >
        <div>
        <Link className="text-link" to="/productdetails">
             <Card className="image-box card w-100" >
                  <img className="center" src="http://127.0.0.1:8000/upload/product/1724910411285630.jpeg" />
                  <Card.Body>
                       <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>

                       <div>
                       <span className="text-warning">
                       <i className="fa fa-star"></i> 
                        <i className="fa fa-star"></i> 
                        <i className="fa fa-star"></i>
                       </span>
                        <span >
                          <i className="fa fa-star">
                         </i> <i className="fa fa-star"></i> 
                         </span>
                       </div>

                       <p className="product-price-on-card">price : 100$</p>
                  </Card.Body>
             </Card>
             </Link>
        </div>
    </Col>


    <Col className="p-1" lg={2} md={2} sm={6} >
    <div>
    <Link className="text-link" to="/productdetails">
         <Card className="image-box card w-100" >
              <img className="center w-75" src="http://127.0.0.1:8000/upload/product/1724918399859789.jpeg" />
              <Card.Body>
                   <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>

                   <div>
                   <span className="text-warning">
                   <i className="fa fa-star"></i> 
                    <i className="fa fa-star"></i> 
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"> </i>
                   </span>
                    <span >
                     
                     <i className="fa fa-star"></i> 
                     </span>
                   </div>



                   <p className="product-price-on-card">price : 100$</p>
              </Card.Body>
         </Card>
         </Link>
    </div>
</Col>

<Col className="p-1" lg={2} md={2} sm={6} >
        <div>
             <Card className="image-box card w-100" >
                  <img className="center w-75" src="http://127.0.0.1:8000/upload/product/1724910411285630.jpeg" />
                  <Card.Body>
                       <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                       <div>
                       <span className="text-warning">
                       <i className="fa fa-star"></i> 
                        <i className="fa fa-star"></i> 
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"> </i>
                       </span>
                        <span >
                         
                         <i className="fa fa-star"></i> 
                         </span>
                       </div>
    
                       <p className="product-price-on-card">price : 100$</p>
                  </Card.Body>
             </Card>
        </div>
    </Col>


    <Col className="p-1" lg={2} md={2} sm={6} >
    <div>
         <Card className="image-box card w-100" >
              <img className="center w-75" src="http://127.0.0.1:8000/upload/product/1724918399859789.jpeg" />
              <Card.Body>
                   <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                   <div>
                   <span className="text-warning">
                   <i className="fa fa-star"></i> 
                    <i className="fa fa-star"></i> 
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"> </i>
                   </span>
                    <span >
                     
                     <i className="fa fa-star"></i> 
                     </span>
                   </div>

                   <p className="product-price-on-card">price : 100$</p>
              </Card.Body>
         </Card>
    </div>
</Col>
<Col className="p-1" lg={2} md={2} sm={6} >
        <div>
             <Card className="image-box card w-100" >
                  <img className="center w-75" src="http://127.0.0.1:8000/upload/product/1724910411285630.jpeg" />
                  <Card.Body>
                       <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                       <div>
                       <span className="text-warning">
                       <i className="fa fa-star"></i> 
                        <i className="fa fa-star"></i> 
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"> </i>
                       </span>
                        <span >
                         
                         <i className="fa fa-star"></i> 
                         </span>
                       </div>
    
                       <p className="product-price-on-card">price : 100$</p>
                  </Card.Body>
             </Card>
        </div>
    </Col>


    <Col className="p-1" lg={2} md={2} sm={6} >
    <div>
         <Card className="image-box card w-100" >
              <img className="center w-75" src="http://127.0.0.1:8000/upload/product/1724918399859789.jpeg" />
              <Card.Body>
                   <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                   <div>
                   <span className="text-warning">
                   <i className="fa fa-star"></i> 
                    <i className="fa fa-star"></i> 
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"> </i>
                   </span>
                    <span >
                     
                     <i className="fa fa-star"></i> 
                     </span>
                   </div>

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

export default Featured