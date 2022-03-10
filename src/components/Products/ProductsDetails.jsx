import React, { Component, Fragment} from 'react'
import { Container ,Row, Col } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
export class ProductsDetails extends Component {
     render() {
          return (
               <Fragment>
                    <Container fluid={true}>

                         <div className="breadbody">
                              <Breadcrumb>
                                   <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                   <Breadcrumb.Item href="">
                                        Library
                                   </Breadcrumb.Item>
                                   <Breadcrumb.Item>Data</Breadcrumb.Item>
                              </Breadcrumb>
                         </div>


                         <Row className="p-2">
                         <Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
                              <Row>
                                   <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                                        <Row className="p-2">
                                             <Col md={2} lg={2} sm={12} xs={12} >
                                                  <Col className="p-0 m-0" >
                                                       <img className="smallimage product-sm-img"  src="https://rukminim1.flixcart.com/image/612/612/kvcpn680/tv-entertainment-unit/0/j/s/-original-imag8a59dazfamuh.jpeg?q=70" />
                                                  </Col>
                                                  <Col className="p-0 m-0" md={12} lg={12} sm={3} xs={3}>
                                                  <img className="smallimage product-sm-img"  src="https://rukminim1.flixcart.com/image/612/612/kvcpn680/tv-entertainment-unit/0/j/s/-original-imag8a59dazfamuh.jpeg?q=70" />
                                                  </Col>
                                                  <Col className="p-0 m-0" md={12} lg={12} sm={3} xs={3}>
                                                  <img className="smallimage product-sm-img"  src="https://rukminim1.flixcart.com/image/612/612/kvcpn680/tv-entertainment-unit/0/j/s/-original-imag8a59dazfamuh.jpeg?q=70" />
                                                  </Col>
                                                  <Col className="p-0 m-0" md={12} lg={12} sm={3} xs={3}>
                                                  <img className="smallimage product-sm-img"  src="https://rukminim1.flixcart.com/image/612/612/kvcpn680/tv-entertainment-unit/0/j/s/-original-imag8a59dazfamuh.jpeg?q=70" />
                                                  </Col>
                                             </Col>
                                             <Col md={10} lg={10} sm={12} xs={12} >
                                                

                                                  <InnerImageZoom zoomType={"hover"} zoomScale={1.5} className="main-image" src="https://rukminim1.flixcart.com/image/612/612/kvcpn680/tv-entertainment-unit/0/j/s/-original-imag8a59dazfamuh.jpeg?q=70" zoomSrc="https://rukminim1.flixcart.com/image/612/612/kvcpn680/tv-entertainment-unit/0/j/s/-original-imag8a59dazfamuh.jpeg?q=70" zoomSrc="https://rukminim1.flixcart.com/image/612/612/kvcpn680/tv-entertainment-unit/0/j/s/-original-imag8a59dazfamuh.jpeg?q=70" />
                                             </Col>
                                        </Row>
                                   </Col>
                                   <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                                        <h5 className="Product-Name">product name</h5>
                                        <h6 className="section-sub-title"> short_description</h6>
                                        price, special_price
                                        <h6 className="mt-2">Category : <b>category</b>  </h6>
                                        <h6 className="mt-2">SubCategory : <b>subcategory</b></h6>
                                        <h6 className="mt-2">Brand : <b>brand</b></h6>
                                        <h6 className="mt-2">Product Code : <b>product_code</b></h6>

                                        <div >
                                             <h6 className="mt-2"> Choose Color  </h6>
                                             <select className="form-control form-select">
                                                  <option disabled>Choose Color</option>
                                                  <option>Red</option>
                                                  <option>green</option>

                                             </select>
                                        </div>
                                        <div >
                                             <h6 className="mt-2"> Choose Size  </h6>
                                             <select className="form-control form-select">
                                             <option disabled>Choose Color</option>
                                             <option>Large</option>
                                             <option>small</option>

                                             </select>
                                        </div>
                                        <div className="" >
                                             <h6 className="mt-2" > Choose Quantity  </h6>
                                             <select  className="form-control form-select">
                                                  <option disabled>Choose Quantity</option>
                                                  <option value="01">01</option>
                                                  <option value="02">02</option>
                                                  <option value="03">03</option>
                                                  <option value="04">04</option>
                                                  <option value="05">05</option>
                                                  <option value="06">06</option>
                                                  <option value="07">07</option>
                                                  <option value="08">08</option>
                                                  <option value="09">09</option>
                                                  <option value="10">10</option>
                                             </select>
                                        </div>
                                        <div className="input-group mt-3">
                                             <button className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"></i>  addToCart </button>
                                             <button className="btn btn-success m-1"> <i className="fa fa-car"></i> OrderNow </button>
                                             <button className="btn btn-secondary m-1"> <i className="fa fa-heart"></i> addToFav </button>
                                        </div>
                                   </Col>
                              </Row>

                              <Row>
                                   <Col className="" md={6} lg={6} sm={12} xs={12}>
                                        <h6 className="mt-2">DETAILS</h6>
                                        <p> Bank Offer10% off on Punjab National Bank Cards, up to $1500. On Orders of $5000 and aboveT&C Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth $100*Know More Partner OfferBuy this product and get upto $500 off on Flipkart FurnitureKnow More </p>
                                   </Col>
                                   <Col className="" md={6} lg={6} sm={12} xs={12}>
                                       review 
                                   </Col>
                              </Row>
                         </Col>
                    </Row>



                    </Container>
               </Fragment>
          )
     }
}
export default ProductsDetails