"use client";
import React from "react";
import Slider from "react-slick";
import FeedBackComponent from "./FeedBackComponent";

const FeedBackCarosuel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 3000,
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
