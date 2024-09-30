import React from "react";
import Slider from "react-slick";
import './Banner.css';

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container container">
      <Slider {...settings}>
        <div>
        <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1726466656banner_desktop_(22).webp" alt="banner" />
        </div>
        <div>
        <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1725348601Desktop_Banner_(49).webp" alt="banner" />
        </div>
        <div>
        <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1726467952Hamleys_Website_Banner.webp" alt="banner" />
        </div>
        <div>
        <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/17213777841817x747_Gaming_1.webp" alt="banner" />
        </div>
        <div>
        <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/17216505861817x747_NGF.webp" alt="banner" />
        </div>
    
      </Slider>
    </div>
  );
}

export default SimpleSlider;
