"use client";
import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % changes.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [changes.length]);

  const currentChange = changes[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div
      className="w-full bg-cover bg-center py-32"
      style={{ backgroundImage: `url(${currentChange.image})` }}
    >
      <div className="flex justify-between items-center">
        <div className="m-10 bg-white p-3 flex flex-col justify-center hover:bg-[#ffb237] rounded-xl transition-colors duration-1000 ease-in-out">
          <button onClick={handlePrevious}>
            <ArrowBackIosIcon />
          </button>
        </div>
        <div className="flex flex-col py-6">
          <div className="flex justify-center">
            <div className="bg-white p-3 rounded-full">
              <Image
                src="/company-logo.png"
                width={30}
                height={30}
                alt="logo"
              />
            </div>
          </div>
          <div className="text-9xl flex justify-center content-center text-center font-bold text-white hover:text-amber-100 transition-colors duration-1000 ease-in-out">
            {currentChange.text}
          </div>
          <div className="flex justify-center text-2xl py-4">
            <div className="py-4 px-7 bg-[#ffb237] mx-4 rounded-xl hover:bg-white hover:text-black transition-colors duration-1000 ease-in-out">
              View Our Services
            </div>
            <div className="py-4 px-7 bg-white mx-4 rounded-xl hover:bg-[#ffb237] hover:text-black transition-colors duration-1000 ease-in-out">
              Learn More
            </div>
          </div>
        </div>
        <div className="m-10 bg-white p-3 hover:bg-[#ffb237] rounded-xl transition-colors duration-1000 ease-in-out">
          <button onClick={handleNext}>
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSlider;
