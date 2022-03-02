import React, { Component } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import Slider from "react-slick";


export class HomeSlider extends Component {
  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed:1500,
    
    };



    return (
      <div>
      
      <Slider {...settings}>
        <div>
        <img className="slider_image"  src="https://minskhelp.com/wp-content/uploads/slider2/image-slider-with-thumbnail1.jpeg"/>
        </div>

        <div>
        <img className="slider_image"  src="https://media.gettyimages.com/photos/woman-with-laptop-camera-digital-tablet-and-parcel-with-clothes-picture-id670884781"/>
        </div>
      
      </Slider>
    </div>
    )
  }
}

export default HomeSlider