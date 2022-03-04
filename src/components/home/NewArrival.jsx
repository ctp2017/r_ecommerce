import React, { Component, Fragment } from 'react'
import '../../assets/css/custom.css'
import { Container, Row, Card } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export class NewArrival extends Component {
     render() {
          const settings = {
               dots: false,
               infinite: true,
               speed: 500,
               slidesToShow: 4,
               slidesToScroll: 1,
               autoplay: true,
               autoplaySpeed: 1500,
          };
          return (
               <Fragment>
                    <Container className="text-center" fluid={true}>
                         <div className="section-title text-center mb-55"><h2> New Arrival</h2>
                              <p>Some Of Our Exclusive Collection, You May Like</p>
                         </div>
                         <Row>
                              <Slider {...settings}>
                                   <div>
                                        <Card className="image-box card" >
                                             <img className="center" src="http://127.0.0.1:8000/upload/product/1724905152389272.jpeg" />
                                             <Card.Body>
                                                  <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                                  <p className="product-price-on-card">price : 100$</p>
                                             </Card.Body>
                                        </Card>
                                   </div>


                                   <div>
                                   <Card className="image-box card" >
                                        <img className="center" src="http://127.0.0.1:8000/upload/product/1724905152389272.jpeg" />
                                        <Card.Body>
                                             <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                             <p className="product-price-on-card">price : 100$</p>
                                        </Card.Body>
                                   </Card>
                              </div>

                              <div>
                              <Card className="image-box card" >
                                   <img className="center" src="http://127.0.0.1:8000/upload/product/1724905152389272.jpeg" />
                                   <Card.Body>
                                        <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                        <p className="product-price-on-card">price : 100$</p>
                                   </Card.Body>
                              </Card>
                         </div>

                         <div>
                         <Card className="image-box card" >
                              <img className="center" src="http://127.0.0.1:8000/upload/product/1724905152389272.jpeg" />
                              <Card.Body>
                                   <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                   <p className="product-price-on-card">price : 100$</p>
                              </Card.Body>
                         </Card>
                    </div>



                    <div>
                    <Card className="image-box card" >
                         <img className="center" src="http://127.0.0.1:8000/upload/product/1724905152389272.jpeg" />
                         <Card.Body>
                              <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                              <p className="product-price-on-card">price : 100$</p>
                         </Card.Body>
                    </Card>
               </div>
                              </Slider>
                         </Row>
                    </Container>
               </Fragment>
          )
     }
}
export default NewArrival