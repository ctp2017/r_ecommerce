import React, { Component, Fragment } from 'react'
import { Col, Container,Row,Card,Button } from 'react-bootstrap'

export class CartList extends Component {
  render() {
    return (
     <Fragment>

     <Container fluid={true}>
     <Row>
     <Col  className="p-1" lg={7} md={7} sm={12} xs={12} >
     
     <Card >
     <Card.Body>
          <Row>
               <Col md={3} lg={3} sm={6} xs={6}>
                    <img className="cart-product-img" src="http://127.0.0.1:8000/upload/product/1725828427740611.jpeg"/>
               </Col>

               <Col  className='product-name' md={6} lg={6} sm={7} xs={7} >
                    <h5>Home Sizzler 214 cm (7 ft)</h5>
                    <h6> Quantity = 7 </h6>
                    <p>large | Red</p>
                    <h6>Price = 10 x 7 = 10 $</h6>

               </Col>

               <Col md={3} lg={3} sm={2} xs={2}>

               <Button className="btn mt-5 mx-1 btn-sm site-btn"><i className="fa fa-trash-alt"></i> </Button>

               <Button  className="btn mt-5 mx-1 btn-sm site-btn"><i className="fa fa-plus"></i> </Button>
     
               <Button  className="btn mt-5 mx-1 btn-sm site-btn"><i className="fa fa-minus"></i> </Button>

               </Col>
          </Row>
     </Card.Body>
   </Card>

   <Card >
   <Card.Body>
        <Row>
             <Col md={3} lg={3} sm={6} xs={6}>
                  <img className="cart-product-img" src="http://127.0.0.1:8000/upload/product/1725828427740611.jpeg"/>
             </Col>

             <Col  className='product-name' md={6} lg={6} sm={7} xs={7} >
                  <h5>Home Sizzler 214 cm (7 ft)</h5>
                  <h6> Quantity = 7 </h6>
                  <p>large | Red</p>
                  <h6>Price = 10 x 7 = 10 $</h6>

             </Col>

             <Col md={3} lg={3} sm={2} xs={2}>

             <Button className="btn mt-5 mx-1 btn-sm site-btn"><i className="fa fa-trash-alt"></i> </Button>

             <Button  className="btn mt-5 mx-1 btn-sm site-btn"><i className="fa fa-plus"></i> </Button>
   
             <Button  className="btn mt-5 mx-1 btn-sm site-btn"><i className="fa fa-minus"></i> </Button>

             </Col>
        </Row>
   </Card.Body>
 </Card>
    

     </Col>
     
     <Col  className="p-1" lg={5} md={5} sm={12} xs={12} >
     
     </Col>
     
     
     </Row>
     
     
     
     </Container>
     
     
     
     
     </Fragment>
    )
  }
}

export default CartList