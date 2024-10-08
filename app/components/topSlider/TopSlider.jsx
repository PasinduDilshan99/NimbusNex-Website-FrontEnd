"use client";
import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import "../../css/topSlider/topSlider.css";
import WhiteBottomToTop from "../buttons/WhiteBottomToTop";
import YellowTopToBottom from "../buttons/YellowTopToBottom";
import YellowBottomToTop from "../buttons/YellowBottomToTop";

const TopSlider = () => {
  const changes = [
    {
      id: 1,
      image: "/slider-v3-img1.jpg",
      text: "We Are Ready To Provide your it solutions",
    },
    {
      id: 2,
      image: "/slider-v2-img2.jpg",
      text: "We Are Ready To Provide your it solutions",
    },
    {
      id: 3,
      image: "/slider-v2-img3.jpg",
      text: "We Are Ready To Provide your it solutions",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % changes.length);
      setAnimateText(true);
    }, 5000);

    return () => clearInterval(interval);
  }, [changes.length]);

  useEffect(() => {
    setAnimateText(true);
    const timer = setTimeout(() => setAnimateText(false), 3000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentChange = changes[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? changes.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === changes.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div   style={{ backgroundImage: `url(${currentChange.image})` }}>
    <div
      className={` image-container w-full bg-cover  bg-center scale-110 py-24 ${
        animateText ? "topSliderImageEntry topSliderImageZoom " : ""
      }`}
      style={{ backgroundImage: `url(${currentChange.image})` }}
    >
      <div className="flex justify-between items-center image-content">
        <div
          className={`hidden m-24 bg-white p-3 md:flex flex-col justify-center hover:bg-[#ffb237] rounded-xl transition-colors duration-3000 ease-in-out `}
        >
          <button onClick={handlePrevious}>
            <ArrowBackIosIcon />
          </button>
        </div>
        <div className={`flex flex-col py-6 `}>
          <div className="flex justify-center">
            <div
              className={`bg-white p-3 rounded-full hover:bg-[#ffb237] transition-colors duration-1000 ease-in-out ${
                animateText ? "text-top-animate" : ""
              }`}
            >
              <Image
                src="/company-logo.png"
                width={30}
                height={30}
                alt="logo"
              />
            </div>
          </div>
          <div
            className={`text-4xl md:text-5xl lg:text-7xl capitalize flex my-8 px-4 justify-center content-center text-center font-bold text-white hover:text-amber-500 transition-colors duration-1000 ease-in-out ${
              animateText ? "text-top-animate" : ""
            }`}
          >
            {currentChange.text}
          </div>
          <div
            className={`flex flex-col lg:flex-row justify-center items-center text-2xl py-4 grow ${
              animateText ? "text-bottom-animate" : ""
            }`}
          >
            <div className="p-4 mx-4 ">
              <WhiteBottomToTop props={{ text: "  View Our Services" }} />
            </div>
            <div className="p-4 ">
              <YellowBottomToTop props={{ text: "Learn More" }} />
            </div>
          </div>
        </div>
        <div className="hidden md:flex m-24 bg-white p-3 hover:bg-[#ffb237] rounded-xl transition-colors duration-1000 ease-in-out">
          <button onClick={handleNext}>
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TopSlider;
