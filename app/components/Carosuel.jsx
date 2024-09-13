'use client';

import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 right-0 transform -translate-y-1/2 bg-red-500 text-white rounded-full p-2 cursor-pointer`}
      style={{ ...style, zIndex: 10 }} 
      onClick={onClick}
    >
      &#9654; 
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 left-0 transform -translate-y-1/2 bg-green-500 text-white rounded-full p-2 cursor-pointer`}
      style={{ ...style, zIndex: 10 }} 
      onClick={onClick}
    >
      &#9664; 
    </div>
  );
}

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 2100,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const carouselItems = [
    { id: 1, content: "1" },
    { id: 2, content: "2" },
    { id: 3, content: "3" },
    { id: 4, content: "4" },
    { id: 5, content: "5" },
    { id: 6, content: "6" },
  ];

  return (
    <div className="relative w-[80%] mx-auto py-5"> 
      <Slider {...settings}>
        {carouselItems.map((item) => (
          <div key={item.id} className="text-center p-5 bg-gray-200 rounded-lg mx-2">
            <h3>{item.content}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
