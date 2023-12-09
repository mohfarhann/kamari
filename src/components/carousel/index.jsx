import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from "../card"

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: true, // Aktifkan penggeseran (swipe)
  swipeToSlide: true
};

const Carousel = () => {
  return (
    <Slider {...settings}>
      <div>
        <Card />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Card />
      </div>
      {/* Tambahkan gambar lainnya sesuai kebutuhan */}
    </Slider>
  );
};

export default Carousel;