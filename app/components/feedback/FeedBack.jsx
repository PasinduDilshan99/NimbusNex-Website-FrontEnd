"use client";
import React, { useState, useEffect } from "react";
import FeedBackComponent from "./FeedBackComponent";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const FeedBack = () => {
  const feedBacksData = [
    {
      id: 1,
      rate: 4,
      comment: "Good Company",
      text: "Delta compression using up to 8 threads Delta compression using up to 8 threads Delta compression using up to 8 threads",
      name: "ABCDEF",
      position: "CEIO",
      image: "/testimonial-v1-img1.jpg",
      company: "AAA",
    },
    {
      id: 2,
      rate: 5,
      comment: "Good Company",
      text: "Delta8 threads",
      name: "ABCDEF",
      position: "CEIO",
      image: "/testimonial-v1-img2.jpg",
      company: "AAA",
    },
    {
      id: 3,
      rate: 2,
      comment: "Good Company",
      text: "Delta compression using up to 8 threads Delta compression using up to 8 threads Delta compression using up to 8 threads",
      name: "ABCDEF",
      position: "CEIO",
      image: "",
      company: "AAA",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedBacksData.length);
    }, 12000); 

    return () => clearInterval(interval); 
  }, [feedBacksData.length]);

  return (
    <div className="flex flex-col items-center mt-20 p-10 bg-yellow-100">
      <div className="flex">
        <div>
          <BorderColorIcon />
        </div>
        <div className="px-4 text-lg">Our Testimonial</div>
      </div>
      <div className="text-5xl font-bold text-center p-6">
        Our Client Feedback What
        <br />
        Theyre Talking?
      </div>
      <div className="m-3  bg-white w-[400px] md:w-[720px] lg:[100%]">
        <TransitionGroup>
          <CSSTransition
            key={feedBacksData[currentIndex].id}
            timeout={500}
            classNames="fade"
          >
            <FeedBackComponent props={feedBacksData[currentIndex]} />
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default FeedBack;
