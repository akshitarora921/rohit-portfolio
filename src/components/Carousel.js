import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel({ slidesToShow, childern }) {
  const settings = {
    dots: true,
    adaptiveHeight: true,
    speed: 1500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    accessibility: false,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesToShow,
          slidesToScroll: 3,
          infinite: false,
          autoplay: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };
  return <Slider {...settings}>{childern}</Slider>;
}

export default Carousel;
