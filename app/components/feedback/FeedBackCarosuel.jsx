"use client";

import React from "react";
import Slider from "react-slick";
import FeedBackComponent from "./FeedBackComponent";

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

const FeedBackCarosuel = () => {
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const feedBacksData = [
    {
      id: 1,
      rate: 2,
      comment: "Good Company",
      text: "Delta compression using up to 8 threads Delta compression using up to 8 threads Delta compression using up to 8 threads",
      name: "ABCDEF",
      position: "CEIO",
      image: "/testimonial-v1-img1.jpg",
      company: "AAA",
    },
    {
      id: 2,
      rate: 3,
      comment: "Good Company",
      text: "Delta8 threads",
      name: "ABCDEF",
      position: "CEIO",
      image: "/testimonial-v1-img2.jpg",
      company: "AAA",
    },
    {
      id: 3,
      rate: 3,
      comment: "Good Company",
      text: "Delta compression using up to 8 threads Delta compression using up to 8 threads Delta compression using up to 8 threads",
      name: "ABCDEF",
      position: "CEIO",
      image: "/testimonial-v1-img2.jpg",
      company: "AAA",
    },
    {
      id: 4,
      rate: 4,
      comment: "Good Company",
      text: "Delta compression using up to 8 threads Delta compression using up to 8 threads Delta compression using up to 8 threads",
      name: "ABCDEF",
      position: "CEIO",
      image: "/testimonial-v1-img1.jpg",
      company: "AAA",
    },
  ];

  return (
    <div className="relative  items-center mx-auto py-5">
      <Slider {...settings}>
        {feedBacksData.map((item) => (
          <div key={item.id} className="text-center p-5  rounded-lg mx-2">
            <FeedBackComponent props={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeedBackCarosuel;
