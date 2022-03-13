import React, { Component, Fragment } from 'react'
import '../../assets/css/custom.css'
import { Container, Row, Card } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
export class NewArrival extends Component {


constructor(){
     super();

     this.next=this.next.bind(this);
     this.previous=this.previous.bind(this)

}



     next(){
          this.slider.slickNext();
     }
     previous(){
          this.slider.slickPrev();
     }



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
                         <div className="section-title text-center mb-55"><h2> New Arrival    &nbsp;
                         
                         <a className="btn btn-sm ml-2 site-btn"  onClick={this.previous} ><i className="fa fa-angle-left"></i></a>
                         &nbsp;
                         <a className="btn btn-sm ml-2 site-btn"  onClick={this.next}  ><i className="fa fa-angle-right"></i></a>
                         
                         </h2>
                              <p>Some Of Our Exclusive Collection, You May Like</p>
                         </div>
                         <Row>
                              <Slider ref={c=>(this.slider=c)}  {...settings}>
                                   <div>
                                   <Link to="/productdetails">
                                        <Card className="image-box card" >
                                             <img className="center" src="http://127.0.0.1:8000/upload/product/1724905152389272.jpeg" />
                                             <Card.Body>
                                                  <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                                  <p className="product-price-on-card">price : 100$</p>
                                             </Card.Body>
                                        </Card>
                                        </Link>
                                   </div>


                                   <div>
                                   <Link to="/productdetails">
                                   <Card className="image-box card" >
                                        <img className="center" src="http://127.0.0.1:8000/upload/product/1724905152389272.jpeg" />
                                        <Card.Body>
                                             <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                             <p className="product-price-on-card">price : 100$</p>
                                        </Card.Body>
                                   </Card>
                                   </Link>
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